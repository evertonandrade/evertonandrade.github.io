import React from 'react';

const Footer = () => {
  return (
    <div className="mt-12 lg:mt-9 sm:pb-18 sm:py-6 py-3">
      <div className="max-w-4xl px-4 mx-auto text-gray-800 dark:text-white">
        <div className="pb-8 mb-2 border-t-2 border-gray-300 dark:border-white-300"></div>
        <div className="flex flex-col justify-between lg:flex-row items-center">
          <div className="flex flex-wrap pt-2 sm:space-x-4 space-x-2 font-medium lg:pt-0">
            <a
              href="https://www.twitter.com/evertonfa7"
              className={'transition-colors hover:text-blue-500'}
              target="_blank"
              rel="noreferrer"
            >
              Twitter
            </a>
            <a
              href="https://www.linkedin.com/in/evertonfa7"
              className={'transition-colors hover:text-blue-500'}
              target="_blank"
              rel="noreferrer"
            >
              LinkedIn
            </a>
            <a
              href="https://www.github.com/evertonandrade"
              className={'transition-colors hover:text-blue-500'}
              target="_blank"
              rel="noreferrer"
            >
              GitHub
            </a>
            <a
              href="https://everton.hashnode.dev"
              className={'transition-colors hover:text-blue-500'}
              target="_blank"
              rel="noreferrer"
            >
              Blog
            </a>
          </div>
          <p>😄</p>
        </div>
      </div>
    </div>
  );
};

export default Footer;
