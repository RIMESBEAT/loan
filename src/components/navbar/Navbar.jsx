import Link from 'next/link'
import React from 'react'
import Logo from "../../../public/logo.png"
import Image from 'next/image'

const navlinks = [
    {
        id: 1,
        title: "Home",
        url: "/"

    },
    {
        id: 1,
        title: "Repayment",
        url: "/repayment"

    },
    {
        id: 1,
        title: "FAQs",
        url: "/faqs"

    },
]

const Navbar = () => {
  return (
    <main className=' '>
        
<div className="flex justify-between padding__x items-center">
    <div className="">
        <Link href="/">
            <Image src={Logo}  alt='Logo' className='w-44  object-cover'/>

        </Link>
    </div>
    <div className="flex space-x-4 font-bold">
{
    navlinks.map((item)=>(
        <div className=" " key={item.id}>
<Link href={item.url}>{item.title}</Link>
        </div>
    ))
}
    </div>
</div>


    </main>
  )
}

export default Navbar