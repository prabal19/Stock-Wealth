"use client"

import React from 'react'
import Image from 'next/image';
import Link from 'next/link';
import CreationDate from './Date';

const Blogs = ({
  title,
  mainimg,
  maintitle,
  maincontent,
  maindesc,
  author,
  days,
  buttontext,
  buttoncolor,
  buttonhovercolor
}: {
  title: string;
  mainimg: string;
  maintitle: string;
  maincontent: string;
  maindesc: string;
  author: string;
  days: number;
  buttontext : string,
  buttoncolor : string,
  buttonhovercolor : string
}) => {
  return (
    <div className='p-8'>
      {/* Title and Button */}
      <div className="flex justify-between items-center  ">
  <Link href={title}  >
    <span className="uppercase text-xl sm:text-3xl md:text-5xl hover:underline cursor-pointer text-black font-bold">
      {title}
    </span>
  </Link>
  <Link href={title}>
    <button
      className={` px-6 py-2 text-white rounded-lg transition duration-300 ${buttoncolor} ${buttonhovercolor} `}
    >
      {buttontext}
    </button>
  </Link>
</div>


      {/* Main Blog Section */}
      <section className='text-gray-600 body-font  overflow-hidden mt-8'>
        <div className=' '>
          <div className='flex flex-col lg:flex-row items-center lg:items-start gap-8'>
            <Image 
              alt='blog image' 
              className='w-full lg:w-1/2 h-64 md:h-96 object-cover '
              width={1000}
              height={1000}
              src={mainimg} 
            />
            
            <div className='lg:w-1/2 w-full ml-1.5  bg-white   '>
              <h2 className='text-sm font-semibold text-gray-500 uppercase tracking-wide'>{maintitle}</h2>
              <h1 className='text-gray-900  text-2xl md:text-4xl mt-4 font-bold tracking-wide mb-4'>
                {maincontent}
              </h1>
              <h5 className='text-xl line-clamp-2 '>{maindesc}</h5>
              <div className='mt-6 flex'>
              <Image 
                src={`/authors/${author}.jpg`} 
                alt="" 
                width={100} 
                height={100} 
                className="rounded-full object-cover object-center  size-14 "
  />
                <div>
                <p className='text-black font-medium mt-1 ml-4 text-lg md:text-xl'>{author}</p>
                <p className='text-gray-500 ml-4 mt-1 text-lg md:text-base'><CreationDate articleNumber={days}/> </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

export default Blogs