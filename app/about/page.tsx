import React from 'react'
import Outbrain from '@/components/ads/outbrain';

import { Metadata } from "next";

export const metadata: Metadata = {
  title: 'About',
  description: 'Learn more about Stock Wealth and what we do.',
  keywords: ['Stock Market', 'Smart Investment', 'Market Pulse', 'Wealth Mindset', 'Stock Reviews'],
};

const About = () => {
  return (
    <>
      <div className="bg-gray-50 text-gray-800 min-h-screen">
        {/* Header */}
        <header className="bg-gray-900 text-white py-10 text-center">
          <h1 className="text-4xl mt-14 font-bold">About Stock Wealth</h1>
          <p className="text-md mt-2 text-gray-300">
            Your trusted partner in building wealth through strategic stock investing and mindset development.
          </p>
        </header>

        <aside className="max-w-7xl mt-30 mx-auto">
          <div className="OUTBRAIN outbrain-desktop" data-widget-id="AR_2"></div>
          <div className="OUTBRAIN outbrain-mobile" data-widget-id="CRMB_2"></div>
        </aside>

        <div className="OUTBRAIN outbrain-desktop" data-widget-id="SB_1"></div>

        {/* Main Content */}
        <main className="max-w-5xl mx-auto px-4 py-12 space-y-12">
          {/* Who We Are */}
          <section>
            <h2 className="text-2xl font-semibold mb-4">Who We Are</h2>
            <p className="text-gray-600 text-md leading-relaxed">
              Stock Wealth is a digital platform dedicated to empowering individuals with the tools, knowledge, and mindset needed to thrive in the world of investing. Our team of financial analysts, traders, and educators is passionate about guiding you on your wealth-building journey.
            </p>
            <p className="text-gray-600 text-md leading-relaxed mt-4">
              Whether you&apos;re a beginner or a seasoned investor, we aim to simplify stock investing and help you stay ahead in today&rsquo;s dynamic markets.
            </p>
          </section>

          {/* Our Mission */}
          <section>
            <h2 className="text-2xl font-semibold mb-4">Our Mission</h2>
            <p className="text-gray-600 text-md leading-relaxed">
              Our mission at Stock Wealth is to educate, inspire, and support individuals on their path to financial freedom. We break down complex market trends, demystify stock strategies, and promote a long-term wealth mindset to help you invest smarter.
            </p>
            <p className="text-gray-600 text-md leading-relaxed mt-4">
              We value transparency, integrity, and actionable insights &mdash; every article, review, and analysis is created with these principles in mind.
            </p>
          </section>

          {/* What We Cover */}
          <section>
            <h2 className="text-2xl font-semibold mb-4">What We Cover</h2>
            <ul className="list-disc list-inside text-md text-gray-600 space-y-2">
              <li><strong>Market Pulse:</strong> Timely updates and insights into stock market movements, economic events, and sentiment trends.</li>
              <li><strong>Smart Investment:</strong> Strategies, stock picks, and portfolio guidance designed to help you grow and protect your wealth.</li>
              <li><strong>Wealth Mindset:</strong> Practical advice and mindset shifts to cultivate patience, discipline, and confidence in your financial journey.</li>
              <li><strong>Stock Reviews:</strong> Deep-dives and evaluations of trending stocks, value plays, and long-term growth opportunities.</li>
            </ul>
          </section>

          {/* Editorial Approach */}
          <section>
            <h2 className="text-2xl font-semibold mb-4">Our Editorial Approach</h2>
            <p className="text-gray-600 text-md leading-relaxed">
              At Stock Wealth, we uphold rigorous editorial standards. Our content is thoroughly researched and based on credible sources, technical analysis, and fundamental data.
            </p>
            <p className="text-gray-600 text-md leading-relaxed mt-4">
              We avoid hype and clickbait &mdash; our focus is delivering clear, educational, and empowering content you can trust.
            </p>
          </section>

          {/* Our Readers */}
          <section>
            <h2 className="text-2xl font-semibold mb-4">Who Reads Stock Wealth?</h2>
            <p className="text-gray-600 text-md leading-relaxed">
              Our readers range from new investors and students to experienced traders and financial advisors. Whether you&apos;re looking to understand the market, build your first portfolio, or optimize your strategy, Stock Wealth is here to support your success.
            </p>
          </section>
        </main>
      </div>

      <aside className="max-w-7xl mt-30 mx-auto">
        <div className="OUTBRAIN outbrain-desktop" data-widget-id="AR_1"></div>
        <div className="OUTBRAIN outbrain-mobile" data-widget-id="CRMB_1"></div>
      </aside>

      <Outbrain />
    </>
  );
};

export default About;
