import Accordion from '@/components/accordion/Accordion'
import { faqAboutData, faqAcct, faqCard, faqEligibility, faqGenData, faqPrivacyData, faqRepayment } from '@/global/faqs'
import React from 'react'
import BgParticle from "../../../public/bg.png"
import Image from 'next/image'
import Card from '@/components/card/Card'

const Faqs = () => {
  return (
    <main className=''>

    


     

<div className="gradient-bg h-72">
<h1 className=' text-4xl flex justify-center items-center font-extrabold h-full text-white' >FAQs Page</h1>
</div>

<div className=" padding__x">

  <h2 className='font-extrabold text-4xl my-8 pt-10 text-[#1C6000]'>
    About FASTHELP
  </h2>
<div className=" grid md:grid-cols-2 sm:grid-cols-2 lg:grid-cols-3 gap-4">

  {
  faqAboutData ?.map((item)=>(
    <div className=" my-2" key={item.id}>
<Card bgColor="bg-black"
        title={item.quest}
        content={<div className=""> 
       <p> {Array.isArray(item.ans) ? (
              <ul>
                {item.ans.map((item, index) => (
                  <li className='py-2' key={index}>{item.list}</li>
                ))}
              </ul>
            ) : (
              item.ans
            )}</p>

          </div>
          
        }
      />
    </div>
  ))
}


</div>


</div>
<div className=" padding__x">

  <h2 className='font-extrabold text-4xl my-8 pt-10 text-[#1C6000]'>
    General Information
  </h2>

  <div className=" grid md:grid-cols-2 sm:grid-cols-2 lg:grid-cols-3 gap-4">

{
  faqGenData ?.map((item)=>(
    <div className=" my-2" key={item.id}>
<Card bgColor="bg-gray-900"
        title={item.quest}
        content={<div className=""> 
       <p> {Array.isArray(item.ans) ? (
              <ul>
                {item.ans.map((item, index) => (
                  <li className='py-2' key={index}>{item.list}</li>
                ))}
              </ul>
            ) : (
              item.ans
            )}</p>

          </div>
          
        }
      />
    </div>
  ))
}

  </div>



</div>
<div className=" padding__x">

  <h2 className='font-extrabold text-4xl my-8 pt-10 text-[#1C6000]'>
    Security And Privacy
  </h2>

  <div className=" grid md:grid-cols-2 sm:grid-cols-2 lg:grid-cols-3 gap-4">

{
 faqPrivacyData?.map((item)=>(
    <div className=" my-2" key={item.id}>
<Card bgColor="bg-red-950"
        title={item.quest}
        content={<div className=""> 
       <p> {Array.isArray(item.ans) ? (
              <ul>
                {item.ans.map((item, index) => (
                  <li className='py-2' key={index}>{item.list}</li>
                ))}
              </ul>
            ) : (
              item.ans
            )}</p>

          </div>
          
        }
      />
    </div>
  ))
}

  </div>
  

</div>
<div className=" padding__x">

  <h2 className='font-extrabold text-4xl my-8 pt-10 text-[#1C6000]'>
   Eligibility
  </h2>

  <div className=" grid md:grid-cols-2 sm:grid-cols-2 lg:grid-cols-3 gap-4">

{
 faqEligibility?.map((item)=>(
    <div className=" my-2" key={item.id}>
<Card bgColor="bg-black"
        title={item.quest}
        content={<div className=""> 
       <p> {Array.isArray(item.ans) ? (
              <ul>
                {item.ans.map((item, index) => (
                  <li className='py-2' key={index}>{item.list}</li>
                ))}
              </ul>
            ) : (
              item.ans
            )}</p>

          </div>
          
        }
      />
      
    </div>
  ))
}

  </div>


</div>
<div className=" padding__x">

  <h2 className='font-extrabold text-4xl my-8 pt-10 text-[#1C6000]'>
   Account
  </h2>


  <div className=" grid md:grid-cols-2 sm:grid-cols-2 lg:grid-cols-3 gap-4">

{
 faqAcct?.map((item)=>(
    <div className=" my-2" key={item.id}>
<Card bgColor="bg-gray-900"
        title={item.quest}
        content={<div className=""> 
       <p> {Array.isArray(item.ans) ? (
              <ul>
                {item.ans.map((item, index) => (
                  <li className='py-2' key={index}>{item.list}</li>
                ))}
              </ul>
            ) : (
              item.ans
            )}</p>

          </div>
          
        }
      />
    </div>
  ))
}


  </div>


</div>
<div className=" padding__x">

  <h2 className='font-extrabold text-4xl my-8 pt-10 text-[#1C6000]'>
  Card Setup
  </h2>

  <div className=" grid md:grid-cols-2 sm:grid-cols-2 lg:grid-cols-3 gap-4">

{
 faqCard?.map((item)=>(
    <div className=" my-2" key={item.id}>
<Card bgColor="bg-black"
        title={item.quest}
        content={<div className=""> 
       <p> {Array.isArray(item.ans) ? (
              <ul>
                {item.ans.map((item, index) => (
                  <li className='py-2' key={index}>{item.list}</li>
                ))}
              </ul>
            ) : (
              item.ans
            )}</p>

          </div>
          
        }
      />
    </div>
  ))
}

  </div>


</div>
<div className=" padding__x">

  <h2 className='font-extrabold text-4xl my-8 pt-10 text-[#1C6000]'>
Repayment
  </h2>

  <div className=" grid md:grid-cols-2 sm:grid-cols-2 lg:grid-cols-3 gap-4">

{
 faqRepayment?.map((item)=>(
    <div className=" my-2" key={item.id}>
<Card bgColor="bg-gray-900"
        title={item.quest}
        content={<div className=""> 
       <p> {Array.isArray(item.ans) ? (
              <ul>
                {item.ans.map((item, index) => (
                  <li className='py-2' key={index}>{item.list}</li>
                ))}
              </ul>
            ) : (
              item.ans
            )}</p>

          </div>
          
        }
      />
    </div>
  ))
}

  </div>


</div>

    </main>
  )
}

export default Faqs