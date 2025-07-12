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
import CreationDate from '@/components/Date';

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

    <div className="bg-white rounded-2xl p-6 shadow-sm">
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {politics.slice(0, 6).map((post, index) => (
          <Link
            key={index}
            href={`/post/${post.title.replace(/[^A-Za-z0-9]+/g, "-")}`}
            passHref
          >
            <div className="rounded-xl overflow-hidden hover:shadow-md transition duration-300 cursor-pointer flex flex-col h-full">
              <img
                src={`/articles/${post.imgUrl}`}
                alt={post.title}
                className="w-full h-48 object-cover"
              />
              <div className="p-4 flex flex-col justify-between flex-grow">
                <h3 className="text-md font-semibold mb-2 leading-snug line-clamp-2">
                  {post.title}
                </h3>
                <p className="text-sm text-gray-600 line-clamp-2 mb-4">
                  {post.contents}
                </p>
                <p className="text-xs text-gray-500 mt-1">
                  {post.authorName} • <CreationDate articleNumber={post.articleNumber} />
                </p>
              </div>
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

 <div className="bg-white rounded-2xl p-6 shadow-sm">
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {money.slice(1, 9).map((post, index) => (
          <Link
            key={index}
            href={`/post/${post.title.replace(/[^A-Za-z0-9]+/g, "-")}`}
            passHref
          >
            <div className="rounded-xl overflow-hidden hover:shadow-md transition duration-300 cursor-pointer flex flex-col h-full">
              <img
                src={`/articles/${post.imgUrl}`}
                alt={post.title}
                className="w-full h-48 object-cover"
              />
              <div className="p-4 flex flex-col justify-between flex-grow">
                <h3 className="text-md font-semibold mb-2 leading-snug line-clamp-2">
                  {post.title}
                </h3>
                <p className="text-sm text-gray-600 line-clamp-2 mb-4">
                  {post.contents}
                </p>
                <p className="text-xs text-gray-500 mt-1">
                  {post.authorName} • <CreationDate articleNumber={post.articleNumber} />
                </p>
              </div>
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

  <div className="bg-white rounded-2xl p-6 shadow-sm">
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {usNews.slice(0, 4).map((post, index) => (
          <Link
            key={index}
            href={`/post/${post.title.replace(/[^A-Za-z0-9]+/g, "-")}`}
            passHref
          >
            <div className="rounded-xl overflow-hidden hover:shadow-md transition duration-300 cursor-pointer flex flex-col h-full">
              <img
                src={`/articles/${post.imgUrl}`}
                alt={post.title}
                className="w-full h-48 object-cover"
              />
              <div className="p-4 flex flex-col justify-between flex-grow">
                <h3 className="text-md font-semibold mb-2 leading-snug line-clamp-2">
                  {post.title}
                </h3>
                <p className="text-sm text-gray-600 line-clamp-2 mb-4">
                  {post.contents}
                </p>
                <p className="text-xs text-gray-500 mt-1">
                  {post.authorName} • <CreationDate articleNumber={post.articleNumber} />
                </p>
              </div>
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

<div className="bg-white p-4">
  <div className="grid grid-cols-1 xl:grid-cols-3 gap-6">
    {/* Left Side: Two Main Posts */}
    <div className="xl:col-span-2 grid grid-cols-1 md:grid-cols-2 gap-6">
      {entertainment.slice(1, 5).map((post, index) => (
        <Link
          key={index}
          href={`/post/${post.title.replace(/[^A-Za-z0-9]+/g, "-")}`}
          passHref
        >
          <div className="bg-white rounded-[18px] overflow-hidden w-full">
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

    {/* Right Side: Sidebar */}
    <div className="space-y-4">
      <h2 className="text-xl font-bold border-b pb-2">More News</h2>
      {entertainment.slice(6, 12).map((post, index) => (
        <Link
          key={index}
          href={`/post/${post.title.replace(/[^A-Za-z0-9]+/g, "-")}`}
          passHref
        >
          <div className="bg-white rounded-[18px] p-3 shadow-sm hover:shadow-md transition my-4">
            <div className="flex items-start gap-3">
              <img
                src={`/articles/${post.imgUrl}`}
                alt={post.title}
                className="w-20 h-20 object-cover rounded-[16px]"
              />
              <div>
                <h3 className="text-sm font-semibold leading-snug">
                  {post.title}
                </h3>
                <p className="text-xs text-gray-500 mt-1"><CreationDate articleNumber={post.articleNumber}/> </p>
              </div>
            </div>
          </div>
        </Link>
      ))}
    </div>
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


