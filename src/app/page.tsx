import { Navbar }      from "@/components/Navbar";
import { Hero }        from "@/components/Hero";
import { Problem }     from "@/components/Problem";
import { Features }    from "@/components/Features";
import { Integrations } from "@/components/Integrations";
import { ForWho }      from "@/components/ForWho";
import { Pricing }     from "@/components/Pricing";
import { CTA }         from "@/components/CTA";
import { Footer }      from "@/components/Footer";
import { JsonLd }      from "@/components/JsonLd";

export default function Home() {
  return (
    <>
      <JsonLd />
      <Navbar />
      <main>
        <Hero />
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
