import { siteConfig } from "@/config/site";

export type Badge = {
  name: string;
  icon: string;
  description: string;
  bitwise: number | null;
};

type BadgeCategory = {
  [badgeId: string]: Badge;
};

type Badges = {
  boosts: BadgeCategory;
  bot: BadgeCategory;
  flairs: BadgeCategory;
  general: BadgeCategory;
  nitro: BadgeCategory;
};

export const BADGES: Badges = {
  boosts: {
    booster_1: {
      name: "Server boosting (1 Month)",
      icon: `${siteConfig.url}/assets/images/icons/discord/badges/boost/discordboost1.svg`,
      description: "Boosting a discord server.",
      bitwise: null,
    },
    booster_2: {
      name: "Server boosting (2 Months)",
      icon: `${siteConfig.url}/assets/images/icons/discord/badges/boost/discordboost2.svg`,
      description: "Boosting a discord server for 2 months straight.",
      bitwise: null,
    },
    booster_3: {
      name: "Server boosting (3 Months)",
      icon: `${siteConfig.url}/assets/images/icons/discord/badges/boost/discordboost3.svg`,
      description: "Boosting a discord server for 3 months straight.",
      bitwise: null,
    },
    booster_4: {
      name: "Server boosting (6 Months)",
      icon: `${siteConfig.url}/assets/images/icons/discord/badges/boost/discordboost4.svg`,
      description: "Boosting a discord server for 6 months straight.",
      bitwise: null,
    },
    booster_5: {
      name: "Server boosting (9 Months)",
      icon: `${siteConfig.url}/assets/images/icons/discord/badges/boost/discordboost5.svg`,
      description: "Boosting a discord server for 9 months straight.",
      bitwise: null,
    },
    booster_6: {
      name: "Server boosting (1 Year)",
      icon: `${siteConfig.url}/assets/images/icons/discord/badges/boost/discordboost6.svg`,
      description: "Boosting a discord server for 1 year straight.",
      bitwise: null,
    },
    booster_7: {
      name: "Server boosting (1 Year & 3 Months)",
      icon: `${siteConfig.url}/assets/images/icons/discord/badges/boost/discordboost7.svg`,
      description:
        "Boosting a discord server for 1 year and 3 months straight.",
      bitwise: null,
    },
    booster_8: {
      name: "Server boosting (1 Year & 6 Months)",
      icon: `${siteConfig.url}/assets/images/icons/discord/badges/boost/discordboost8.svg`,
      description:
        "Boosting a discord server for 1 year and 6 months straight.",
      bitwise: null,
    },
    booster_9: {
      name: "Server boosting (2 Years)",
      icon: `${siteConfig.url}/assets/images/icons/discord/badges/boost/discordboost9.svg`,
      description: "Boosting a discord server for 2 years straight.",
      bitwise: null,
    },
  },
  bot: {
    supports_commands: {
      name: "Supports Commands",
      icon: `${siteConfig.url}/assets/images/icons/discord/badges/bot/supportscommands.svg`,
      description: "Bot must use application commands to earn this badge.",
      bitwise: 524288, 
    },
    uses_automod: {
      name: "Uses Automod",
      icon: `${siteConfig.url}/assets/images/icons/discord/badges/bot/automod.svg`,
      description: "100 active automod rules created.",
      bitwise: 1 << 24, 
    },
    premium_app: {
      name: "This server has App Name premium",
      icon: `${siteConfig.url}/assets/images/icons/discord/badges/bot/premiumbot.png`,
      description:
        "Given to premium APPS on the server that bought premium using Discord's in-app purchase option.",
      bitwise: null,
    },
  },
  flairs: {
    official: {
      name: "Official",
      icon: `${siteConfig.url}/assets/images/icons/discord/badges/flairs/Official.svg`,
      description:
        "Reserved for discord official system or automod messages. (New)",
      bitwise: null,
    },
    system: {
      name: "System",
      icon: `${siteConfig.url}/assets/images/icons/discord/badges/flairs/System.svg`,
      description: "Reserved for discord system or automod messages. (Old)",
      bitwise: null,
    },
    server: {
      name: "Server",
      icon: `${siteConfig.url}/assets/images/icons/discord/badges/flairs/Server.svg`,
      description: 'Reserved by a "webhook" by following a channel.',
      bitwise: null,
    },
    verified_bot_app: {
      name: "Verified Bot/App",
      icon: `${siteConfig.url}/assets/images/icons/discord/badges/flairs/VerifiedBot.svg`,
      description: "Obtained by a verified app.",
      bitwise: null,
    },
    bot_app: {
      name: "Bot/App",
      icon: `${siteConfig.url}/assets/images/icons/discord/badges/flairs/Bot.svg`,
      description: "Obtained by an unverified app.",
      bitwise: null,
    },
    beta: {
      name: "Beta",
      icon: `${siteConfig.url}/assets/images/icons/discord/badges/flairs/Beta.svg`,
      description: "Reserved for in beta features (Also off center).",
      bitwise: null,
    },
    ai: {
      name: "Ai",
      icon: `${siteConfig.url}/assets/images/icons/discord/badges/flairs/LightAi.svg`,
      description: "Only for the Clyde Ai bot.",
      bitwise: null,
    },
    original_poster: {
      name: "Original Poster",
      icon: `${siteConfig.url}/assets/images/icons/discord/badges/flairs/OriginalPoster.svg`,
      description: "Given to the original poster of a forum post.",
      bitwise: null,
    },
    app: {
      name: "App",
      icon: `${siteConfig.url}/assets/images/icons/discord/badges/flairs/App.svg`,
      description: "Generic app flair, usage varies.",
      bitwise: null,
    },
    light_ai: {
      name: "Light Ai",
      icon: `${siteConfig.url}/assets/images/icons/discord/badges/flairs/LightAi.svg`,
      description: "Alternate AI flair icon.",
      bitwise: null,
    },
    verified_app: {
      name: "Verified App",
      icon: `${siteConfig.url}/assets/images/icons/discord/badges/flairs/VerifiedApp.svg`,
      description: "Verified application badge.",
      bitwise: null,
    },
  },
  general: {
    active_developer: {
      name: "Active Developer",
      icon: `${siteConfig.url}/assets/images/icons/discord/badges/general/activedeveloper.svg`,
      description:
        "Own at least 1 active application executed in the last 30 days.",
      bitwise: 4194304, 
    },
    discordbotdev: {
      name: "Early Verified Bot Developer",
      icon: `${siteConfig.url}/assets/images/icons/discord/badges/general/discordbotdev.svg`,
      description: "Owned a verified Discord bot before August 19, 2020.",
      bitwise: 131072, 
    },
    discordbughunter1: {
      name: "Discord Bug Hunter (Tier 1)",
      icon: `${siteConfig.url}/assets/images/icons/discord/badges/general/discordbughunter1.svg`,
      description: "Bug Hunter Level 1",
      bitwise: 8, 
    },
    discordbughunter2: {
      name: "Discord Bug Hunter (Tier 2)",
      icon: `${siteConfig.url}/assets/images/icons/discord/badges/general/discordbughunter2.svg`,
      description: "Bug Hunter Level 2",
      bitwise: 16384, 
    },
    discordearysupporter: {
      name: "Early Supporter",
      icon: `${siteConfig.url}/assets/images/icons/discord/badges/general/discordearlysupporter.svg`,
      description: "Had a successful transaction before October 10, 2018.",
      bitwise: 512, 
    },
    discordlootbox: {
      name: "A clown, for a limited time",
      icon: `${siteConfig.url}/assets/images/icons/discord/badges/general/discordlootbox.svg`,
      description:
        "Unlock all Lootbox rewards during Discord April Fools event.",
      bitwise: null, 
    },
    discordmod: {
      name: "Moderator Programs Alumni",
      icon: `${siteConfig.url}/assets/images/icons/discord/badges/general/discordmod.svg`,
      description: "No longer obtainable after Dec 1, 2022.",
      bitwise: 262144, 
    },
    discordnitro: {
      name: "Discord Nitro (Multiple Tiers)",
      icon: `${siteConfig.url}/assets/images/icons/discord/badges/general/discordnitro.svg`,
      description:
        "Having a valid Discord Nitro, Nitro Basic, or Nitro Classic subscription.",
      bitwise: null,
    },
    discordpartner: {
      name: "Partnered Server Owner",
      icon: `${siteConfig.url}/assets/images/icons/discord/badges/general/discordpartner.svg`,
      description: "Owned a partnered server before Oct 5, 2023.",
      bitwise: 2, 
    },
    discordstaff: {
      name: "Discord Staff",
      icon: `${siteConfig.url}/assets/images/icons/discord/badges/general/discordstaff.svg`,
      description: "Being a Discord employee.",
      bitwise: 1, 
    },
    hypesquadbalance: {
      name: "HypeSquad Balance",
      icon: `${siteConfig.url}/assets/images/icons/discord/badges/general/hypesquadbalance.svg`,
      description: "HypeSquad Balance house member.",
      bitwise: 256, 
    },
    hypesquadbravery: {
      name: "HypeSquad Bravery",
      icon: `${siteConfig.url}/assets/images/icons/discord/badges/general/hypesquadbravery.svg`,
      description: "HypeSquad Bravery house member.",
      bitwise: 64, 
    },
    hypesquadbrilliance: {
      name: "HypeSquad Brilliance",
      icon: `${siteConfig.url}/assets/images/icons/discord/badges/general/hypesquadbrilliance.svg`,
      description: "HypeSquad Brilliance house member.",
      bitwise: 128, 
    },
    hypesquadevents: {
      name: "HypeSquad Events",
      icon: `${siteConfig.url}/assets/images/icons/discord/badges/general/hypesquadevents.svg`,
      description: "HypeSquad event attendance (closed, no longer obtainable).",
      bitwise: 4, 
    },
    orb: {
      name: "Orbs",
      icon: `${siteConfig.url}/assets/images/icons/discord/badges/general/orb.svg`,
      description: "Complete quests and purchase from Orbs Exclusives shop.",
      bitwise: null,
    },
    quest: {
      name: "Completed a Quest",
      icon: `${siteConfig.url}/assets/images/icons/discord/badges/general/quest.svg`,
      description: "Completed a quest from gift inventory tab.",
      bitwise: null,
    },
    username: {
      name: "Originally Known As",
      icon: `${siteConfig.url}/assets/images/icons/discord/badges/general/username.png`,
      description: "Unique username tag during the username system update.",
      bitwise: null,
    },
  },
  nitro: {
    bronze: {
      name: "Bronze",
      icon: `${siteConfig.url}/assets/images/icons/discord/badges/nitro/bronze.png`,
      description: "Subscribing to Nitro for 1 month.",
      bitwise: null,
    },
    silver: {
      name: "Silver",
      icon: `${siteConfig.url}/assets/images/icons/discord/badges/nitro/silver.png`,
      description: "Subscribing to Nitro for 3 months.",
      bitwise: null,
    },
    gold: {
      name: "Gold",
      icon: `${siteConfig.url}/assets/images/icons/discord/badges/nitro/gold.png`,
      description: "Subscribing to Nitro for 6 months.",
      bitwise: null,
    },
    platinum: {
      name: "Platinum",
      icon: `${siteConfig.url}/assets/images/icons/discord/badges/nitro/platinum.png`,
      description: "Subscribing to Nitro for 12 months (1 year).",
      bitwise: null,
    },
    diamond: {
      name: "Diamond",
      icon: `${siteConfig.url}/assets/images/icons/discord/badges/nitro/diamond.png`,
      description: "Subscribing to Nitro for 24 months (2 years).",
      bitwise: null,
    },
    emerald: {
      name: "Emerald",
      icon: `${siteConfig.url}/assets/images/icons/discord/badges/nitro/emerald.png`,
      description: "Subscribing to Nitro for 36 months (3 years).",
      bitwise: null,
    },
    ruby: {
      name: "Ruby",
      icon: `${siteConfig.url}/assets/images/icons/discord/badges/nitro/ruby.png`,
      description: "Subscribing to Nitro for 60 months (5 years).",
      bitwise: null,
    },
    opal: {
      name: "Opal",
      icon: `${siteConfig.url}/assets/images/icons/discord/badges/nitro/opal.png`,
      description: "Subscribing to Nitro for 72+ months (6+ years).",
      bitwise: null,
    },
  },
};
