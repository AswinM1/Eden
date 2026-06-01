import { motion } from 'motion/react'

function Cube() {
  return (
    <div className='w-full h-screen flex justify-center items-center mt-20 [perspective:1200px] overflow-visible'>

      <motion.div
        animate={{
          rotateX: -20,
          rotateY: 360,
        }}
        transition={{
          duration: 10,
          repeat: Infinity,
          ease: "linear"
        }}
        className='relative w-40 h-40 [transform-style:preserve-3d]'
      >

       
        <div 
        style={{
          "background": "linear-gradient(90deg,rgba(169, 41, 255, 1) 0%, rgba(104, 29, 253, 1) 50%, rgba(255, 25, 221, 1) 86%)"
        }}className='absolute w-40 h-40 bg-neutral-300 [transform:translateZ(80px)] [box-shadow:inset_0_2px_10px_rgba(0,0,0,0.3)]'></div>

        <div style={{
          "background": "linear-gradient(90deg,rgba(169, 41, 255, 1) 0%, rgba(104, 29, 253, 1) 50%, rgba(255, 25, 221, 1) 86%)"
        }} className='absolute w-40 h-40 bg-neutral-500 [transform:rotateY(180deg)_translateZ(80px)]'></div>

        <div  className='absolute w-40 h-40 bg-neutral-400 [transform:rotateY(90deg)_translateZ(80px)]'></div>

        <div className='absolute w-40 h-40 bg-neutral-400 [transform:rotateY(-90deg)_translateZ(80px)]'></div>

      
        <div className='absolute w-40 h-40 bg-neutral-200 [transform:rotateX(90deg)_translateZ(80px)]'></div>

      
        <div className='absolute w-40 h-40 bg-neutral-600 [transform:rotateX(-90deg)_translateZ(80px)]'></div>

      </motion.div>

    </div>
  )
}

export default Cube