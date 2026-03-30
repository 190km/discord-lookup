export type SiteConfig = {
  logo: string;
  name: string;
  title: string;
  titleTemplate: string;
  description: string;
  url: string;
  ogImage: string;
  links: {
    github: string;
  };
};

const siteUrl =
  process.env.NEXT_PUBLIC_APP_URL || "http://localhost:3000";

export const siteConfig: SiteConfig = {
  logo: `${siteUrl}/logo.svg`,
  name: "Discord Lookup",
  title: "Discord Lookup - Find Discord Users by ID",
  titleTemplate: "%s | Discord Lookup - User Finder",
  url: siteUrl,
  ogImage: `${siteUrl}/og-image.png`,
  description:
    "Get anyone's Discord profile by their ID. Simply enter a Discord user ID to view their profile information.",
  links: {
    github: "https://github.com/190km/discord-lookup",
  },
};
