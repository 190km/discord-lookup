/* eslint-disable @typescript-eslint/no-unused-vars */
"use client";

import Link from "next/link";
import React from "react";

type NameplateProps = {
  url?: string | null;
  name?: string;
};

export default function Nameplate({ url, name }: NameplateProps) {
  const hasVideo = !!url;

  return (
    <>
      {hasVideo && (
        <>
          <p className="text-[13px] font-bold tracking-wide text-white mt-4">
            Nameplate
          </p>
          {/* <p className="tracking-wide text-[13px] text-white">Label: {name}</p> */}

          <Link href={url!} target="_blank">
            <div className="mt-0.5 flex flex-col pb-3">
              <video
                src={url!}
                autoPlay
                loop
                muted
                playsInline
                className="w-full mt-2 rounded-lg border-[1px] border-[#303037]"
              />
            </div>
          </Link>
        </>
      )}
    </>
  );
}
