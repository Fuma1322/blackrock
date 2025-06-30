"use client";

import { TextGenerateEffect } from "./ui/text-generate-effect";

const words = `Found at Mookoli, Lancer's Gap road, BlackRock Butchery is your ultimate stop 
for fresh meats at the best prices in town. Our mission blah blah blah `;

export function Text() {
  return <TextGenerateEffect words={words} />;
}

export default Text