"use client";

import React, { useRef } from "react";
import {
  motion,
  useMotionValue,
  useSpring,
  useTransform,
} from "motion/react";
import { FaAddressCard, FaFigma, FaHome, FaReact } from "react-icons/fa";

function Hoversee() {
  const containerRef = useRef<HTMLDivElement>(null);

  const mouseX = useMotionValue(Infinity);

  const arr = [<FaHome></FaHome >,<FaFigma></FaFigma>,<FaAddressCard></FaAddressCard>,<FaReact></FaReact>];

  return (
    <div className="w-full flex justify-center mt-40">
      
      <div
        ref={containerRef}
        onMouseMove={(e) => {
          mouseX.set(e.clientX);
        }}
        onMouseLeave={() => {
          mouseX.set(Infinity);
        }}
        className="
          flex gap-4
          bg-neutral-300
          
         [box-shadow:inset_0_2px_4px_rgba(0,0,0,0.4),0_2px_5px_rgba(255,255,255,0.2)]
          px-6 py-4
          rounded-3xl
          items-end
        "
      >
        {arr.map((val, idx) => {
          
          const distance = useTransform(mouseX, (valX) => {
            const bounds =
              containerRef.current?.children[
                idx
              ]?.getBoundingClientRect();

            if (!bounds) return 0;

            return (
              valX -
              bounds.left -
              bounds.width / 2
            );
          });

        
          const size = useTransform(
            distance,
            [-150, 0, 150],
            [50, 80, 50]
          );

          const width = useSpring(size, {
            mass: 0.1,
            stiffness: 150,
            damping: 12,
          });

          const height = useSpring(size, {
            mass: 0.1,
            stiffness: 150,
            damping: 12,
          });

          return (
            <motion.div
              key={idx}
              style={{
                "background":" linear-gradient(to bottom , rgba(29, 208, 253, 1) 50%, rgba(25, 25, 255, 1) 100%)",
                width,
                height,
              }}
              className="
                rounded-full
              
         [box-shadow:inset_0_2px_4px_rgba(0,0,0,0.4),0_2px_5px_rgba(255,255,255,0.2)]
                flex items-center justify-center
               
                size-32
              "
            >
              {val}
            </motion.div>
          );
        })}
      </div>
    </div>
  );
}

export default Hoversee;