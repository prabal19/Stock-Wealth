import allArticles from "@/constants/all";
import Image from "next/image";
import Link from "next/link";
import CreationDate from "@/components/Date";
import { Metadata } from "next";


import Outbrain from "@/components/ads/outbrain";


// Format author name to URL-safe slug
const formatName = (name: string) =>
  name.toLowerCase().replace(/[^a-z0-9]+/g, "-");

// Generate static paths for all authors
export async function generateStaticParams() {
  const uniqueAuthors = Array.from(
    new Set(allArticles.map((article) => formatName(article.authorName)))
  );

  return uniqueAuthors.map((authorName) => ({ authorName }));
}

export async function generateMetadata({ params }: { params: Promise<{ authorName: string }> }): Promise<Metadata> {
  const { authorName } = await params;

  const author = allArticles.find(
    (article) => formatName(article.authorName) === authorName
  );

  return {
    title: author ? `Articles by ${author.authorName}` : 'Author Not Found',
  };
}

const AuthorPage = async ({ params }: { params: Promise<{ authorName: string }> }) => {
  const { authorName } = await params;

  const authorArticles = allArticles.filter(
    (article) => formatName(article.authorName) === authorName
  );

  if (authorArticles.length === 0) {
    return (
      <div className="mt-20 text-center text-3xl font-bold text-gray-800">
        Author Not Found
      </div>
    );
  }

  const author = authorArticles[0];
  return (
    <>
      <div className="px-6 md:px-10 lg:px-16 xl:px-24 mt-30">
        {/* Author Info Section */}
        <div className="max-w-4xl mx-auto bg-white/80 backdrop-blur-md border border-gray-200 rounded-3xl p-8 mb-12">
          <div className="flex flex-col sm:flex-row items-center gap-6">
            <Image
              src={`/authors/${author.authorName}.jpg`}
              alt={author.authorName}
              width={120}
              height={120}
              className="rounded-full shadow-md object-cover size-28"
            />
            <div>
              <h1 className="text-4xl font-extrabold text-gray-800 mb-2">
                {author.authorName}
              </h1>
              <p className="text-md text-gray-700 leading-relaxed">
                With a passion for storytelling and a deep understanding of the
                subject, the author brings insightful, engaging content to life.
                Their writing blends clarity with creativity, making complex
                topics approachable. Always curious, always learning — they aim
                to inspire and inform with every article.
              </p>
            </div>
          </div>
        </div>

        {/* Articles List */}
        <h2 className="text-xl sm:text-3xl md:text-5xl hover:underline hover:text-blue-700 cursor-pointer text-black font-bold">
          Articles by {author.authorName}
        </h2>

        <div className="grid grid-cols-1 mt-6 md:grid-cols-2 xl:grid-cols-3 gap-8">
          {authorArticles.map((post, index) => (
            <Link
              key={index}
              href={`/post/${post.title.replace(/[^A-Za-z0-9]+/g, "-")}`}
            >
              <Image
                src={`/articles/${post.imgUrl}`}
                width={1000}
                height={1000}
                alt={post.title}
                className="h-[250px] xl:h-[200px] w-full rounded-xl shadow-md object-cover transition-transform duration-300 ease-in-out hover:scale-105 hover:brightness-110"
              />
              <h2 className="mt-3 text-xl text-left font-bold text-black">
                {post.title}
              </h2>
              <p className="text-gray-500 mt-2 text-sm">
                <CreationDate articleNumber={post.articleNumber} />
              </p>
            </Link>
          ))}
        </div>
      </div>

       <aside className="max-w-7xl mt-30 mx-auto">
        <div className="OUTBRAIN outbrain-desktop" data-widget-id="AR_1"></div>
        <div className="OUTBRAIN outbrain-mobile" data-widget-id="CRMB_1"></div>
      </aside>

      <Outbrain />
      
    </>
  );
};

export default AuthorPage;
