"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { Search, Hash, Loader2, Info } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import {
  Form,
  FormField,
  FormItem,
  FormLabel,
  FormControl,
  FormMessage,
} from "@/components/ui/form";
import { getUser } from "@/lib/fetch-user";

const formSchema = z.object({
  userId: z.string().min(1, { message: "User ID or username is required" }),
});

type FormValues = z.infer<typeof formSchema>;

export default function Lookup() {
  const router = useRouter();
  const [isLoading, setIsLoading] = useState(false);
  const [isInvalid, setIsInvalid] = useState(false);
  const [usernameHelp, setUsernameHelp] = useState(false);

  const form = useForm<FormValues>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      userId: "",
    },
  });

  const handleLookup = async (values: FormValues) => {
    const input = values.userId.trim().replace(/^@/, "");
    setIsInvalid(false);
    setUsernameHelp(false);

    const isSnowflake = /^\d{17,20}$/.test(input);

    if (!isSnowflake) {
      setUsernameHelp(true);
      return;
    }

    setIsLoading(true);

    const user = await getUser(input);

    if (user) {
      router.push(`/user/${user.id}`);
    } else {
      setIsInvalid(true);
      setIsLoading(false);
    }
  };

  return (
    <div className="px-2 pt-8 flex justify-center items-center flex-col w-full max-w-xl">
      <div className="rounded-lg h-auto bg-zinc-800 w-full">
        {/* Banner */}
        <div className="w-full aspect-[4/1] relative rounded-t-lg overflow-hidden bg-gradient-to-r from-[#5865f2] to-[#4752c4]" />

        {/* Search icon (like avatar) */}
        <div className="relative mx-3">
          <div className="absolute -top-14 rounded-xl border-4 border-zinc-800 w-28 h-28 bg-zinc-900 flex items-center justify-center">
            <Search className="w-10 h-10 text-[#5865f2]" />
          </div>
        </div>

        {/* Title section (like infos) */}
        <div className="bg-zinc-900 p-3 pb-0 mt-16 mx-3 rounded-t-lg">
          <h1 className="font-medium text-white text-xl tracking-wider">
            Discord Lookup
          </h1>
          <h6 className="text-zinc-300 font-medium tracking-wider text-sm">
            Find any Discord user by ID
          </h6>
          <div className="pb-3" />
          <hr className="h-px bg-zinc-600 border-0 w-full" />
        </div>

        {/* Form section (like bottom card) */}
        <div className="bg-zinc-900 p-3 pb-0 mx-3 mb-4 rounded-b-lg">
          <Form {...form}>
            <form
              onSubmit={form.handleSubmit(handleLookup)}
              className="space-y-4"
            >
              <FormField
                control={form.control}
                name="userId"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel className="text-[13px] font-bold tracking-wide text-white flex items-center gap-x-1">
                      <Hash className="size-3.5" />
                      <span>
                        User ID{" "}
                        <span className="text-[#ed5555]">*</span>
                      </span>
                    </FormLabel>
                    <FormControl>
                      <Input
                        type="text"
                        placeholder="Enter Discord ID or @username..."
                        className="selection:bg-[#5865f2] selection:text-gray-200 bg-[#1e1f22] border-[#40444b] text-white placeholder:text-[#6d6f78] focus:border-[#5865f2] focus:ring-0 focus:outline-none h-12 text-lg transition-all duration-200"
                        onKeyDown={(e) => {
                          if (e.key === "Enter") {
                            e.preventDefault();
                            form.handleSubmit(handleLookup)();
                          }
                        }}
                        {...field}
                      />
                    </FormControl>
                    {isInvalid ? (
                      <FormMessage className="text-[#ed5555]">
                        User ID not found or invalid
                      </FormMessage>
                    ) : usernameHelp ? (
                      <div className="flex items-start gap-2 mt-2 p-3 rounded-lg bg-[#5865f2]/10 border border-[#5865f2]/20">
                        <Info className="size-4 text-[#5865f2] mt-0.5 shrink-0" />
                        <p className="text-xs text-[#b5bac1]">
                          Username lookup is not supported by the Discord API.
                          To get a user ID: enable{" "}
                          <span className="text-white font-medium">
                            Developer Mode
                          </span>{" "}
                          in Discord Settings &gt; App Settings &gt; Advanced,
                          then right-click the user and select{" "}
                          <span className="text-white font-medium">
                            Copy User ID
                          </span>
                          .
                        </p>
                      </div>
                    ) : (
                      <FormMessage />
                    )}
                  </FormItem>
                )}
              />

              <div className="pb-4">
                <Button
                  type="submit"
                  disabled={isLoading}
                  className="w-full cursor-pointer h-10 bg-[#5865f2] hover:bg-[#4752c4] text-white font-semibold rounded-lg transition-all duration-200 transform hover:scale-[1.02] active:scale-[0.98] disabled:opacity-50 disabled:cursor-not-allowed disabled:transform-none"
                >
                  {isLoading ? (
                    <span className="flex items-center space-x-2">
                      <Loader2 className="w-4 h-4 animate-spin" />
                      <span>Searching...</span>
                    </span>
                  ) : (
                    <span className="flex items-center space-x-2">
                      <Search className="w-4 h-4" />
                      <span>Lookup</span>
                    </span>
                  )}
                </Button>
              </div>
            </form>
          </Form>

          <div className="text-center pb-3">
            <p className="text-xs text-[#6d6f78]">
              This website is not affiliated, associated, authorized, endorsed
              by, or in anyway officially connected with Discord Inc., or any of
              its subsidiaries or its affiliates.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
