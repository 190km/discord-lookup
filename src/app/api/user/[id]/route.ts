import { NextResponse } from "next/server";
import { snowflakeToDate } from "@/lib/snowflake";
import {
  getUserAvatarUrl,
  getUserDecorationUrl,
  getUserGuildTagUrl,
  getUserNameplateUrl,
} from "@/lib/user";
import { Badge, BADGES } from "@/lib/badges";
import { intToHexColor } from "@/lib/utils";

const cache = new Map<string, { data: unknown; expires: number }>();
const CACHE_TTL = 60_000; // 60 seconds

const ALLOWED_ORIGINS = [
  process.env.NEXT_PUBLIC_APP_URL,
  "http://localhost:3000",
].filter(Boolean) as string[];

function corsHeaders(origin: string | null) {
  const allowed = origin && ALLOWED_ORIGINS.includes(origin) ? origin : ALLOWED_ORIGINS[0];
  return {
    "Access-Control-Allow-Origin": allowed,
    "Access-Control-Allow-Methods": "GET",
    "Access-Control-Allow-Headers": "Content-Type",
  };
}

export async function OPTIONS(request: Request) {
  const origin = request.headers.get("origin");
  return new NextResponse(null, { status: 204, headers: corsHeaders(origin) });
}

export async function GET(
  request: Request,
  context: { params: Promise<{ id: string }> }
) {
  const origin = request.headers.get("origin");
  const { id } = await context.params;

  if (!/^\d{17,20}$/.test(id)) {
    return NextResponse.json(
      { message: "Invalid Discord user ID format" },
      { status: 400, headers: corsHeaders(origin) }
    );
  }

  if (!process.env.BOT_TOKEN) {
    return NextResponse.json(
      { error: "Bot token is not configured" },
      { status: 503, headers: corsHeaders(origin) }
    );
  }

  // Check cache
  const cached = cache.get(id);
  if (cached && Date.now() < cached.expires) {
    return NextResponse.json(cached.data, { headers: corsHeaders(origin) });
  }

  try {
    const response = await fetch(`https://discord.com/api/v10/users/${id}`, {
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bot ${process.env.BOT_TOKEN}`,
      },
    });

    const json = await response.json();

    if (!response.ok) {
      return NextResponse.json(json, { status: response.status, headers: corsHeaders(origin) });
    }

    const userBadges: Badge[] = [];

    Object.values(BADGES).forEach((category) => {
      Object.values(category).forEach((badge) => {
        if (
          badge.bitwise !== null &&
          (json.public_flags & badge.bitwise) !== 0
        ) {
          userBadges.push(badge);
        }
      });
    });

    const isAvatarAnimated = json.avatar?.startsWith("a_") ?? false;
    const isBannerAnimated = json.banner?.startsWith("a_") ?? false;

    if (json.premium_type && json.premium_type > 0) {
      userBadges.push(BADGES.general.discordnitro);
    }

    const output = {
      id: json.id,
      discriminator: json.discriminator,
      username: json.username,
      global_name: json.global_name,
      created_at: snowflakeToDate(json.id),

      avatar: {
        id: json.avatar,
        link: getUserAvatarUrl(json.id, json.avatar, isAvatarAnimated),
        animated: isAvatarAnimated,
      },

      banner: {
        id: json.banner,
        link: json.banner
          ? `https://cdn.discordapp.com/banners/${json.id}/${json.banner}${isBannerAnimated ? ".gif" : ".webp"}?size=1024`
          : null,
        animated: isBannerAnimated,
        color: json.banner_color,
        accent_color: intToHexColor(json.accent_color),
      },

      badges: userBadges,

      bot: {
        is_bot: !!json.bot,
        verified: (json.public_flags & 65536) === 65536,
      },

      collectibles: {
        ...json.collectibles,
        nameplate: {
          ...json.collectibles?.nameplate,
          link: json.collectibles?.nameplate?.asset
            ? getUserNameplateUrl(json.collectibles.nameplate.asset)
            : null,
        },
        avatar_decoration: {
          ...json.avatar_decoration_data,
          link: json.avatar_decoration_data?.asset
            ? getUserDecorationUrl(json.avatar_decoration_data.asset)
            : null,
        },
      },

      guild: {
        ...json.clan,
        link: json.clan?.identity_guild_id
          ? getUserGuildTagUrl(json.clan.identity_guild_id, json.clan.badge)
          : null,
      },
    };

    // Cache the result
    cache.set(id, { data: output, expires: Date.now() + CACHE_TTL });

    // Evict expired entries periodically
    if (cache.size > 1000) {
      const now = Date.now();
      for (const [key, val] of cache) {
        if (now >= val.expires) cache.delete(key);
      }
    }

    return NextResponse.json(output, { headers: corsHeaders(origin) });
  } catch (err) {
    console.error(err);
    return NextResponse.json(
      { error: "Internal Server Error" },
      { status: 500, headers: corsHeaders(origin) }
    );
  }
}
