import React from 'react'

const Footer = () => {
    let date = new Date().getFullYear()
  return (
    <main className='py-4'>

<hr  className=' mb-4'/>
<div className='text-center text-xl font-bold '>FastHelp &copy; {date}</div>

    </main>
  )
}

export default Footer