import React from 'react';
import Image from 'next/image';
import CreationDate from './Date';

interface PostProps {
  pimg: string;
  pheading: string;
  pcontent: string[];
  articleNumber: number
}


const truncateWords = (text: string, wordLimit: number): string => {
  const words = text.trim().split(/\s+/);
  if (words.length <= wordLimit) return text;
  return words.slice(0, wordLimit).join(' ') + '...';
};


const Post2: React.FC<PostProps> = ({ pimg, pheading , articleNumber}) => {
 
  
  return (
    <div className=" w-full ">
      
        <div className="bg-white px-6  w-full">
          <Image
            src={pimg}
            className="h-[400px]  sm:h-[300px] md:h-[250px] xl:h-[300px]  object-cover rounded-[18px] hover:scale-105 transition-transform duration-300 ease-in-out"
            width={1000}
            height={1000}
            alt="Post Image"
            
            title="Post"
          />
          <h4 className="mt-3 text-xl sm:text-2xl lg:text-xl  text-left text-black   font-bold title-font mb-4">
          {truncateWords(pheading, 15)}
          </h4>
          <p className="text-gray-500 text-left text-sm"> <CreationDate articleNumber={articleNumber}/></p>
        </div>
      
    </div>
  );
};

export default Post2;

 