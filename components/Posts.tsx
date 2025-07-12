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


const Posts: React.FC<PostProps> = ({ pimg, pheading , articleNumber}) => {
 
  
  return (
    <div className=" flex justify-center md:justify-around items-center  sm:px-0 md:px-4 py-2">
      
        <div className="bg-white rounded-md w-full md:w-auto">
          <Image
            src={pimg}
            className="h-[400px] w-auto sm:h-[300px] md:h-[250px] xl:h-[300px]  object-cover transition-transform duration-300 ease-in-out
                    hover:scale-105 hover:brightness-110 rounded-[12px]"
            width={1000}
            height={1000}
            alt="Post Image"
            
            title="Post"
          />
          <h4 className="mt-3 text-xl sm:text-2xl lg:text-xl  text-left text-black   font-bold title-font mb-4">
          {truncateWords(pheading, 7)}
          </h4>
          <p className="text-gray-500 text-left text-sm"> <CreationDate articleNumber={articleNumber}/></p>
        </div>
      
    </div>
  );
};

export default Posts;

 