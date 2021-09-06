import React from 'react';
import Image from 'next/image';
import profile from '../public/profile.jpeg';

const About = () => {
  return (
    <section className="container px-4 mx-auto">
      <div className="lg:space-x-5 lg:flex lg:flex-row item-center lg:-mx-4 flex flex-col-reverse text-center lg:text-left">
        <article className="lg:px-4 lg:mt-12 ">
          <h1 className="text-3xl font-bold text-gray-900 lg:text-7xl dark:text-white">
            Hi! <br />
            Call me Everton.
          </h1>
          <div className="mt-6 text-gray-800 dark:text-white">
            <p className="mb-4">
              I'm a web developer, computer science studant and free software enthusiast
            </p>
          </div>
        </article>
        <div className="flex-shrink-0 lg:mt-12 lg:px-4 mb-10">
          <Image
            src={profile}
            alt="Profile"
            priority={true}
            className="rounded-full"
            width={250}
            height={250}
            placeholder="blur"
          />
        </div>
      </div>
    </section>
  );
};

export default About;
