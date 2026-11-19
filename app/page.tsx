import React from 'react';
import CinematicIntro from '@/components/hero/CinematicIntro';
import Hero from '@/components/hero/Hero';
import PhilosophyIntro from '@/components/sections/PhilosophyIntro';
import AccommodationsShowcase from '@/components/sections/AccommodationsShowcase';
import WaterExperience from '@/components/sections/WaterExperience';
import SignatureExperiences from '@/components/sections/SignatureExperiences';
import DayAtAquaViva from '@/components/sections/DayAtAquaViva';
import ArchitectureNature from '@/components/sections/ArchitectureNature';
import EditorialGallery from '@/components/sections/EditorialGallery';
import PhilosophyPillars from '@/components/sections/PhilosophyPillars';
import JournalPreview from '@/components/sections/JournalPreview';
import FinalExperience from '@/components/sections/FinalExperience';

export default function HomePage() {
  return (
    <>
      <CinematicIntro />
      <Hero />
      <PhilosophyIntro />
      <AccommodationsShowcase />
      <WaterExperience />
      <SignatureExperiences />
      <DayAtAquaViva />
      <ArchitectureNature />
      <EditorialGallery />
      <PhilosophyPillars />
      <JournalPreview />
      <FinalExperience />
    </>
  );
}
