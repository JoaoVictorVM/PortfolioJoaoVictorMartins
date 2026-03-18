export function ConnectSection() {
  return (
    <section className="pb-32">
      <div className="mx-auto max-w-2xl px-4 space-y-4 text-[var(--detail-color)]">
        <h2 className="text-lg text-[var(--text-color)]">Contato</h2>
        <p className="text-[var(--text-color)]">
          Me encontre em{" "}
          <a
            className="underline underline-offset-4 decoration-[var(--text-color)]/30 hover:decoration-[var(--text-color)] transition "
            href="https://www.linkedin.com/in/jvvmartins/"
            target="_blank"
          >
            Linkedin
          </a>
          ,{" "}
          <a
            className="underline underline-offset-4 decoration-[var(--text-color)]/30 hover:decoration-[var(--text-color)] transition "
            href="https://github.com/JoaoVictorVM"
            target="_blank"
          >
            GitHub
          </a>
          ,{" "}
          <a
            className="underline underline-offset-4 decoration-[var(--text-color)]/30 hover:decoration-[var(--text-color)] transition "
            href="https://www.instagram.com/jvvmartins.s/"
            target="_blank"
          >
            Instagram
          </a>
          ,{" "}
          <a
            className="underline underline-offset-4 decoration-[var(--text-color)]/30 hover:decoration-[var(--text-color)] transition "
            href="https://wa.me/5535998095841"
            target="_blank"
          >
            WhatsApp
          </a>{" "}
          ou{" "}
          <a
            className="underline underline-offset-4 decoration-[var(--text-color)]/30 hover:decoration-[var(--text-color)] transition "
            href="mailto:jvmartinscv@gmail.com"
            target="_blank"
          >
            Email
          </a>{" "}
        </p>
      </div>
    </section>
  );
}
