'use client';

import React from 'react'

import { ImagesSliderDemo } from './Image-slider-Carousel';

export default function Hero() {
    return (
      <div className="bg-white w-full">
        <div className="relative isolate pt-14 lg:pt-8 w-full h-screen overflow-hidden">
          <div className="w-full h-full">
            <ImagesSliderDemo />
          </div>
        </div>
      </div>
    );
  }
  