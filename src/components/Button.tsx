import React from 'react'

function Button() {
  return (
    <div className='flex w-full h-screen justify-center items-center'>
        <div className='bg-neutral-500 w-30 h-30 flex shadow-inner   shadow-olive-700 rounded-md'></div>
        
        <button className='bg-neutral-300 w-20 transition-all  active:scale-90 h-20 flex absolute  shadow-4xl rounded-full [box-shadow:1px_1px_10px_rgba(0,0,0,0.4),inset_0_2px_0px_rgba(255,255,255,0.4)] active:[box-shadow:inset_0_1px_4px_4px_rgba(0,0,0,0.6)] '></button>
    </div>
  )
}

export default Button