import { JourneyCard } from "./aboutJourney"
import { AboutProfile } from "./aboutProfile"
import type { ProfileData, JourneyData } from "@/types/about"

const profileData: ProfileData = {
  name: "Joao Victor Ventura Martins",
  title: "Fullstack Developer",
  imageUrl: "/images/profile/profile.jpg",
  linksUrl: "#links",
  aboutUrl: "#about",
}

export function AboutSection() {
  return (
    <section className="py-16 md:py-24 px-4">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="mb-12 flex flex-col items-center">
          {/* <span className="mb-3 block text-sm font-medium uppercase tracking-wider text-violet-500">
            Sobre Mim
          </span> */}
          <h2 className="text-3xl font-bold text-white sm:text-4xl lg:text-5xl">
            Me{" "}
            <span className="bg-gradient-to-r from-[var(--cor-primaria-1)] to-[var(--cor-primaria-3)] bg-clip-text text-transparent">
              Conheca
            </span>
          </h2>
        </div>

        {/* Content Grid */}
        <div className="grid gap-6 lg:grid-cols-5 items-stretch">
          <div className="lg:col-span-3 h-full">
            <JourneyCard />
          </div>

          {/* Profile Card */}
          <div className="lg:col-span-2 h-full">
            <AboutProfile profile={profileData} />
          </div>
        </div>
      </div>
    </section>
  )
}
