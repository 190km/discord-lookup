"use client";

import Image from "next/image";
import Link from "next/link";

interface AvatarProps {
  url: string;
  decoration?: string | null;
}

export default function Avatar({ url, decoration }: AvatarProps) {
  if (!url) return null;

  return (
    <div>
      {" "}
      <Link href={url} target="_blank">
        {decoration && (
          <Image
            unoptimized
            draggable={false}
            src={decoration}
            alt="Avatar decoration"
            width={112}
            height={112}
            className="absolute -top-15.5 -left-[5.1px] size-[122px] z-30"
          />
        )}
        <Image
          unoptimized
          src={url}
          draggable={false}
          alt="Profile picture"
          width={112}
          height={112}
          className="absolute -top-14 rounded-full border-4 border-zinc-800 w-28 h-28 bg-zinc-900"
        />
      </Link>
    </div>
  );
}
