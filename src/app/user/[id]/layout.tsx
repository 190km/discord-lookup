import { Suspense } from "react";
import AnimatedContainer from "@/components/ui/animated-container";

export default function UserLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <AnimatedContainer>
      <Suspense>{children}</Suspense>
    </AnimatedContainer>
  );
}
