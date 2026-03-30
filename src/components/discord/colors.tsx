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
              <button
                type="button"
                onClick={() => copyToClipboard(primary)}
                className="cursor-pointer hover:opacity-80 flex items-center gap-x-1 border-[1px] border-[#303037] pl-1 bg-zinc-700/50 rounded-sm font-inherit text-inherit"
                aria-label={`Copy primary color ${primary}`}
              >
                {copiedColor === primary ? "Copied!" : primary}
                <span
                  style={{ backgroundColor: primary }}
                  className="size-5 rounded inline-block"
                  aria-hidden="true"
                />
              </button>
            </div>
            {accent && accent !== "0" && (
              <div className="text-sm tracking-wide text-white flex items-center gap-2">
                <span>Accent color:</span>{" "}
                <button
                  type="button"
                  onClick={() => copyToClipboard(accent)}
                  className="cursor-pointer hover:opacity-80 flex items-center gap-x-1 border-[1px] border-[#303037] pl-1 bg-zinc-700/50 rounded-sm font-inherit text-inherit"
                  aria-label={`Copy accent color ${accent}`}
                >
                  {copiedColor === accent ? "Copied!" : accent}
                  <span
                    style={{ backgroundColor: accent }}
                    className="size-5 rounded inline-block"
                    aria-hidden="true"
                  />
                </button>
              </div>
            )}
          </div>
        </>
      )}
    </>
  );
}
