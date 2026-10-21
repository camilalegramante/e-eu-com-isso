import type { Metadata } from "next";
import { SiteHeader } from "@/components/site/SiteHeader";
import { SiteFooter } from "@/components/site/SiteFooter";
import { Onboarding } from "@/components/onboarding/Onboarding";

export const metadata: Metadata = {
  title: "Monte seu relatório",
  description:
    "Escolha seu perfil e seus interesses para ver o que as candidaturas documentaram sobre os temas do seu dia a dia.",
};

export default function ComecarPage() {
  return (
    <>
      <SiteHeader />
      <main>
        <Onboarding />
      </main>
      <SiteFooter />
    </>
  );
}
