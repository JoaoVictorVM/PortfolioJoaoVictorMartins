export function ConnectSection() {
  return (
    <section className="py-12">
      <div className="mx-auto max-w-2xl px-4 space-y-4 text-[var(--detail-color)]">
        <h2 className="text-sm font-semibold uppercase tracking-[0.4em] text-[var(--text-color)]">
          Connect
        </h2>
        <p className="text-lg text-[var(--text-color)]">
          Reach me at{" "}
          <a className="underline" href="mailto:hello@paco.me">
            @pacocoursey
          </a>{" "}
          or{" "}
          <a className="underline" href="mailto:hello@paco.me">
            p@paco.me
          </a>
          .
        </p>
      </div>
    </section>
  );
}
