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

export async function GET(
  request: Request,
  context: { params: Promise<{ id: string }> }
) {
  const { id } = await context.params;

  try {
    const response = await fetch(`https://discord.com/api/v10/users/${id}`, {
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bot ${process.env.BOT_TOKEN}`,
      },
    });

    const json = await response.json();

    if (json.message) {
      return NextResponse.json(json);
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
          ? `https://cdn.discordapp.com/banners/${json.id}/${json.banner}?size=480`
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

      raw: json,
    };

    return NextResponse.json(output);
  } catch (err) {
    console.error(err);
    return NextResponse.json(
      { error: "Internal Server Error" },
      { status: 500 }
    );
  }
}
