'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import Post2 from './Post2';
import CreationDate from './Date';
import Breadcrumb from './Breadcrumb';
import Outbrain from './ads/outbrain';

interface PostType {
  title: string;
  imgUrl: string;
  contents: string[];
  articleNumber: number;
}

interface PostListingPageProps {
  pageTitle: string;
  posts: PostType[];
}

const Navlist: React.FC<PostListingPageProps> = ({ pageTitle, posts }) => {
  const DEFAULT_FEATURED_RANGE: [number, number] = [5, 7];
  const DEFAULT_VISIBLE_COUNT = 12;

  const [visiblePosts, setVisiblePosts] = useState(DEFAULT_VISIBLE_COUNT);

  const loadMore = () => {
    setVisiblePosts((prev) => prev + DEFAULT_VISIBLE_COUNT);
  };

  const featuredPosts = posts.slice(...DEFAULT_FEATURED_RANGE);
  const regularPosts = posts.slice(0, visiblePosts);

  return (
    <div className="bg-white">
      <div className="mt-20 pt-8 text-black text-center flex flex-col justify-center">
        <div className="max-w-7xl text-black px-6 lg:px-28">
          <Breadcrumb />
        </div>

        <div className="max-w-7xl mx-auto text-left lg:p-4">
          <div className="flex justify-between mb-4 items-center sm:px-4 lg:px-0 px-6">
            <Link href={`/${pageTitle.toLowerCase()}`}>
              <span className="uppercase text-xl sm:text-3xl md:text-5xl hover:underline hover:text-blue-700 cursor-pointer text-black font-bold">
                {pageTitle}
              </span>
            </Link>
          </div>

          {/* Featured Section */}
          <div className="bg-white mt-8">
            <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-2 w-full gap-4">
              {featuredPosts.map((post, index) => (
                <Link
                  key={index}
                  href={`/post/${post.title.replace(/[^A-Za-z0-9]+/g, "-")}`}
                  passHref
                >
                  <div className="bg-white">
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

          {/* Regular Posts */}
          <div className="grid mt-6 grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-6 justify-items-center w-full mx-auto">
            {regularPosts.map((post, index) => (
              <Link
                key={index}
                href={`/post/${post.title.replace(/[^A-Za-z0-9]+/g, "-")}`}
                passHref
                className="bg-white p-4 lg:p-0"
              >
                <Image
                  src={`/articles/${post.imgUrl}`}
                  width={1000}
                  height={1000}
                  alt={post.title}
                  className="h-[250px] xl:h-[200px] object-cover transition-transform duration-300 ease-in-out hover:scale-105 hover:brightness-110"
                />
                <h2 className="mt-3 text-xl text-left font-bold text-black">{post.title}</h2>
                <p className="text-gray-500 text-left text-sm p-2">
                  <CreationDate articleNumber={post.articleNumber} />
                </p>
              </Link>
            ))}
          </div>

          {/* Load More Button */}
          {visiblePosts < posts.length && (
            <div className="flex justify-center mt-10">
              <button
                onClick={loadMore}
                className="bg-blue-500 cursor-pointer hover:bg-blue-600 text-white px-6 py-2 rounded-md transition duration-300"
              >
                Load More
              </button>
            </div>
          )}
        </div>
      </div>

       <aside className="max-w-7xl mt-30 mx-auto">
        <div className="OUTBRAIN outbrain-desktop" data-widget-id="AR_1"></div>
        <div className="OUTBRAIN outbrain-mobile" data-widget-id="CRMB_1"></div>
      </aside>

      <Outbrain />
    </div>
  );
};

export default Navlist;
