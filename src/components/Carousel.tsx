"use client";

import { motion } from "framer-motion";
import React from "react";
import { ImagesSlider } from "../components/ui/images-slider";
import { FloatingDock } from "../components/ui/floating-dock";
import {
  IconBrandGithub,
  IconBrandX,
  IconExchange,
  IconHome,
  IconNewSection,
  IconTerminal2,
} from "@tabler/icons-react";
import { SiFacebook, SiInstagram, SiLinkedin, SiWhatsapp, SiX } from "react-icons/si";

export function Carousel() {
  const images = [
    "bg.jpg",
    "bg01.jpg",
    "bg02.jpg",
    "post4.jpg",
  ];

  // Dock items
  const links = [
    { title: "WhatsApp", icon: <SiWhatsapp className="h-full w-full text-green-600" />, href: "https://wa.me/26659063220" },
    { title: "Facebook", icon: <SiFacebook className="h-full w-full text-blue-600" />, href: "https://www.facebook.com/profile.php?id=61569806774640" },
    { title: "Instagram", icon: <SiInstagram className="h-full w-full text-pink-600" />, href: "https://www.instagram.com/liineo_sehleka/" },
    { title: "Twitter", icon: <SiX className="h-full w-full text-white" />, href: "#" },
    { title: "LinkedIn", icon: <SiLinkedin className="h-full w-full text-blue-600" />, href: "#" },
  ];

  return (
    <div className="relative h-[44rem] rounded-md overflow-hidden">
      <ImagesSlider className="h-full w-full" images={images}>
        <motion.div
          initial={{ y: -80 }}
          animate={{ y: 0 }}
          transition={{ duration: 0.6 }}
          className="z-50 flex flex-col justify-center items-center"
        >
        </motion.div>
      </ImagesSlider>

      <FloatingDock
        items={links}
        desktopClassName="absolute top-0 left-0 h-full w-20 p-4 flex-col items-center gap-4 bg-transparent py-40"
      />
    </div>
  );
}

export default Carousel;