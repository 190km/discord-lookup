"use client";

import Image from "next/image";
import React from "react";
import { Badge } from "@/lib/badges";
import {
  Tooltip,
  TooltipContent,
  TooltipTrigger,
} from "@/components/ui/tooltip";

type Props = {
  badges?: Badge[];
};

export default function Badges({ badges }: Props) {
  if (!badges || badges.length === 0) return null;

  return (
    <div className="h-10 bg-zinc-900 flex items-center rounded-xl absolute right-1 mt-2 px-2 gap-x-1 select-none ">
      {badges.map((badge, i) => (
        <Tooltip key={i}>
          <TooltipTrigger>
            <Image
              src={badge.icon}
              draggable={false}
              alt={badge.name || "badge"}
              width={32}
              height={32}
              className="size-6 h-auto cursor-pointer"
            />
          </TooltipTrigger>
          <TooltipContent>
            <p>{badge.name}</p>
          </TooltipContent>
        </Tooltip>
      ))}
    </div>
  );
}
