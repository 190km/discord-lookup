"use client";

import Badges from "./badges";
import Link from "next/link";
import { buttonVariants } from "../ui/button";
import { cn } from "@/lib/utils";
import { RotateCcw } from "lucide-react";
import Banner from "./banner";
import Avatar from "./avatar";
import Nameplate from "./nameplate";
import Colors from "./colors";
import Infos from "./infos";
import { Badge } from "@/lib/badges";
import { formatDateElapsed } from "@/lib/utils";

type UserCardProps = {
  banner: {
    url?: string;
    color?: string;
  };

  avatarUrl: string;
  avatarDecoration?: string;

  badges: Badge[];

  globalName: string;
  username: string;
  userId: string;

  tagName?: string;
  tagIcon?: string;

  isBot: boolean;
  isVerified: boolean;

  discriminator: string;

  creationDate?: string;

  colors?: {
    primary?: string;
    accent?: string;
  };

  nameplateUrl?: string;
  nameplateName?: string;
};

export default function UserCard({
  banner,
  avatarUrl,
  avatarDecoration,
  badges,
  globalName,
  username,
  userId,
  discriminator,
  isBot,
  isVerified,
  tagName,
  tagIcon,
  creationDate,
  colors = {},
  nameplateUrl,
  nameplateName,
}: UserCardProps) {
  return (
    <div className="m-2 pt-8 flex justify-center items-center flex-col w-full max-w-xl">
      <div className="rounded-lg h-auto bg-zinc-800 w-full">
        <Banner url={banner.url} color={banner.color} />
        <div className="relative mx-3">
          <Avatar url={avatarUrl} decoration={avatarDecoration} />
          <Badges badges={badges} />
        </div>

        <Infos
          globalName={globalName}
          username={username}
          userId={userId}
          tagIcon={tagIcon}
          tagName={tagName}
          isBot={isBot}
          isVerified={isVerified}
          discriminator={discriminator}
        />

        <div className="bg-zinc-900 p-3 pb-0 mx-3 mb-4 rounded-b-lg">
          {creationDate && (
            <>
              <p className="text-[13px] font-bold tracking-wide text-white">
                Creation date
              </p>
              <div className="mt-1">
                <p className="text-sm tracking-wide text-white">
                  {formatDateElapsed(creationDate)}
                </p>
              </div>
            </>
          )}
          <Colors primary={colors.primary} accent={colors.accent} />
          <Nameplate url={nameplateUrl} name={nameplateName} />

          <div className="pb-4">
            <Link
              href="/"
              className={cn(
                buttonVariants({}),
                "flex items-center mt-2 gap-x-2 w-full h-10 bg-[#5865f2] hover:bg-[#4752c4] cursor-pointer text-white font-semibold rounded-lg"
              )}
            >
              <RotateCcw />
              <span>New Search</span>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
