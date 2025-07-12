'use client';

import React, { useEffect, useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import { Navigation } from 'swiper/modules';
import Image from 'next/image';
import Link from 'next/link';

const slides = [
  {
    image: '/articles/1048.jpg',
    title: 'A Complete Guide to Choosing the Right Insurance Policy for Your Needs',
  },
  {
    image: '/articles/moneymorning22.jpg',
    title: 'How Inflation Affects Your Savings and Investments',
  },
  {
    image: '/articles/1047.jpg',
    title: 'Top 10 Financial Tips for Building Wealth in the US',
  },
];

const Slider = () => {
  const [showNavigation, setShowNavigation] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setShowNavigation(window.innerWidth >= 768); // md breakpoint
    };

    handleResize(); // Run once on mount
    window.addEventListener('resize', handleResize); // Re-run on resize
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return (
    <div className=" max-w-7xl mx-auto">
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
        preventClicks={false}
        preventClicksPropagation={false}
        touchStartPreventDefault={false}
        simulateTouch={true}
        className="relative mySwiper h-[40vh]  md:h-[70vh] lg:h-[80vh]" // 👈 Adjusted height here
      >
        {slides.map((slide, index) => (
          <SwiperSlide key={index} className="relative">
            <Link
              href={
                index === 0
                  ? '/post/A-Complete-Guide-to-Choosing-the-Right-Insurance-Policy-for-Your-Needs'
                  : index === 1
                  ? '/post/How-Inflation-Affects-Your-Savings-and-Investments'
                  : '/post/Top-10-Financial-Tips-for-Building-Wealth-in-the-US'
              }
              className="block relative w-full h-full"
            >
              <Image
                src={slide.image}
                alt={slide.title}
                width={1920}
                height={1080}
                className="w-full h-full object-cover"
                priority
              />
              <div className="absolute inset-0 flex flex-col justify-center pb-20   sm:px-44 lg:px-40 items-center text-white font-bold p-4 bg-black/40">
                <h2 className="text-2xl sm:text-3xl md:text-2xl lg:text-4xl font-semibold text-center">
                  {slide.title}
                </h2>
              </div>
            </Link>
          </SwiperSlide>
        ))}

        {/* Navigation Arrows */}
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
