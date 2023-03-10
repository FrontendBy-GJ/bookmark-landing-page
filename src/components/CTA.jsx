import React from 'react';
import chromeLogo from '../assets/logo-chrome.svg';
import firefoxLogo from '../assets/logo-firefox.svg';
import operaLogo from '../assets/logo-opera.svg';
import dots from '../assets/bg-dots.svg';

export default function CTA() {
  return (
    <section className="max-w-[1440px] min-h-screen grid place-content-center py-5 mx-auto">
      <div className="px-7">
        <div className="prose mx-auto text-center mb-10 max-w-lg">
          <h2>Download the extension</h2>
          <p className="text-neutral">
            We’ve got more browsers in the pipeline. Please do let us know if
            you’ve got a favourite you’d like us to prioritize.
          </p>
        </div>
        <div className="flex flex-col lg:flex-row gap-10 max-w-4xl mx-auto lg:gap-4">
          {extensions.map((item, i) =>
            extensions.length - 2 === i ? (
              <Card card={item} key={i} className="lg:mt-10" />
            ) : extensions.length - 1 === i ? (
              <Card card={item} key={i} className="lg:mt-20" />
            ) : (
              <Card card={item} key={i} />
            )
          )}
        </div>
      </div>
    </section>
  );
}

function Card({ card, className }) {
  return (
    <div className={`card bg-base-100 max-h-96 shadow-lg mx-auto ${className}`}>
      <figure className="px-10 pt-10">
        <img src={card.logo} alt={card.alt} className="rounded-xl" />
      </figure>
      <div className="card-body items-center text-center">
        <h4 className="card-title">{card.title}</h4>
        <p className="text-neutral">{card.brief}</p>
        <div className="my-5 -mx-7">
          <img src={dots} alt="divider" />
        </div>
        <div className="card-actions">
          <button tabIndex={0} className="btn bg-primary border-none">
            {card.button}
          </button>
        </div>
      </div>
    </div>
  );
}

const extensions = [
  {
    title: 'Add to Chrome',
    brief: 'Minimum version 62',
    button: 'Add & Install Extension',
    logo: chromeLogo,
    alt: 'chrome browser logo',
  },
  {
    title: 'Add to Firefox',
    brief: 'Minimum version 55',
    button: 'Add & Install Extension',
    logo: firefoxLogo,
    alt: 'firefox browser logo',
  },
  {
    title: 'Add to Opera',
    brief: 'Minimum version 46',
    button: 'Add & Install Extension',
    logo: operaLogo,
    alt: 'opera browser logo',
  },
];
