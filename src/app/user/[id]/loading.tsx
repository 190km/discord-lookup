import { Skeleton } from "@/components/ui/skeleton";

export default function Loading() {
  return (
    <div role="status" aria-label="Loading user profile" className="px-2 pt-8 flex justify-center items-center flex-col w-full max-w-xl animate-in fade-in-0 duration-300">
      <div className="rounded-lg h-auto bg-zinc-800 w-full">
        {/* Banner skeleton */}
        <Skeleton className="w-full aspect-[4/1] rounded-t-lg rounded-b-none bg-zinc-700" />

        {/* Avatar skeleton */}
        <div className="relative mx-3">
          <div className="absolute -top-14 rounded-full border-4 border-zinc-800 w-28 h-28 bg-zinc-700 animate-pulse" />
        </div>

        {/* Info skeleton */}
        <div className="bg-zinc-900 p-3 pb-0 mt-16 mx-3 rounded-t-lg">
          <Skeleton className="h-6 w-36 bg-zinc-700" />
          <Skeleton className="h-4 w-24 mt-1.5 bg-zinc-700" />
          <Skeleton className="h-3 w-44 mt-1.5 bg-zinc-700" />
          <div className="pb-3" />
          <hr className="h-px bg-zinc-600 border-0 w-full" />
        </div>

        {/* Bottom section skeleton */}
        <div className="bg-zinc-900 p-3 pb-0 mx-3 mb-4 rounded-b-lg">
          <p className="text-[13px] font-bold tracking-wide text-white">
            Creation date
          </p>
          <Skeleton className="h-5 w-72 mt-1 bg-zinc-700" />

          <p className="text-[13px] font-bold tracking-wide text-white mt-4">
            Background colors
          </p>
          <div className="mt-1 flex items-center gap-2">
            <span className="text-sm text-white">Primary color:</span>
            <Skeleton className="h-6 w-20 rounded-sm bg-zinc-700" />
          </div>

          <div className="pb-4 mt-2">
            <Skeleton className="w-full h-10 rounded-lg bg-zinc-700" />
          </div>
        </div>
      </div>
    </div>
  );
}
