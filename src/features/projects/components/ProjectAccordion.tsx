import {
  DisclosureList,
  type DisclosureItem,
} from "@/components/ui/DisclosureList";
import { projects } from "@/features/projects/data/projects";
import { usePreference } from "@/shared/hooks/usePreference";

export function ProjectAccordion() {
  const { language } = usePreference();

  const items: DisclosureItem[] = projects.map((project) => ({
    id: project.id,
    title: project.title[language],
    body: project.details[language],
    tags: project.stack,
    tagsLabel: "Stack",
    links: project.links?.map((link) => ({
      label: link.label[language],
      url: link.url,
    })),
  }));

  return <DisclosureList items={items} />;
}
