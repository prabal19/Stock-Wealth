'use client';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import React from 'react';

const Breadcrumb = () => {
  const pathname = usePathname();

  const pathSegments = pathname.split('/').filter((seg) => seg && seg !== 'post');

  const generatePath = (index: number) => {
    return '/' + pathSegments.slice(0, index + 1).join('/');
  };

  return (
    <nav
      className="text-sm text-gray-600 py-3 sm:px-6 md:px-8 w-full overflow-x-auto"
      aria-label="breadcrumb"
    >
      <ol className="flex flex-nowrap items-center gap-x-2 text-sm whitespace-nowrap">
        <li className="flex items-center min-w-0">
          <Link
            href="/"
            className="text-blue-600 text-base sm:text-lg md:text-sm hover:underline whitespace-nowrap"
          >
            Home
          </Link>
        </li>
        {pathSegments.map((segment, index) => {
          const isLast = index === pathSegments.length - 1;
          const path = generatePath(index);
          const label = decodeURIComponent(segment).replace(/-/g, ' ');

          return (
            <li key={index} className="flex items-center min-w-0">
              <span className="mx-2 text-gray-400">/</span>
              {isLast ? (
                <span
                  title={label}
                  className="text-black text-sm sm:text-base md:text-sm uppercase truncate overflow-hidden text-ellipsis whitespace-nowrap max-w-[150px] sm:max-w-[250px] md:max-w-[300px]"
                >
                  {label}
                </span>
              ) : (
                <Link
                  href={path}
                  title={label}
                  className="text-blue-600 hover:underline capitalize text-sm sm:text-base truncate overflow-hidden text-ellipsis whitespace-nowrap max-w-[150px] sm:max-w-[250px] md:max-w-[300px]"
                >
                  {label}
                </Link>
              )}
            </li>
          );
        })}
      </ol>
    </nav>
  );
};

export default Breadcrumb;
