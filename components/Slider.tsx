'use client';

import React, { useEffect, useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import { Navigation } from 'swiper/modules';
import Image from 'next/image';
import Link from 'next/link';
import CreationDate from '@/components/Date'; // ← Use your component

const slides = [
  {
    image: '/articles/1048.jpg',
    title: 'A Complete Guide to Choosing the Right Insurance Policy for Your Needs',
    category: 'Finance',
    author: 'Kelly',
    articleNumber:1,
  },
  {
    image: '/articles/moneymorning22.jpg',
    title: 'How Inflation Affects Your Savings and Investments',
    category: 'Markets',
    author: 'John',
    articleNumber:2,
  },
  {
    image: '/articles/1047.jpg',
    title: 'Top 10 Financial Tips for Building Wealth in the US',
    category: 'Money',
    author: 'Sarah',
    articleNumber:3,
  },
];

const Slider = () => {
  const [showNavigation, setShowNavigation] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setShowNavigation(window.innerWidth >= 768);
    };

    handleResize();
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return (
    <div className="max-w-7xl mx-auto">
      <Swiper
        spaceBetween={20}
        slidesPerView={1}
        loop={true}
        navigation={
          showNavigation
            ? {
                nextEl: '.swiper-button-next',
                prevEl: '.swiper-button-prev',
              }
            : false
        }
        modules={[Navigation]}
        autoplay={{ delay: 3000 }}
        className="relative mySwiper h-[40vh] md:h-[70vh] lg:h-[80vh] rounded-[16px]"
      >
        {slides.map((slide, index) => (
          <SwiperSlide key={index} className="relative">
            <Link
              href={`/post/${slide.title.replace(/[^A-Za-z0-9]+/g, '-')}`}
              className="block relative w-full h-full rounded-[16px]"
            >
              <Image
                src={slide.image}
                alt={slide.title}
                width={1920}
                height={1080}
                className="w-full h-full object-cover rounded-[16px]"
                priority
              />
              <div className="absolute inset-0 flex flex-col justify-center text-white font-bold bg-black/40 p-6 md:p-10 lg:p-16 rounded-[16px]">
                <span className="bg-yellow-400 text-black text-sm px-3 py-1 rounded-full mb-4 self-center">
                  {slide.category}
                </span>
                <h2 className="text-center text-2xl md:text-4xl font-bold hover:underline cursor-pointer mb-3">
                  {slide.title}
                </h2>
                <div className="text-sm text-white text-center font-normal flex justify-center items-center gap-2">
                  <span className="text-orange-300 font-medium">{slide.author}</span>
                  <span className="text-white">•</span>
                  <CreationDate articleNumber={slide.articleNumber} />
                </div>
              </div>
            </Link>
          </SwiperSlide>
        ))}

        {showNavigation && (
          <>
            <div className="swiper-button-prev text-white" />
            <div className="swiper-button-next text-white" />
          </>
        )}
      </Swiper>
    </div>
  );
};

export default Slider;
