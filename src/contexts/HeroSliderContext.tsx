import React, { createContext, useContext, ReactNode } from 'react';
import useHeroSlider from '@/hooks/useHeroSlider';
import { Slide } from '@/components/pages/home/HomeHeroSlider';

interface HeroSliderContextType {
  slides: Slide[];
  page: number;
  direction: number;
  nextSlide: () => void;
  prevSlide: () => void;
  goToSlide: (index: number) => void;
}


const HeroSliderContext = createContext<HeroSliderContextType | undefined>(undefined);

export function HeroSliderProvider({ children, slides }: { children: ReactNode; slides: Slide[] }) {
  const sliderState = useHeroSlider(slides)

  return (
    <HeroSliderContext.Provider value={{...sliderState }}> 
      {children}
    </HeroSliderContext.Provider>
  );
}

export function useHeroSliderContext() {
  const context = useContext(HeroSliderContext);
  if (context === undefined) {
    throw new Error('useHeroSliderContext must be used within a HeroSliderProvider');
  }
  return context;
}