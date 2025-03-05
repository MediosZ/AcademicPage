import AboutSection from '@/components/AboutSection';
import Footer from '@/components/Footer';
import LatestNewsSection from '@/components/LatestNewsSection';
import LatestAwardsSection from '@/components/LatestAwardsSection';
import ProjectSection from '@/components/ProjectSection';
import SelectedPublicationsSection from '@/components/SelectedPublicationsSection';
import bibtex from '@/data/publications/Publications.bib';
import { homepageSection } from '@/data/website.config';

export default function Page() {
  return (
    <main className='md:w-[50rem] m-auto px-8 mt-32 flex flex-col gap-10 mb-20'>
      {homepageSection.AboutSection && <AboutSection />}
      {homepageSection.NewsSection && <LatestNewsSection />}
      {homepageSection.SelectedPublicationsSection && (
        <SelectedPublicationsSection bibtex={bibtex} />
      )}
      {homepageSection.AwardsSection && <LatestAwardsSection />}
      <Footer />
      {/* {homepageSection.ProjectSection && (
        <div className='flex flex-col gap-3'>
          <h1 className='text-2xl font-semibold'>Projects</h1>
          <ProjectSection />
        </div>
      )} */}
    </main>
  );
}
