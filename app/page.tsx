"use client"
import React from 'react'
import Slider from '../components/Slider'
//import Blogs from '../components/Blogs'
import Posts from '../components/Posts'
import Outbrain from '@/components/ads/outbrain'
import entertainment from '@/constants/entertainment'
import money from '@/constants/money'
import politics from '@/constants/politics'
import usNews from '@/constants/usnews'
import Link from "next/link";
import Post2 from '@/components/Post2'

const page = () => {
  return (
    <div>

<main className='mt-16 p-4'>
   
  <Slider/>
    
</main>

<div className="bg-white">
<div className="max-w-7xl mx-auto lg:p-4">

   


<div className='pt-10'>


<div className="flex justify-between mb-4 items-center sm:px-4 lg:px-0 px-6 ">
  <Link href="/marketPulse"  >
    <span className="uppercase text-xl sm:text-3xl md:text-5xl hover:underline hover:text-blue-700 cursor-pointer text-black font-bold">
      Market Pulse
    </span>
  </Link>
  <Link href="/marketPulse">
    <button
      className= "px-6 py-2 hover:cursor-pointer text-black hover:text-blue-700 rounded-lg transition duration-300  "
    >
      See all
    </button>
  </Link>
</div>

<div className='bg-white mt-8 '>
 <div className="grid  grid-cols-1  md:grid-cols-2 xl:grid-cols-2  w-full  gap-4">
  {politics.slice(5,7).map((post, index) => (
    <Link key={index} href={`/post/${post.title.replace(/[^A-Za-z0-9]+/g, "-")}`} passHref>
      <div className="bg-white ">
        <Post2  
          pimg={`/articles/${post.imgUrl}`} 
          pheading={post.title}  
          pcontent={post.contents} 
          articleNumber={post.articleNumber}
        />
      </div>
    </Link>
  ))}
</div>
</div>

<div className='bg-white mt-4'>
 <div className="grid  grid-cols-1  md:grid-cols-2 xl:grid-cols-4 gap-6 justify-items-center w-full  mx-auto">
  {politics.slice(1, 5).map((post, index) => (
    <Link key={index} href={`/post/${post.title.replace(/[^A-Za-z0-9]+/g, "-")}`} passHref>
      <div className="bg-white w-[330px]">
        <Posts  
          pimg={`/articles/${post.imgUrl}`} 
          pheading={post.title}  
          pcontent={post.contents} 
          articleNumber={post.articleNumber}
        />
      </div>
    </Link>
  ))}
</div>
</div>
</div>

<div className='mt-10 '>


<div className="flex justify-between p-8 items-center sm:px-4 lg:px-0 px-6 ">
  <Link href="/wealthMindset"  >
    <span className="uppercase text-xl sm:text-3xl md:text-5xl hover:text-blue-700 hover:underline cursor-pointer text-black font-bold">
      Wealth Mindset
    </span>
  </Link>
  <Link href="/wealthMindset">
    <button
      className= "px-6 py-2 hover:cursor-pointer text-black hover:text-blue-700 rounded-lg transition duration-300 "
    >
      See all
    </button>
  </Link>
</div>


<div className='bg-white '>
 <div className="grid  grid-cols-1  md:grid-cols-2 xl:grid-cols-3  w-full  gap-4">
  {money.slice(5,8).map((post, index) => (
    <Link key={index} href={`/post/${post.title.replace(/[^A-Za-z0-9]+/g, "-")}`} passHref>
      <div className="bg-white ">
        <Post2  
          pimg={`/articles/${post.imgUrl}`} 
          pheading={post.title}  
          pcontent={post.contents} 
          articleNumber={post.articleNumber}
        />
      </div>
    </Link>
  ))}
</div>
</div>

<div className='bg-white mt-4'>
 <div className="grid  grid-cols-1  md:grid-cols-2 xl:grid-cols-4 gap-6 justify-items-center w-full ">
  {money.slice(1, 5).map((post, index) => (
    <Link key={index} href={`/post/${post.title.replace(/[^A-Za-z0-9]+/g, "-")}`} passHref>
      <div className="bg-white w-[330px]">
        <Posts  
          pimg={`/articles/${post.imgUrl}`} 
          pheading={post.title}  
          pcontent={post.contents} 
          articleNumber={post.articleNumber}
        />
      </div>
    </Link>
  ))}
</div>
</div>
</div>

<div className='mt-10'>


<div className="flex justify-between p-8 items-center sm:px-4 lg:px-0 px-6 ">
  <Link href="/stockReviews"  >
    <span className="uppercase text-xl sm:text-3xl md:text-5xl hover:text-blue-700 hover:underline cursor-pointer text-black font-bold">
      Stock Reviews
    </span>
  </Link>
  <Link href="/stockReviews">
    <button
      className= "px-6 py-2 hover:cursor-pointer text-black hover:text-blue-700 rounded-lg transition duration-300  "
    >
      See all
    </button>
  </Link>
</div>

<div className='bg-white'>
 <div className="grid  grid-cols-1  md:grid-cols-2 xl:grid-cols-4 gap-6 justify-items-center w-full  mx-auto">
  {usNews.slice(0, 4).map((post, index) => (
    <Link key={index} href={`/post/${post.title.replace(/[^A-Za-z0-9]+/g, "-")}`} passHref>
      <div className="bg-white w-[330px]">
        <Posts  
          pimg={`/articles/${post.imgUrl}`} 
          pheading={post.title}  
          pcontent={post.contents} 
          articleNumber={post.articleNumber}
        />
      </div>
    </Link>
  ))}
</div>
</div>
</div>

<div className='mt-10'>


<div className="flex justify-between p-8 items-center sm:px-4 lg:px-0 px-6 ">
  <Link href="/smartInvestment"  >
    <span className="uppercase text-xl sm:text-3xl md:text-5xl hover:underline hover:text-blue-700 cursor-pointer text-black font-bold">
      Smart Investment
    </span>
  </Link>
  <Link href="/smartInvestment">
    <button
      className= "px-6 py-2 hover:cursor-pointer  rounded-lg transition duration-300 text-black hover:text-blue-700 "
    >
      See all
    </button>
  </Link>
</div>


<div className='bg-white '>
 <div className="grid  grid-cols-1  md:grid-cols-2 xl:grid-cols-4 gap-6 justify-items-center w-full ">
  {entertainment.slice(1, 13).map((post, index) => (
    <Link key={index} href={`/post/${post.title.replace(/[^A-Za-z0-9]+/g, "-")}`} passHref>
      <div className="bg-white w-[330px]">
        <Posts  
          pimg={`/articles/${post.imgUrl}`} 
          pheading={post.title}  
          pcontent={post.contents} 
          articleNumber={post.articleNumber}
        />
      </div>
    </Link>
  ))}
</div>
</div>
</div>
</div>
</div>

 <aside className="max-w-7xl mt-30 mx-auto">
        <div className="OUTBRAIN outbrain-desktop" data-widget-id="AR_1"></div>
        <div className="OUTBRAIN outbrain-mobile" data-widget-id="CRMB_1"></div>
      </aside>

      <Outbrain />


    </div>


  )
}


export default page


