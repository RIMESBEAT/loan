"use client";
import Image from "next/image";
// import Hero from "../../public/mockup.png";
import PlayButton from "../../public/playstore.png";
import Security from "../../public/security.png";
import Digital from "../../public/digital.png";
import Disburst from "../../public/disburst.png";
import { ArrowRightCircleIcon } from "@heroicons/react/24/solid";
import { client } from "../../sanity/lib/client";
import { groq } from "next-sanity";
import Header from "@/components/Header";
import Hero from "@/components/Hero";
import HowItWorks from "@/components/HowItWorks";
import LoanOptions from "@/components/LoanOptions";
import WhyChooseUs from "@/components/WhyChooseUs";

export default function Home() {
  // const apkFile = await client.fetch(
  //   groq`*[_type == "download"] {
  // "apk_file": apk_file.asset->url,
  //     } `
  // );
  return (
    <main className=" h-full   ">
      {/* <section className='h-70 w-full gradient-bg '>
        <div className='block md:flex items-center padding__x'>
          <div className=' flex-1 pt-10 md:mr-5 '>
            <h1 className=' my-3 font-extrabold text-6xl text-white uppercase italic '>
              Fasthelp
            </h1>
            <p className='font-bold text-gray-100 my-2'>
              Easily Apply for Online Loan
            </p>
            <p className='font-bold text-gray-200 my-4'>
              Loan up to ₦ 50,000! Just need you to provide a valid BVN and
              Android phone
            </p>
            <a
              target='_blank'
              href={`${apkFile[0].apk_file}?dl=`}
              className=' '
            >
              <Image
                src={PlayButton}
                alt='Playstore Button'
                priority
                className=' w-32 my-2'
              />
            </a>
          </div>
          <div className=' flex-1 pt-10'>
            <Image src={Hero} alt='Hero' className='h-full ' />
          </div>
        </div>
      </section>

      <section className='padding__x  '>
        <h2 className=' pt-20 pb-10 font-extrabold text-4xl text-center text-[#1C6000] '>
          Why Choose Us ?
        </h2>

        <div className='block md:flex items-center my-2 md:space-x-8'>
          <Image
            src={Security}
            alt='Image Describing Security'
            className='w-72 mx-auto rounded-md  mix-blend-multiply'
          />

          <div className=''>
            <h2 className=' font-extrabold text-2xl text-black my-4'>
              Security
            </h2>

            <p className=''>
              One of the key advantages of FASTHELP&#39;s platform is its fully
              secured nature. The system incorporates robust security measures
              to ensure the protection of user data and financial information.
              By adhering to industry best practices and employing advanced
              encryption methods, FASTHELP ensures that customer information
              remains safe and confidential.
            </p>
          </div>
        </div>
        <hr className=' shadow-lg shadow-black my-8' />

        <div className=' flex flex-col-reverse md:flex-row md:space-x-8 items-center my-2 '>
          <div className=''>
            <h2 className=' font-extrabold text-2xl text-black my-4 '>
              We are 100% Digital
            </h2>
            <p>
              The platform&#39;s 100% digital nature offers numerous benefits to
              borrowers. It eliminates the need for traditional paperwork and
              physical visits to brick-and-mortar institutions. Instead, users
              can conveniently apply for loans online from the comfort of their
              own homes. The streamlined application process saves time and
              effort, making it easier for individuals to access the financial
              support they need.
            </p>
          </div>

          <Image
            src={Digital}
            alt='100% Digital'
            className='w-72 mx-auto rounded-md mix-blend-multiply'
          />
        </div>
        <hr className=' shadow-lg shadow-black my-8' />

        <div className='block md:flex items-center my-2 md:space-x-8'>
          <Image
            src={Disburst}
            alt='Fast Disburstment'
            className='w-72 mx-auto rounded-md mix-blend-multiply'
          />

          <div className=''>
            <h2 className=' font-extrabold text-2xl text-black my-4'>
              {' '}
              Fastest Disbursal
            </h2>
            <p>
              A standout feature of FASTHELP&#39;s digital lending platform is
              its commitment to providing the fastest disbursals process. Once a
              loan application is approved, funds are swiftly transferred to the
              borrower&#39;s designated account. This allows individuals to
              receive financial support promptly, enabling them to address their
              urgent needs without delay.
            </p>
          </div>
        </div>
        <hr className=' shadow-lg shadow-black my-8' />
      </section>

      <section className='padding__x  mb-10'>
        <h2 className='pt-20 pb-10 font-extrabold text-4xl text-center text-[#1C6000]'>
          How To Apply?
        </h2>
        <div className='flex items-center  md:space-x-2 bg-[#6ca15765] rounded-md w-fit px-2 my-4'>
          <div className=''>
            <ArrowRightCircleIcon className='w-10 text-[#1C6000]' />
          </div>

          <div className=''>
            <p> Select Type of Loan and Apply </p>
          </div>
        </div>
        <div className='flex items-center  md:space-x-2 bg-[#6ca15765] rounded-md w-fit px-2 my-4 '>
          <div className=''>
            <ArrowRightCircleIcon className='w-10 text-[#1C6000]' />
          </div>

          <div className=''>
            <p> Complete KYC registration with BVN </p>
          </div>
        </div>
        <div className='flex items-center  md:space-x-2 bg-[#6ca15765] rounded-md w-fit px-2 my-4'>
          <div className=''>
            <ArrowRightCircleIcon className='w-10 text-[#1C6000]' />
          </div>

          <div className=''>
            <p>Pledge securities as collateral for secured loans</p>
          </div>
        </div>
        <div className='flex items-center  md:space-x-2 bg-[#6ca15765] rounded-md w-fit px-2 my-4'>
          <div className=''>
            <ArrowRightCircleIcon className='w-10 text-[#1C6000]' />
          </div>

          <div className=''>
            <p> Verify your bank account</p>
          </div>
        </div>
        <div className='flex items-center  md:space-x-2 bg-[#6ca15765] rounded-md w-fit px-2 my-4'>
          <div className=''>
            <ArrowRightCircleIcon className='w-10 text-[#1C6000]' />
          </div>

          <div className=''>
            <p>Read & Sign loan agreement online with OTP authentication</p>
          </div>
        </div>
      </section> */}

      <Header />
      <div className=" py-20">
        <Hero />
        <WhyChooseUs />
        <HowItWorks />
        <LoanOptions />
      </div>
    </main>
  );
}
