import React, { useRef } from 'react'
import {motion, useMotionTemplate, useMotionValue, useTransform} from 'motion/react'

function Liquid() {
    
 const arr=["clipPath: polygon(1% 57%, 7% 54%, 12% 49%, 17% 46%, 27% 43%, 40% 55%, 50% 57%, 55% 48%, 60% 43%, 68% 41%, 76% 47%, 80% 49%, 85% 54%, 92% 56%, 97% 56%, 98% 59%, 100% 100%, 1% 100%)"]

  return (
    <div className='flex  w-full justify-center'>
        <div className='relative w-fit '>
        <motion.div className='w-fit text-8xl text-amber-400  font-sans font-extrabold tracking-tight justify-center items-centers '>
            LiQuids
        </motion.div>
        <motion.div
        
        animate={{
            clipPath: [
              "polygon(0 80%, 15% 55%, 30% 65%, 45% 55%, 60% 65%, 75% 55%, 100% 60%, 100% 100%, 0 100%)",

              "polygon(0 80%, 15% 65%, 30% 55%, 45% 65%, 60% 55%, 75% 65%, 100% 55%, 100% 100%, 0 100%)",

              "polygon(0 60%, 15% 55%, 30% 65%, 45% 55%, 60% 65%, 75% 55%, 100% 60%, 100% 100%, 0 100%)",
            ],
        }}
        transition={{
            duration:5,
            delay:0,
            repeat:Infinity,
            repeatType:"loop"
        }}
       
        style={{
         
        }} className='w-fit  text-blue-800  text-8xl  inset-0 absolute font-sans font-extrabold tracking-tight justify-center items-centers '>
            LiQuids
        </motion.div>
        </div>
    </div>
  )
}

export default Liquid