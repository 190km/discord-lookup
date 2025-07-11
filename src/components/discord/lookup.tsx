"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { Search, Hash, Loader2 } from "lucide-react";
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
import { Card, CardContent } from "@/components/ui/card";
import { getUser } from "@/lib/fetch-user";

const formSchema = z.object({
  userId: z
    .string()
    .min(1, { message: "User ID is required" })
    .regex(/^\d{17,19}$/, { message: "Invalid Discord user ID format" }),
});

type FormValues = z.infer<typeof formSchema>;

export default function Lookup() {
  const router = useRouter();
  const [isLoading, setIsLoading] = useState(false);
  const [isInvalid, setIsInvalid] = useState(false);

  const form = useForm<FormValues>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      userId: "",
    },
  });

  const handleLookup = async (values: FormValues) => {
    setIsLoading(true);
    setIsInvalid(false);

    const user = await getUser(values.userId);
    const isUserFound = !!user;

    if (isUserFound) {
      router.push(`/user/${user.id}`);
    } else {
      setIsInvalid(true);
    }

    setIsLoading(false);
  };

  return (
    <div className="min-h-screen max-w-screen bg-gradient-to-br from-[#1e1f22] via-[#2b2d31] to-[#1e1f22] flex items-center justify-center p-4 relative">
      <div className="w-full max-w-4xl space-y-6 relative z-10">
        <Card className="w-full max-w-md mx-auto bg-[#2b2d31]/80 backdrop-blur-xl border-[#40444b] shadow-2xl relative overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-br from-[#5865f2]/5 to-transparent pointer-events-none" />

          <CardContent className="sm:p-8 p-4 space-y-6 relative">
            <div className="space-y-3">
              <div className="flex items-center justify-center space-x-3">
                <div className="p-4 bg-gradient-to-br from-[#5865f2] to-[#4752c4] rounded-2xl shadow-lg">
                  <Search className="w-8 h-8 text-white" />
                </div>
              </div>
              <div className="space-y-1">
                <h1 className="text-3xl font-bold bg-gradient-to-r from-white via-[#b5bac1] to-white bg-clip-text text-transparent text-center">
                  Discord Lookup
                </h1>
              </div>
            </div>

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
                      <FormLabel className="text-sm font-medium text-[#b5bac1] flex items-center">
                        <Hash className="size-4" />
                        <span>
                          User ID <span className="text-[#ed5555]">*</span>
                        </span>
                      </FormLabel>
                      <FormControl>
                        <Input
                          type="number"
                          inputMode="numeric"
                          pattern="[0-9]*"
                          placeholder="Enter Discord ID..."
                          className="selection:bg-[#5865f2] selection:text-gray-200 bg-[#1e1f22] [&::-webkit-inner-spin-button]:appearance-none [&::-webkit-outer-spin-button]:appearance-none [appearance:textfield] border-[#40444b] text-white placeholder:text-[#6d6f78] focus:border-[#5865f2] focus:ring-0 focus:outline-none h-12 text-lg transition-all duration-200"
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
                      ) : (
                        <FormMessage />
                      )}
                    </FormItem>
                  )}
                />

                <Button
                  type="submit"
                  disabled={isLoading}
                  className="w-full cursor-pointer h-12 pointer-cursor bg-[#5865f2] hover:bg-[#4752c4] text-white font-semibold rounded-lg transition-all duration-200 transform hover:scale-[1.02] active:scale-[0.98] disabled:opacity-50 disabled:cursor-not-allowed disabled:transform-none"
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
              </form>
            </Form>

            <div className="text-center">
              <p className="text-xs text-[#6d6f78]">
                This website is not affiliated, associated, authorized, endorsed
                by, or in anyway officially connected with Discord Inc., or any
                of its subsidiaries or its affiliates.
              </p>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
