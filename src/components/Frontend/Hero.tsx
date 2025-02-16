'use client';

import React from 'react'

import { ImagesSliderDemo } from './Image-slider-Carousel';

export default function Hero() {
  return (
    <div className="bg-white">
      <div className="relative isolate pt-14 lg:pt-8 w-full overflow-hidden">
        {/* Remove any inset or margin from these divs */}
        <div className="w-full h-full">
          <ImagesSliderDemo />
        </div>
        <div
          aria-hidden="true"
          className="absolute inset-x-0 top-[calc(100%-13rem)] -z-10 transform-gpu overflow-hidden blur-3xl sm:top-[calc(100%-30rem)]"
        > 
        </div>
      </div>
    </div>
  );
}