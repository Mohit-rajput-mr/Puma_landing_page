import React from 'react'

const Button = ({ label, iconURL}) => {
  return (
   <button className='flex justify-center items-center gap-2 px-7 py-4 border font-montserrat text-lg leading-none bg-black rounded-full text-white border-black'>
    {label}

    <img src={iconURL} alt="arrown right" className='ml-2  w-5 h-5'/>

   </button> 
  )
}

export default Button
