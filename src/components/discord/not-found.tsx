"use client";

import Link from "next/link";
import { buttonVariants } from "../ui/button";
import { cn } from "@/lib/utils";
import { Search, UserX } from "lucide-react";

type NotFoundProps = {
  id: string;
};

export default function NotFound({ id }: NotFoundProps) {
  return (
    <div className="px-2 pt-8 flex justify-center items-center flex-col w-full max-w-xl animate-in fade-in-0 duration-500">
      <div className="rounded-lg h-auto bg-zinc-800 w-full">
        {/* Banner */}
        <div className="w-full aspect-[4/1] relative rounded-t-lg overflow-hidden bg-gradient-to-r from-[#ed4245] to-[#a83235]" />

        {/* Icon */}
        <div className="relative mx-3">
          <div className="absolute -top-14 rounded-full border-4 border-zinc-800 w-28 h-28 bg-zinc-900 flex items-center justify-center">
            <UserX className="w-10 h-10 text-[#ed4245]" />
          </div>
        </div>

        {/* Info */}
        <div className="bg-zinc-900 p-3 pb-0 mt-16 mx-3 rounded-t-lg">
          <h1 className="font-medium text-white text-xl tracking-wider">
            User Not Found
          </h1>
          <h6 className="text-zinc-400 font-medium tracking-wider text-sm">
            No Discord user exists with this ID
          </h6>
          <div className="pb-3" />
          <hr className="h-px bg-zinc-600 border-0 w-full" />
        </div>

        {/* Details */}
        <div className="bg-zinc-900 p-3 pb-0 mx-3 mb-4 rounded-b-lg">
          <p className="text-[13px] font-bold tracking-wide text-white">
            Searched ID
          </p>
          <p className="text-sm tracking-wide text-zinc-400 mt-1">{id}</p>

          <p className="text-[13px] font-bold tracking-wide text-white mt-4">
            What to check
          </p>
          <ul className="text-sm text-zinc-400 mt-1 space-y-1 list-disc list-inside">
            <li>Make sure the ID is correct (17-20 digits)</li>
            <li>The account may have been deleted</li>
            <li>The ID might not belong to a user</li>
          </ul>

          <div className="pb-4">
            <Link
              href="/"
              className={cn(
                buttonVariants({}),
                "flex items-center mt-4 gap-x-2 w-full h-10 bg-[#5865f2] hover:bg-[#4752c4] cursor-pointer text-white font-semibold rounded-lg"
              )}
            >
              <Search className="w-4 h-4" />
              <span>Try Another Search</span>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
