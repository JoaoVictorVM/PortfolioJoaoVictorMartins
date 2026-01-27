import { HeroSectionSubtitle } from './heroSectionSubtitle';
import { HeroSectionTitle } from './heroSectionTitle';

export function HeroSection () {
    return (
        <section className="py-16 md:py-24 px-4">
            <div className="max-w-7xl mx-auto">
                <HeroSectionTitle />
                <HeroSectionSubtitle />
            </div>
        </section>
    );
}