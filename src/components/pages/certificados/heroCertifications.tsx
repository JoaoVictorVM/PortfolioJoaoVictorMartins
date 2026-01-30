import { CertificationsSection } from '@/components/pages/certificados/CertificationsSection';

export function HeroCertifications() {
    return (
        <section className="py-16 md:py-24 px-4">
            <div className="max-w-7xl mx-auto text-center">
                <h1 className="text-2xl md:text-3xl font-bold">CERTIFICADOS</h1>
                <p className="text-sm text-white/80 mt-2">Certificações e formações relevantes</p>
            </div>

            <CertificationsSection />
        </section>
    );
}