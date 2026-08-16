import { Link } from "@tanstack/react-router";
import { ArrowUpRight } from "lucide-react";
import { games } from "@/features/games/data/games";
import { useI18n } from "@/shared/hooks/useI18n";
import { usePreference } from "@/shared/hooks/usePreference";

export function AboutGameDev() {
  const { about } = useI18n();
  const { gamedev } = about;
  const { language } = usePreference();
  const highlighted = games.slice(0, 2);

  return (
    <div className="text-text space-y-6">
      <p>{gamedev.blurb}</p>

      <div className="space-y-4">
        {highlighted.map((game) => (
          <article key={game.id} className="space-y-1">
            <h3 className="text-text font-normal">{game.title[language]}</h3>
            <p className="text-detail text-sm">{game.summary[language]}</p>
          </article>
        ))}
      </div>

      <p>
        {gamedev.teaser}{" "}
        <Link
          to="/gamedev"
          className="decoration-text/30 hover:decoration-text inline-flex items-center gap-1 underline underline-offset-4 transition-colors"
        >
          <span>{gamedev.teaserLink}</span>
          <ArrowUpRight size={14} aria-hidden className="text-detail" />
        </Link>
      </p>
    </div>
  );
}
