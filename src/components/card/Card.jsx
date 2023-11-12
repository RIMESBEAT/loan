"use client"
import React, { useState } from 'react'
import Logo from "../../../public/logo.png"
import Image from 'next/image'
import MasterCard from "../../../public/mastercard.png"

const Card = ({title, content, bgColor}) => {
    const [isOpen, setIsOpen] = useState(false);

    const toggleAccordion = () => {
      setIsOpen(!isOpen);
    };
  

  return (
    <main className=' relative'>
<div className={`${isOpen ? `gradient-bg-dark rounded-2xl h-fit py-2 px-3 flip-vertical-left text-white`: ` ${bgColor} flip-vertical-right  text-white rounded-2xl h-52 py-2 px-3`  }`}>
   
   {
    !isOpen && <Image src={Logo} alt='Logo' className='w-32' />
   }
    
    <div
        className="flex justify-between items-center cursor-pointer"
        onClick={toggleAccordion}
      >
        <h2 className={`${isOpen ? "text-lg font-bold" : "text-lg font-bold line-clamp-1"} `}>{title} </h2>
        <span className="text-gray-300 ">{isOpen ? '▲' : '▼'}</span>
      </div>

      {
        !isOpen && <div className="text-lg ">

            <h2 className='text-center mt-6  opacity-30'>1779 9877 3126 1209 3471</h2>
            <Image src={MasterCard}  alt='Master Card Logo' className='w-14 absolute  bottom-8 right-10'/>
        </div>
      }
  
{isOpen && <div className="mt-2 ">{content}</div>}
</div>
    </main>
  )
}

export default Card