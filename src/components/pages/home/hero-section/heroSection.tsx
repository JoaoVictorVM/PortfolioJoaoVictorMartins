import { HeroSectionSubtitle } from './heroSectionSubtitle';
import { HeroSectionTitle } from './heroSectionTitle';
import { BackgroundGradient } from '@/components/layout/background/backgroundGradient';

export function HeroSection () {
    return (
        <section className="py-16 md:py-24 px-4">
            <BackgroundGradient />
            <div className="max-w-7xl mx-auto">
                <HeroSectionTitle />
                <HeroSectionSubtitle />
            </div>
        </section>
    );
}