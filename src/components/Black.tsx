"use client";

import React from "react";
import { motion } from "framer-motion";
import { Footprints, Home, Mic, Moon, PlaneIcon, PlaneLandingIcon } from "lucide-react";
import Text from "./Text";

export function Black() {
  const images = [
    "/post.jpg",
    "/post2.jpg",
    "/post3.jpg",
    "/post4.jpg",
    "/post5.jpg",
  ];

  return (
    <div className="py-40 flex items-center justify-center flex-col">
      <h4 className="text-lg md:text-2xl text-neutral-600 font-bold text-center mb-8">
        About BlackRock{" "}
        <span className="px-1 py-0.5 rounded-md bg-gray-100 border border-[#800000]">
          Butchery
        </span>
      </h4>

      <div className="flex justify-center items-center">
        {images.map((image, idx) => (
          <motion.div
            key={"images" + idx}
            style={{
              rotate: Math.random() * 20 - 10,
            }}
            whileHover={{
              scale: 1.1,
              rotate: 0,
              zIndex: 100,
            }}
            whileTap={{
              scale: 1.1,
              rotate: 0,
              zIndex: 100,
            }}
            className="rounded-xl -mr-4 mt-4 p-1 bg-white border border-neutral-100 shrink-0 overflow-hidden"
          >
            <img
              src={image}
              alt="bali"
              width="500"
              height="500"
              className="rounded-lg h-20 w-20 md:h-40 md:w-40 object-cover shrink-0"
            />
          </motion.div>
        ))}
      </div>

      <div className="py-10 flex flex-wrap items-start justify-start max-w-3xl mx-auto">
        <Text />
      </div>

      <div className="flex">
        <a href="/menu">
          <button className="bg-black text-white text-sm px-2 py-2 rounded-md border border-black w-28 cursor-pointer hover:bg-[#800000]">
          View Menu
        </button>
        </a>
      </div>
    </div>
  );
}

function Feature({ icon, text }: { icon: React.ReactNode; text: string }) {
  return (
    <div className="flex items-center justify-center">
      <span className="mr-1 text-neutral-700 h-4 w-4">
        {icon}
      </span>
      <span className="text-neutral-700 text-sm">
        {text}
      </span>
    </div>
  );
}

export default Black
