import { useState } from "react";
import * as Accordion from "@radix-ui/react-accordion";
import { ArrowUpRight, ChevronDown } from "lucide-react";
import { usePreference } from "@/shared/hooks/usePreference";
import { projects } from "@/features/projects/data/projects";
import { cn } from "@/shared/lib/cn";

export function ProjectAccordion() {
  const { language } = usePreference();
  const [openId, setOpenId] = useState("");

  return (
    <Accordion.Root
      type="single"
      collapsible
      value={openId}
      onValueChange={setOpenId}
      className="space-y-2"
    >
      {projects.map((project) => {
        const isOpen = openId === project.id;

        return (
          <Accordion.Item key={project.id} value={project.id}>
            <Accordion.Header>
              <Accordion.Trigger className="group text-text hover:bg-line/30 hover:text-text/80 flex w-full cursor-pointer items-center gap-3 rounded-lg py-2 text-left transition-colors">
                <span className="project-title">{project.title[language]}</span>
                <span className="project-line flex-1" />
                <ChevronDown
                  size={18}
                  aria-hidden
                  className={cn(
                    "project-chevron text-text shrink-0 transition-transform duration-200",
                    isOpen && "rotate-180",
                  )}
                />
              </Accordion.Trigger>
            </Accordion.Header>
            <Accordion.Content className="accordion-content">
              <div className="text-detail space-y-3 px-2 pt-2 pb-3 text-sm">
                <p className="accordion-reveal">{project.details[language]}</p>
                {project.links && project.links.length > 0 && (
                  <div className="accordion-reveal flex flex-wrap gap-2">
                    {project.links.map((link) => (
                      <a
                        key={link.url}
                        href={link.url}
                        target="_blank"
                        rel="noreferrer"
                        className="decoration-detail/50 hover:decoration-detail inline-flex items-center gap-1 p-2 underline underline-offset-4 transition-colors"
                      >
                        {link.label[language]}
                        <ArrowUpRight size={12} aria-hidden />
                      </a>
                    ))}
                  </div>
                )}
              </div>
            </Accordion.Content>
          </Accordion.Item>
        );
      })}
    </Accordion.Root>
  );
}
