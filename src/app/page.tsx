import { Navbar }     from "@/components/Navbar";
import { Hero }       from "@/components/Hero";
import { BentoStats } from "@/components/BentoStats";
import { Problem }    from "@/components/Problem";
import { Features }   from "@/components/Features";
import { Integrations } from "@/components/Integrations";
import { ForWho }     from "@/components/ForWho";
import { Pricing }    from "@/components/Pricing";
import { CTA }        from "@/components/CTA";
import { Footer }     from "@/components/Footer";

export default function Home() {
  return (
    <>
      <Navbar />
      <main style={{ minWidth: 0, overflowX: "hidden" }}>
        <Hero />
        <BentoStats />
        <Problem />
        <Features />
        <Integrations />
        <ForWho />
        <Pricing />
        <CTA />
      </main>
      <Footer />
    </>
  );
}
