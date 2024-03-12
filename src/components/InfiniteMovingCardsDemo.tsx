

import React, { useEffect, useState } from "react";
import { InfiniteMovingCards } from "./ui/infinite-moving-cards";

export function InfiniteMovingCardsDemo() {
  return (
    <div className="lg:h-[25rem] h-auto dark:bg-transparent bg-transparent rounded-md flex flex-col antialiased bg-white dark:bg-gray-900 dark:bg-grid-white/[0.05] items-center justify-center relative overflow-hidden">
      <InfiniteMovingCards
        items={testimonials}
        direction="right"
        speed="slow"
      />
    </div>
  );
}

const testimonials = [
  {
    quote:
    "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/tailwindcss/tailwindcss-original.svg" 
  },
  {
    quote:
    "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/bootstrap/bootstrap-original-wordmark.svg" 
  },
  {
    quote:
    "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/html5/html5-plain-wordmark.svg" 
  },
  {
    quote:"https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/css3/css3-plain-wordmark.svg" ,
   
  },
  {
    quote:
    "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/javascript/javascript-plain.svg" ,

  },
  {
    quote:
    "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/nodejs/nodejs-original-wordmark.svg" ,

  },

  {
    quote:
    "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/react/react-original-wordmark.svg"
  },

  {
    quote:
    "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/postgresql/postgresql-plain-wordmark.svg" ,

  },

  {
    quote:
    "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/php/php-original.svg",

  },


];
