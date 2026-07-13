import { Fragment } from "react";
import { Container } from "@/components/layout/Container";
import { socialLinks } from "@/features/home/data/socialLinks";
import { useI18n } from "@/shared/hooks/useI18n";
import { useReveal } from "@/shared/hooks/useReveal";
import { cn } from "@/shared/lib/cn";

export function ConnectSection() {
  const { home } = useI18n();
  const { connect } = home;
  const { ref, isVisible } = useReveal<HTMLElement>();

  return (
    <section
      ref={ref}
      className={cn("section-fade pb-32", isVisible && "visible")}
    >
      <Container className="text-text space-y-4">
        <h2 className="text-lg">{connect.title}</h2>
        <p className={cn("text-appear delay-350", isVisible && "visible")}>
          {connect.prefix}&nbsp;
          {socialLinks.map((link, index) => {
            const isSecondLast = index === socialLinks.length - 2;
            const isLast = index === socialLinks.length - 1;

            return (
              <Fragment key={link.href}>
                <a
                  href={link.href}
                  target="_blank"
                  rel="noreferrer"
                  className="decoration-text/30 hover:decoration-text underline underline-offset-4 transition-colors"
                >
                  {link.label}
                </a>
                {!isLast && (isSecondLast ? ` ${connect.orWord} ` : ", ")}
              </Fragment>
            );
          })}
          .
        </p>
      </Container>
    </section>
  );
}
