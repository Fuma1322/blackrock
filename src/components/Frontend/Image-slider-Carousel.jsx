"use client";
import { motion } from "framer-motion";
import React from "react";
import { ImagesSlider } from "../ui/Image-slider";

export function ImagesSliderDemo() {
    const images = [
      "/bg.jpg",
      "/bg01.jpg",
      "/bg02.jpg",
      "/bg03.jpg",
    ];
    
    return (
      <ImagesSlider className="h-[42rem] w-full" images={images}>
        <motion.div
          initial={{ opacity: 0, y: -80 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="absolute inset-0 flex flex-col justify-center items-center w-full h-full"
        >
          <motion.p className="font-bold text-white text-2xl md:text-3xl text-center bg-clip-text bg-gradient-to-b from-neutral-50 to-neutral-400 py-4">
            Discover Extraordinary <br /> Meats at BlackRock
          </motion.p>
        </motion.div>
      </ImagesSlider>
    );
  }
  