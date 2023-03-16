import React from 'react';
import hero from '../assets/illustration-hero.svg';

export default function Hero() {
  return (
    <div className="hero prose z-0 mx-auto max-w-[1440px] overflow-hidden prose-headings:text-base-200 lg:relative">
      <div className="hero-content flex-col text-center lg:flex-row-reverse lg:px-10 lg:text-left">
        <div className="relative mb-5 lg:static lg:mb-0">
          <div className="absolute bottom-0 -right-16 -z-10 h-3/4 w-full rounded-l-full bg-primary md:-right-28 lg:right-0 lg:h-2/3 lg:w-2/5"></div>
          <img src={hero} alt="hero image" className="z-50" />
        </div>
        <div className="z-50 max-w-lg px-1">
          <h1>
            A Simple Bookmark <br className="hidden lg:block" /> Manager
          </h1>
          <p className="text-neutral">
            A clean and simple interface to organize your favourite websites.
            Open a new browser tab and see your sites load instantly. Try it for
            free.
          </p>
          <div className="flex justify-center space-x-5 lg:justify-start">
            <button tabIndex={0} className="btn bg-primary shadow-lg">
              Get it on Chrome
            </button>
            <button
              tabIndex={0}
              className="btn bg-slate-100 text-neutral shadow-lg hover:border-neutral hover:text-neutral"
            >
              Get it on Firefox
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
