"use client";

import Image from "next/image";
import React from "react";

type TagProps = {
  name: string;
  icon: string;
};

export default function Tag({ name, icon }: TagProps) {
  return (
    <div className="flex h-minitems-center rounded-sm cursor-pointer transition-colors group">
      <span className="flex group-hover:bg-zinc-700/50 p-0.5 border-[1px] px-1 border-[#303037] rounded-md items-center gap-x-1 text-xs font-semibold text-white">
        <Image
          alt={`${name} guild tag`}
          className="size-3"
          width={12}
          height={12}
          src={icon}
        />
        {name}
      </span>
    </div>
  );
}
