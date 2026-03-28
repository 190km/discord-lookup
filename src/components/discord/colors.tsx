"use client";

import React, { useState } from "react";

type Props = {
  primary?: string;
  accent?: string;
};

export default function Colors({ primary, accent }: Props) {
  const [copiedColor, setCopiedColor] = useState<string | null>(null);

  const copyToClipboard = (color: string) => {
    navigator.clipboard.writeText(color);
    setCopiedColor(color);
    setTimeout(() => setCopiedColor(null), 2000);
  };

  return (
    <>
      {primary && (
        <>
          <p className="text-[13px] font-bold tracking-wide text-white mt-4">
            Background colors
          </p>
          <div className="mt-1 flex flex-wrap items-center justify-between space-y-0.5">
            <div className="text-sm tracking-wide text-white flex items-center gap-2">
              <span>Primary color:</span>{" "}
              <span
                onClick={() => copyToClipboard(primary)}
                className="cursor-pointer hover:opacity-80 flex items-center gap-x-1 border-[1px] border-[#303037] pl-1 bg-zinc-700/50 rounded-sm "
              >
                {copiedColor === primary ? "Copied!" : primary}
                <div
                  style={{ backgroundColor: primary }}
                  className="size-5 rounded"
                />
              </span>
            </div>
            {accent && accent !== "0" && (
              <div className="text-sm tracking-wide text-white flex items-center gap-2">
                <span>Accent color:</span>{" "}
                <span
                  onClick={() => copyToClipboard(accent)}
                  className="cursor-pointer hover:opacity-80 flex items-center gap-x-1 border-[1px] border-[#303037] pl-1 bg-zinc-700/50 rounded-sm "
                >
                  {copiedColor === accent ? "Copied!" : accent}
                  <div
                    style={{ backgroundColor: accent }}
                    className="size-5 rounded"
                  />
                </span>
              </div>
            )}
          </div>
        </>
      )}
    </>
  );
}
