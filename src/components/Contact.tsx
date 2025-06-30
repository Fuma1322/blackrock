import React from 'react'
import { motion } from "framer-motion";
import { twMerge } from "tailwind-merge";
import { FiArrowRight } from "react-icons/fi";
import { SiWhatsapp} from "react-icons/si";
import {Facebook, Twitter, Instagram, Phone} from 'lucide-react'

export function Contact() {
  return (
     <div className="min-h-screen bg-zinc-50 px-4 py-52 text-zinc-50">
      <motion.div
        initial="initial"
        animate="animate"
        transition={{
          staggerChildren: 0.05,
        }}
        className="mx-auto grid max-w-4xl grid-flow-dense grid-cols-12 gap-4"
      >
        <HeaderBlock />
        <SocialsBlock />
      </motion.div>
    </div>
  );
};

const Block = ({ className, ...rest }) => {
  return (
    <motion.div
      variants={{
        initial: {
          scale: 0.5,
          y: 50,
          opacity: 0,
        },
        animate: {
          scale: 1,
          y: 0,
          opacity: 1,
        },
      }}
      transition={{
        type: "spring",
        mass: 3,
        stiffness: 400,
        damping: 50,
      }}
      className={twMerge(
        "col-span-4 rounded-lg border border-zinc-300 bg-zinc-800 p-6",
        className
      )}
      {...rest}
    />
  );
};

const HeaderBlock = () => (
  <Block className="col-span-12 row-span-2 md:col-span-6">
    <img
      src="logo.png"
      alt="avatar"
      className="mb-4 size-20 rounded-full"
    />
    <h1 className="mb-12 text-4xl font-medium leading-tight">
      Hello and welcome, please {" "}
      <span className="text-zinc-400">
        use the links to contact us.
      </span>
    </h1>
    <a
      href="#"
      className="flex items-center gap-1 text-red-300 hover:underline"
    >
      Contact Us <FiArrowRight />
    </a>
  </Block>
);

const SocialsBlock = () => (
  <>
    <Block
      whileHover={{
        rotate: "2.5deg",
        scale: 1.1,
      }}
      className="col-span-6 bg-red-500 md:col-span-3"
    >
      <a
        href="https://www.facebook.com/profile.php?id=61569806774640"
        className="flex flex-col items-center justify-center h-full text-white"
      >
        <Facebook />
        <span className="mt-2 text-lg font-medium">Drop a DM</span>
      </a>
    </Block>
    <Block
      whileHover={{
        rotate: "-2.5deg",
        scale: 1.1,
      }}
      className="col-span-6 bg-green-600 md:col-span-3"
    >
      <a
        href="https://wa.me/26659063220"
        className="flex flex-col items-center justify-center h-full text-white"
      >
        <SiWhatsapp />
        <span className="mt-2 text-lg font-medium">Leave a text</span>
      </a>
    </Block>
    <Block
      whileHover={{
        rotate: "-2.5deg",
        scale: 1.1,
      }}
      className="col-span-6 bg-pink-500 md:col-span-3"
    >
      <a
        href="https://www.instagram.com/liineo_sehleka/"
        className="flex flex-col items-center justify-center h-full text-white"
      >
        <Instagram className='text-4xl' />
        <span className="mt-2 text-lg font-medium">Drop a DM</span>
      </a>
    </Block>
    <Block
      whileHover={{
        rotate: "2.5deg",
        scale: 1.1,
      }}
      className="col-span-6 bg-zinc-50 md:col-span-3"
    >
      <a
        href="tel:+26663058243"
        className="flex flex-col items-center justify-center h-full text-black"
      >
        <Phone className="text-4xl" />
        <span className="mt-2 text-lg font-medium">Call Us</span>
        <span className="mt-2 text-sm font-medium">+266 63058243</span>
      </a>
    </Block>
  </>
);

export default Contact

