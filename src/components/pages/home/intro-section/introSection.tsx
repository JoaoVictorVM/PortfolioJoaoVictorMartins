export function IntroSection() {
  return (
    <section id="inicio" className="px-4 py-32">
      <div className="mx-auto max-w-2xl space-y-8 text-[var(--text-color-dark)]">
        <div className="space-y-12">
          <div className="space-y-2">
            <h1 className="text-lg">João Victor Ventura Martins</h1>
            <ul className="list-disc pl-5 text-[var(--detail-color-dark)] text-sm font-normal">
              <li>Software Engineer</li>
              <li>FullStack Developer</li>
            </ul>
          </div>
          <h1 className="text-lg">Apenas uma introdução</h1>
        </div>

        <div className="space-y-4 text-lg leading-relaxed text-white/80">
          <p className="italic text-white/90">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce at
            tellus vitae massa hendrerit varius. Aenean pharetra, orci vitae
            placerat porttitor, metus nulla volutpat lectus, quis fermentum enim
            dolor ut odio.
          </p>
          <p>
            In the past I’ve developed the Vercel design system, website, and
            dashboard.
          </p>
        </div>
      </div>
    </section>
  );
}
