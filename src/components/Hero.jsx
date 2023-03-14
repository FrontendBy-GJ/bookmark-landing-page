import React from 'react';
import hero from '../assets/illustration-hero.svg';

export default function Hero() {
  return (
    <div className="hero lg:relative overflow-hidden max-w-[1440px] mx-auto z-0 prose prose-headings:text-base-200">
      <div className="hero-content flex-col lg:flex-row-reverse text-center lg:text-left lg:px-10">
        <div className="relative mb-5 lg:mb-0 lg:static">
          <div className="h-3/4 lg:h-2/3 bg-primary rounded-l-full absolute bottom-0 -right-16 md:-right-28 lg:right-0 lg:w-2/5 w-full -z-10"></div>
          <img src={hero} alt="hero image" className="z-50" />
        </div>
        <div className="max-w-lg z-50 px-1">
          <h1>
            A Simple Bookmark <br className="hidden lg:block" /> Manager
          </h1>
          <p className="text-neutral">
            A clean and simple interface to organize your favourite websites.
            Open a new browser tab and see your sites load instantly. Try it for
            free.
          </p>
          <div className="space-x-5 flex">
            <button tabIndex={0} className="btn bg-primary shadow-lg">
              Get it on Chrome
            </button>
            <button
              tabIndex={0}
              className="btn bg-slate-100 text-neutral shadow-lg hover:text-neutral hover:border-neutral"
            >
              Get it on Firefox
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
