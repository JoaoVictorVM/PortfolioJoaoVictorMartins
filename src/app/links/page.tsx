import { Profile } from "@/components/pages/links/profile/profile";
import { CurriculumCard } from "@/components/pages/links/card/curriculumCard";
import { EmailCard } from "@/components/pages/links/card/emailCard";
import { LinkedinCard } from "@/components/pages/links/card/linkedinCard";
import { PortfolioCard } from "@/components/pages/links/card/portfolioCard";
import { WhatsappCard } from "@/components/pages/links/card/whatsappCard";
import { GithubCard } from "@/components/pages/links/card/githubCard";
import { InstagramCard } from "@/components/pages/links/card/instagramCard";
import { InstagramdevCard } from "@/components/pages/links/card/instagramdevCard";

export default function Links() {
  return (
        <main className="min-h-screen bg-[var(--cor-escuro-4)] flex justify-center">

            <section className="w-full max-w-lg px-4 py-10 flex flex-col items-center gap-4">

                <Profile />
                <PortfolioCard />
                <LinkedinCard />
                <GithubCard />
                <CurriculumCard />
                <InstagramCard />
                <div className="grid grid-cols-2 gap-4 w-full max-w-md">
                    <WhatsappCard />
                    <EmailCard />
                </div>
                <InstagramdevCard />

            </section>

        </main>
  );
}