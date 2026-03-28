import { cache } from "react";
import UserCard from "@/components/discord/user-card";
import NotFound from "@/components/discord/not-found";
import { getUser as fetchUser } from "@/lib/fetch-user";
import { Metadata } from "next";

const getUser = cache(fetchUser);

type Props = {
  params: Promise<{ id: string }>;
};

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { id } = await params;
  const user = await getUser(id);

  if (!user) {
    return {
      title: "User Not Found | Discord User Lookup",
      description: "The Discord user you're looking for could not be found.",
      openGraph: {
        title: "User Not Found | Discord User Lookup",
        description: "The Discord user you're looking for could not be found.",
        images: [
          {
            url: "https://cdn.discordapp.com/embed/avatars/0.png",
            width: 512,
            height: 512,
            alt: "Discord Default Avatar",
          },
        ],
      },
      twitter: {
        card: "summary",
        title: "User Not Found | Discord User Lookup",
        description: "The Discord user you're looking for could not be found.",
        images: ["https://cdn.discordapp.com/embed/avatars/0.png"],
      },
    };
  }

  const discriminator =
    user.discriminator !== "0" ? `#${user.discriminator}` : null;

  const hashtag = discriminator ? discriminator : "";
  const displayName = user.global_name || user.username;
  const description = `View @${
    user.username + hashtag
  } Discord profile information, including badges, creation date, and more.`;

  return {
    title: `${displayName} (@${user.username + hashtag}) | Discord User Lookup`,
    description,
    openGraph: {
      title: `${displayName} (@${user.username + hashtag})`,
      description,
      images: [
        {
          url: user.avatar.link,
          width: 512,
          height: 512,
          alt: `${displayName}'s Discord Avatar`,
        },
      ],
      type: "profile",
    },
    twitter: {
      card: "summary",
      title: `${displayName} (@${user.username + hashtag})`,
      description,
      images: [user.avatar.link],
    },
  };
}

export default async function Page({ params }: Props) {
  const { id } = await params;
  const user = await getUser(id);

  const isUserFound = !!user;

  return (
    <>
      {isUserFound ? (
        <UserCard
          userId={user.id}
          creationDate={user.created_at}
          username={user.username}
          globalName={user.global_name}
          avatarUrl={user.avatar.link}
          avatarDecoration={user.collectibles.avatar_decoration?.link}
          badges={user.badges}
          isBot={user.bot.isBot}
          isVerified={user.bot.isVerified}
          discriminator={user.discriminator}
          tagIcon={user.guild.tagicon}
          tagName={user.guild.tagname}
          banner={{
            url: user.banner.link,
            color: user.banner.color ?? undefined,
          }}
          colors={{
            primary: user.banner.color ?? undefined,
            accent: user.accent ?? undefined,
          }}
          nameplateUrl={user.collectibles.nameplate.link}
          nameplateName={user.collectibles.nameplate.label}
        />
      ) : (
        <NotFound id={id} />
      )}
    </>
  );
}
