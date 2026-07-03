import {
  DisclosureList,
  type DisclosureItem,
} from "@/components/ui/DisclosureList";
import { games } from "@/features/games/data/games";
import { usePreference } from "@/shared/hooks/usePreference";

export function GameAccordion() {
  const { language } = usePreference();

  const items: DisclosureItem[] = games.map((game) => ({
    id: game.id,
    title: game.title[language],
    body: game.description[language],
    links: game.links?.map((link) => ({
      label: link.label[language],
      url: link.url,
    })),
  }));

  return <DisclosureList items={items} />;
}
