import { siteConfig } from "@/config/site";
import { Badge } from "./badges";

export type Collectible = {
  nameplate: {
    link: string;
    label: string;
  };

  avatar_decoration: {
    link: string;
  };
};

export type Banner = {
  link: string;
  color: string | null;
};

type User = {
  id: string;
  created_at: string;
  username: string;
  global_name: string;
  bot: {
    isBot: boolean;
    isVerified: boolean;
  };
  discriminator: string;
  avatar: {
    link: string;
    animted: boolean;
  };
  guild: {
    tagname: string;
    tagicon: string;
  };
  badges: Badge[];
  collectibles: Collectible;
  banner: Banner;
  accent: string | null;
};

export async function getUser(id: string): Promise<User | null> {
  try {
    const res = await fetch(`${siteConfig.url}/api/user/${id}`, {
      cache: "no-store",
    });

    if (!res.ok) return null;

    const data = await res.json();

    return {
      id: data.id,
      created_at: data.created_at,
      username: data.username,
      global_name: data.global_name,
      bot: {
        isBot: data.bot.is_bot,
        isVerified: data.bot.verified,
      },
      discriminator: data.discriminator,
      avatar: {
        link: data.avatar.link,
        animted: data.avatar.animted,
      },
      badges: data.badges,
      collectibles: data.collectibles,
      guild: {
        tagname: data.guild.tag,
        tagicon: data.guild.link,
      },
      banner: {
        link: data.banner.link,
        color: data.banner.color,
      },
      accent: data.banner.accent_color,
    };
  } catch {
    return null;
  }
}
