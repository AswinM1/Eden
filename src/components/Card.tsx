import React from "react";
import { motion } from "framer-motion";

function Card() {
  return (
    <div className="flex justify-center items-center mt-10 mx-auto">

      <div className="relative w-52 h-52 rounded-[28px] overflow-hidden bg-neutral-300 border border-neutral-400 shadow-2xl">

        {/* animated liquid */}
        <motion.div
          animate={{
             clipPath: [
              "polygon(0 50%, 35% 55%, 30% 65%, 45% 55%, 60% 65%, 75% 55%, 100% 60%, 100% 100%, 0 100%)",

              "polygon(0 80%, 15% 65%, 30% 55%, 45% 65%, 60% 55%, 75% 65%, 100% 55%, 100% 100%, 0 100%)",

              "polygon(0 80%, 15% 55%, 30% 65%, 45% 55%, 60% 65%, 75% 55%, 100% 60%, 100% 100%, 0 100%)",
            ]
          }}
          transition={{
            duration: 7,
            repeat: Infinity,
           
          }}
          className="
            absolute inset-0
            bg-gradient-to-t
            from-red-600
            via-orange-400
            to-yellow-600
          "
        />

        {/* soft glow */}
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(255,255,255,0.4),transparent_45%)]" />

        {/* content */}
        <div className="relative z-10 flex flex-col justify-between h-full p-6">

          <div>
            <p className="text-sm text-neutral-700 font-medium tracking-tight">
              Deserts
            </p>

            <h1 className="text-3xl tracking-tight font-serif  text-neutral-700 mt-2 leading-none">
               Sahara
            </h1>
          </div>

          

        </div>

      </div>

    </div>
  );
}

export default Card;