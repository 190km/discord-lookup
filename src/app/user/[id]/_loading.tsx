// removed cuz its laggy

import { Skeleton } from "@/components/ui/skeleton";
import { Button, buttonVariants } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { RotateCcw } from "lucide-react";

export default function Loading() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-[#1e1f22] via-[#2b2d31] to-[#1e1f22] flex items-center justify-center p-1 relative">
      <div className="m-2 pt-8 flex justify-center items-center flex-col w-full max-w-xl">
        <div className="rounded-lg h-auto bg-zinc-800 w-full">
          <Skeleton className="w-full aspect-[4/1] relative rounded-t-lg rounded-b-none overflow-hidden select-none" />

          <div className="relative mx-3">
            <div className="absolute inline-block size-[122px] select-none ">
              <div className="absolute -top-14 rounded-full border-4 border-zinc-800 w-28 h-28 bg-zinc-900" />
            </div>
          </div>

          <div className="bg-zinc-900 p-3 pb-0 mt-16 mx-3 rounded-t-lg max-h-[400px] z-50">
            <div className="flex items-center gap-x-1">
              <Skeleton className="h-[21px] w-12" />
            </div>
            <Skeleton className="h-[15px] w-24 mt-1" />
            <div className="pb-3 flex">
              <Skeleton className="h-4 w-32 mt-1" />
            </div>
            <hr className="h-px bg-zinc-600 border-0 w-full" />
          </div>

          <div className="bg-zinc-900 p-3 pb-0 mx-3 mb-4 rounded-b-lg">
            <p className="text-[13px] font-bold tracking-wide text-white">
              Creation date
            </p>
            <div className="mt-1">
              <Skeleton className="h-5 w-64" />
            </div>

            <p className="text-[13px] font-bold tracking-wide text-white mt-4">
              Background colors
            </p>
            <div className="mt-1 flex flex-wrap items-center justify-between space-y-0.5">
              <div className="text-sm tracking-wide text-white flex items-center gap-2">
                <span>Primary color:</span>
                <Skeleton className="h-6 w-20 rounded-sm" />
              </div>
            </div>

            <div className="pb-4">
              <Button
                disabled
                className={cn(
                  buttonVariants({}),
                  "justify-center gap-2 whitespace-nowrap text-sm transition-all disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg:not([class*='size-'])]:size-4 shrink-0 [&_svg]:shrink-0 outline-none focus-visible:border-ring focus-visible:ring-ring/50 focus-visible:ring-[3px] aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive shadow-xs px-4 py-2 has-[>svg]:px-3 flex items-center mt-2 gap-x-2 w-full h-10 bg-[#5865f2] hover:bg-[#4752c4] cursor-pointer text-white font-semibold rounded-lg"
                )}
              >
                <RotateCcw />
                <span>New Search</span>
              </Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
