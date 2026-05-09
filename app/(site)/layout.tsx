import type { PropsWithChildren } from "react";

import { Footer } from "@/components/main/footer";
import { Navbar } from "@/components/main/navbar";
import { StarsCanvas } from "@/components/main/star-background";

export default function SiteLayout({ children }: PropsWithChildren) {
  return (
    <div className="bg-[#030014]">
      <StarsCanvas />
      <Navbar />
      {children}
      <Footer />
    </div>
  );
}
