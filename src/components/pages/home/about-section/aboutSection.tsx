import { JourneyCard } from "./aboutJourney";
import { AboutProfile } from "./aboutProfile";
import type { ProfileData, JourneyData } from "@/types/about";

const profileData: ProfileData = {
  name: "João Victor Ventura Martins",
  title: "FullStack Developer Specializing in Frontend",
  imageUrl: "/images/profile/profile.jpg",
  linksUrl: "https://linksjoaovictormartins.vercel.app/",
  aboutUrl: "https://sobrejoaovictormartins.vercel.app/",
};

export function AboutSection() {
  return (
    <section id="sobre-mim" className="py-16 md:py-24 px-4">
      <div className="max-w-7xl mx-auto">
        <div className="mb-12 flex flex-col items-center">
          <h2 className="text-3xl font-bold text-white sm:text-4xl lg:text-5xl">
            Um pouco{" "}
            <span className="bg-gradient-to-br from-[var(--cor-primaria-1)] via-[var(--cor-primaria-1)] to-[var(--cor-primaria-4)] bg-clip-text text-transparent">
              sobre mim
            </span>
          </h2>
        </div>

        <div className="grid gap-6 lg:grid-cols-5 items-stretch">
          <div className="lg:col-span-3 h-full">
            <JourneyCard />
          </div>

          <div className="lg:col-span-2 h-full">
            <AboutProfile profile={profileData} />
          </div>
        </div>
      </div>
    </section>
  );
}
