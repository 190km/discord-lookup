"use client";

import Image from "next/image";
import Link from "next/link";

export type BannerProps = {
  color?: string | null;
  url?: string | null;
};

export default function Banner({ color, url }: BannerProps) {
  const hasImage = !!url;

  return (
    <div
      className="w-full aspect-[4/1] relative rounded-t-lg overflow-hidden select-none"
      style={{
        backgroundColor: !hasImage ? color || "#2a2a2a" : undefined,
      }}
    >
      {hasImage && (
        <Link target="_blank" href={url!} className="relative block w-full h-full">
          <Image
            unoptimized
            draggable={false}
            src={url!}
            alt="banner background"
            fill
            loading="eager"
            className="object-cover"
            sizes="(max-width: 800px) 100vw, 800px"
          />
        </Link>
      )}
    </div>
  );
}
