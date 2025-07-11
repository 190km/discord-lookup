"use client";

import React from "react";
import Tag from "./tag";
import { Tooltip, TooltipContent, TooltipTrigger } from "../ui/tooltip";
import Image from "next/image";
import { BADGES } from "@/lib/badges";
import { cn } from "@/lib/utils";

type InfosProps = {
  globalName: string;
  username: string;
  userId: string;
  isBot: boolean;
  isVerified: boolean;
  discriminator: string;
  tagName?: string;
  tagIcon?: string;
};

export default function Infos({
  globalName,
  username,
  userId,
  tagName,
  tagIcon,
  isBot,
  isVerified,
  discriminator,
}: InfosProps) {
  return (
    <div className="bg-zinc-900 p-3 pb-0 mt-16 mx-3 rounded-t-lg max-h-[400px] z-50">
      <div className="flex items-center gap-x-1">
        <h1 className="font-medium text-white text-xl tracking-wider">
          {globalName ?? username}
        </h1>
        {isBot ? (
          <div className="flex items-center">
            <Tooltip>
              <TooltipTrigger>
                <Image
                  src={
                    isVerified
                      ? BADGES.flairs.verified_bot_app.icon
                      : BADGES.flairs.bot_app.icon
                  }
                  draggable={false}
                  alt={BADGES.flairs.bot_app.name || "badge"}
                  width={32}
                  height={32}
                  className={cn(isVerified ? "w-11" : "w-8", " h-auto cursor-pointer")}
                />
              </TooltipTrigger>
              <TooltipContent>
                <p>{BADGES.flairs.bot_app.name}</p>
              </TooltipContent>
            </Tooltip>
            
          </div>
        ) : (
          tagName && tagIcon && <Tag name={tagName} icon={tagIcon} />
        )}
      </div>
      <h6 className="text-zinc-300 font-medium tracking-wider text-sm">
        @{username}
        {discriminator !== "0" && `#${discriminator}`}
      </h6>
      <div className="pb-3 flex">
        <p className="text-xs text-white">{userId}</p>
      </div>
      <hr className="h-px bg-zinc-600 border-0 w-full" />
    </div>
  );
}
