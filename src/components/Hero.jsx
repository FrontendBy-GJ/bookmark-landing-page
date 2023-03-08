import React from 'react';
import hero from '../assets/illustration-hero.svg';

export default function Hero() {
  return (
    <div className="hero lg:relative overflow-hidden max-w-[1440px] mx-auto z-0">
      <div className="hero-content flex-col lg:flex-row-reverse text-center lg:text-left">
        <div className="relative mb-10 lg:mb-0 lg:static">
          <div className="h-3/4 lg:h-2/3 bg-primary rounded-l-full absolute bottom-0 -right-16 md:-right-28 lg:right-0 lg:w-2/5 w-full -z-10"></div>
          <img src={hero} alt="" className="z-50" />
        </div>
        <div className="max-w-lg z-50">
          <h1 className="text-4xl font-bold">
            A Simple Bookmark <br className="hidden lg:block" /> Manager
          </h1>
          <p className="py-6 text-neutral">
            A clean and simple interface to organize your favourite websites.
            Open a new browser tab and see your sites load instantly. Try it for
            free.
          </p>
          <div className="space-x-5">
            <button className="btn bg-primary border-none shadow-lg">
              Get it on Chrome
            </button>
            <button className="btn bg-neutral border-none shadow-lg">
              Get it on Firefox
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
