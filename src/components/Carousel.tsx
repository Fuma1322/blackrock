"use client";

import { motion } from "framer-motion";
import React from "react";
import { ImagesSlider } from "../components/ui/images-slider";

export function Carousel() {
  const images = [
    "bg.jpg",
    "bg01.jpg",
    "bg02.jpg",
    "post4.jpg",
  ];
  return (
          <ImagesSlider className="h-[44rem] rounded-md" images={images}>
        <motion.div
          initial={{
            y: -80,
          }}
          animate={{
            y: 0,
          }}
          transition={{
            duration: 0.6,
          }}
          className="z-50 flex flex-col justify-center items-center"
        >
          
        </motion.div>
      </ImagesSlider>
    );
}

export default Carousel;