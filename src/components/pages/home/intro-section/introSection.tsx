export function IntroSection() {
  return (
    <section id="inicio" className="px-4 pt-32">
      <div className="mx-auto max-w-2xl space-y-8 text-[var(--text-color)]">
        <div className="space-y-12">
          <div className="space-y-2">
            <h1 className="text-lg">João Victor Ventura Martins</h1>
            <ul className="list-disc pl-5 text-[var(--detail-color)] text-sm font-normal">
              <li>Software Engineer</li>
              <li>FullStack Developer</li>
            </ul>
          </div>
          <h1 className="text-lg">Apenas uma introdução</h1>
        </div>

        <div className="space-y-4 text-lg leading-relaxed text-[var(--detail-color)]">
          <p className="italic text-[var(--text-color)]">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce at
            tellus vitae massa hendrerit varius. Aenean pharetra, orci vitae
            placerat porttitor, metus nulla volutpat lectus, quis fermentum enim
            dolor ut odio.
          </p>
          <p className="text-[var(--text-color)]">
            In the past I’ve developed the Vercel design system, website, and
            dashboard.
          </p>
        </div>
      </div>
    </section>
  );
}
