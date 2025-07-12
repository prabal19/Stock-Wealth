
import Image from "next/image";
import Posts from "@/components/Posts";
import Link from "next/link";
import allArticles from "@/constants/all";
import CreationDate from "@/components/Date";
import Breadcrumb from '@/components/Breadcrumb';
import Newsletter from "@/components/Newsletter";
import React from "react";
import Outbrain from "@/components/ads/outbrain";


const formatTitle = (title: string) => title.replace(/[^A-Za-z0-9]+/g, "-");

export function generateStaticParams(): { articleTitle: string }[] {
  return allArticles.map(({ title }) => ({
    articleTitle: formatTitle(title),
  }));
}

// Metadata generation function, synchronously
export async function generateMetadata({
  params,
}: {
  params: Promise<{ articleTitle: string }>;
}) {
  const { articleTitle } = await params;
  const article = allArticles.find(
    ({ title }) => formatTitle(title) === articleTitle
  );
 
  if (!article) {
    return {
      title: "Article Not Found",
      description: "No article found for the given title",
    };
  }
 
  const description = article.contents.at(-1) || "";
 
  return {
    title: article.title,
    description,
    openGraph: {
      url: `/${articleTitle}`,
      title: article.title,
      description,
      images: [`/article/${article.imgUrl}`],
    },
    twitter: {
      card: "summary_large_image",
      title: article.title,
      description,
      images: [`/article/${article.imgUrl}`],
    },
  };
}

const PostPage = async ({
  params,
}: {
  params: Promise<{ articleTitle: string }>;
}) => {
  const { articleTitle } = await params;
  const article = allArticles.find(
    ({ title }) => formatTitle(title) === articleTitle
  );

  if (!article) return <h1>Post not found</h1>;

  let headingCount = 0;

  

  return (
    <div className="bg-white">
      <div className="mt-20 flex flex-col lg:flex-row gap-10 px-6 md:px-10 lg:px-16 xl:px-24">
{/* Main Article Section */}
<div className="flex-1 mt-4">
  <div className="max-w-7xl text-black mb-4">
    <Breadcrumb />
  </div>

  {/* Category Badge */}
  <span className="inline-block bg-yellow-400 text-black text-sm font-semibold px-3 py-1 rounded-full mb-4">
    {article.category}
  </span>

  {/* Article Title */}
  <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-black mb-6 leading-tight">
    {article.title}
  </h1>

  {/* Author Info + Date + Read Time */}
  <div className="flex flex-col sm:flex-row items-start sm:items-center gap-3 sm:gap-6 mb-6">
    <div className="text-gray-800 w-full flex flex-col lg:flex-row items-start lg:items-center justify-between gap-3">
      
      {/* Author Profile */}
      <div className="flex items-center gap-2">
        <Image
          src={`/authors/${article.authorName}.jpg`}
          alt={article.authorName}
          width={50}
          height={50}
          className="rounded-full object-cover size-12"
        />
        <Link href={`/authors/${article.authorName.replace(/[^A-Za-z0-9]+/g, "-").toLowerCase()}`}>
          <p className="text-lg font-medium hover:text-blue-600">{article.authorName}</p>
        </Link>
      </div>

      {/* Date and Read Time */}
      <div className="w-full flex justify-between items-center lg:w-auto gap-4 text-sm text-gray-500">
        <CreationDate articleNumber={article.articleNumber} />
        <span>•</span>
        <p>{article.readTime}</p>
      </div>
    </div>
  </div>

  {/* Main Featured Image */}
  <Image
    src={`/articles/${article.imgUrl}`}
    width={1200}
    height={800}
    alt={article.title}
    className="w-full rounded-xl object-cover max-w-5xl mx-auto mb-8"
  />

  {/* Main Article Content Section (unchanged logic) */}
  <div className="text-black/85 tracking-normal mx-auto text-lg leading-relaxed space-y-4 max-w-3xl">
    {article.contents.map((content, index) => {
      const isHeading = content.includes("***");
      if (isHeading) headingCount++;

      return (
        <React.Fragment key={index}>
          {/* Trending Around the Web after 3rd heading */}
          {headingCount === 3 && isHeading && (
            <div className="mt-12 mb-10 p-6 rounded-xl bg-white shadow-sm">
              <h3 className="text-2xl font-bold text-black mb-4">Trending Around the Web</h3>
              <div className="flex flex-col divide-y divide-gray-200">
                {allArticles
                  .filter((post) => post.category === article.category && post.title !== article.title)
                  .slice(0, 4)
                  .map((item, idx) => (
                    <Link
                      key={idx}
                      href={`/post/${item.title.replace(/[^A-Za-z0-9]+/g, "-")}`}
                      className="hover:bg-blue-50 rounded-lg px-3 py-4 transition"
                    >
                      <p className="text-md font-semibold text-black">{item.title}</p>
                    </Link>
                  ))}
              </div>
            </div>
          )}

          {/* Discover More after 5th heading */}
          {headingCount === 4 && isHeading && (
            <div className="mt-12 mb-10 p-5 rounded-xl bg-blue-50">
              <h3 className="text-xl font-semibold text-blue-900 mb-4">
                💡 Discover More from {article.category}
              </h3>
              <div className="flex flex-col sm:flex-row items-center gap-4">
                {allArticles
                  .filter((post) => post.category === article.category && post.title !== article.title)
                  .slice(4, 5)
                  .map((item, index) => (
                    <Link
                      key={index}
                      href={`/post/${item.title.replace(/[^A-Za-z0-9]+/g, "-")}`}
                      className="flex items-center gap-4 w-full hover:bg-blue-100 transition rounded-lg p-2"
                    >
                      <Image
                        src={`/articles/${item.imgUrl}`}
                        alt={item.title}
                        width={100}
                        height={80}
                        className="rounded-md object-cover w-[100px] h-[80px] shrink-0"
                      />
                      <div className="text-left">
                        <p className="text-sm uppercase text-blue-600 font-medium mb-1">
                          {item.category}
                        </p>
                        <p className="text-base text-gray-800 font-semibold">
                          {item.title}
                        </p>
                      </div>
                    </Link>
                  ))}
              </div>
            </div>
          )}

          {/* Render paragraphs and headings */}
          {/\.(jpg)$/i.test(content) ? (
            <Image
              width={600}
              height={400}
              src={`/articles/${content}`}
              alt="Image"
              className="mt-4 w-full rounded-lg"
            />
          ) : isHeading ? (
            <strong className="block text-2xl sm:text-3xl mt-8">
              {content.replace(/\*\*\*/g, "")}
            </strong>
          ) : (
            <p>{content}</p>
          )}
        </React.Fragment>
      );
    })}
  </div>
</div>

   <aside className="w-full lg:w-[320px] shrink-0 mt-20">
    <h2 className="text-black font-bold text-2xl lg:text-3xl mb-6">
      Trending Now
    </h2>

    <div className="flex flex-col gap-5">
      {allArticles
        .filter(
          (post) =>
            post.section === article.section &&
            post.title !== article.title
        )
        .slice(0, 6)
        .map((post, index) => (
          <Link
            key={index}
            href={`/post/${post.title.replace(/[^A-Za-z0-9]+/g, "-")}`}
            className="group flex items-center gap-4 bg-white border border-gray-200 rounded-xl p-3 hover:shadow-md transition"
          >
            <div className="relative w-[100px] h-[75px] shrink-0">
              <Image
                src={`/articles/${post.imgUrl}`}
                alt={post.title}
                fill
                className="object-cover rounded-md group-hover:scale-105 transition-transform duration-300"
              />
            </div>
            <div className="flex-1">
              <p className="text-xs uppercase text-blue-600 font-semibold mb-1">
                {post.section}
              </p>
              <p className="text-base text-gray-900 font-semibold group-hover:text-blue-700 transition">
                {post.title}
              </p>
            </div>
          </Link>
        ))}
    </div>
  </aside>


        
      </div>

      <Newsletter/>

      <div className="max-w-3xl lg:mx-48 mx-auto mt-16 bg-white/80 backdrop-blur-md border border-gray-200 rounded-2xl p-10 shadow-2xl">
  <h2 className="text-4xl font-bold text-gray-900 mb-8 relative">
    Meet the Author
    <span className="absolute left-0 -bottom-2 w-12 h-1 bg-gradient-to-r bg-blue-600 rounded-full"></span>
  </h2>
  <div className="flex flex-col sm:flex-row items-start sm:items-center gap-8">
    <Image
      src={`/authors/${article.authorName}.jpg`}
      alt={article.authorName}
      width={120}
      height={120}
      className="rounded-xl  object-cover shadow-md border-2 border-purple-300"
    />
    <div className="text-gray-700 max-w-xl">
      <h3 className="text-2xl font-semibold text-black hover:text-blue-600 hover:cursor-pointer  mb-2">
        {article.authorName}
      </h3>
      <p className="text-base mb-4 leading-relaxed text-gray-600">
        {`Bringing words to life, ${article.authorName} crafts compelling narratives that inform, inspire, and ignite curiosity. Their work is a blend of depth, clarity, and creativity.`}
      </p>
      <Link
        href={`/authors/${article.authorName
          .replace(/[^A-Za-z0-9]+/g, "-")
          .toLowerCase()}`}
        className="inline-flex items-center gap-2 text-white hover:bg-blue-700 bg-blue-600 px-5 py-2.5
         rounded-lg text-sm font-medium shadow hover:brightness-110 transition"
      >
        Read Full Bio
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-4 w-4"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
        </svg>
      </Link>
    </div>
  </div>
</div>


      <div className=" mt-20">
          <h2 className="text-black ml-10 lg:ml-20 hover:text-blue-700 hover:cursor-pointer 
          text-left font-bold tracking-wide text-3xl sm:text-4xl lg:text-5xl mb-8">
            You Might Also Like
          </h2>
          <div className="grid lg:ml-20 grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-6 justify-items-center max-w-7xl mx-auto ">
            {allArticles
              .filter(
                (post) =>
                  post.category === article.category &&
                  post.title !== article.title
              )
              .slice(15, 19)
              .map((post, index) => (
                <Link
                  key={index}
                  href={`/post/${post.title.replace(/[^A-Za-z0-9]+/g, "-")}`}
                  passHref
                >
                  <div className="bg-grey-200  w-[330px]">
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

        

      {/* Related Posts: for small screens (below article) */}
      {/* <div className="block lg:hidden mt-20 px-6 md:px-10">
        <h2 className="text-black text-center font-bold tracking-wide text-3xl sm:text-4xl mb-8">
          Related Stories
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 justify-items-center">
          {allArticles
            .filter(
              (post) =>
                post.section === article.section &&
                post.title !== article.title
            )
            .slice(0, 4)
            .map((post, index) => (
              <Link
                key={index}
                href={`/post/${post.title.replace(/[^A-Za-z0-9]+/g, "-")}`}
                passHref
              >
                <div className="bg-grey-200 w-[330px]">
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
      </div> */}

      <aside className="max-w-7xl mt-30 mx-auto">
        <div className="OUTBRAIN outbrain-desktop" data-widget-id="AR_1"></div>
        <div className="OUTBRAIN outbrain-mobile" data-widget-id="CRMB_1"></div>
      </aside>

      <Outbrain />
     
    </div>
  );
};

export default PostPage;
