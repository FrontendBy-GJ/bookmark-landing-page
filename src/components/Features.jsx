import React, { useState } from 'react';
import tab1 from '../assets/illustration-features-tab-1.svg';
import tab2 from '../assets/illustration-features-tab-2.svg';
import tab3 from '../assets/illustration-features-tab-3.svg';

export default function Features() {
  const [setTab, setSetTab] = useState(0);

  const toggleTab = (index) => {
    setSetTab(index);
  };

  return (
    <section
      id="features"
      className="mx-auto max-w-[1440px] -scroll-mt-36 overflow-hidden py-40"
    >
      <div className="px-7">
        <div className="prose mx-auto mb-10 max-w-md text-center prose-headings:text-base-200">
          <h2 className="">Features</h2>
          <p className="text-neutral">
            Our aim is to make it quick and easy for you to access your
            favourite websites. Your bookmarks sync between your devices so you
            can access them on the go.
          </p>
        </div>
        <ul className="mx-auto w-full max-w-2xl lg:flex lg:border-b">
          {tabs.map((item, i) => (
            <li
              onClick={() => toggleTab(i)}
              key={i}
              className={`border-neutral/40 lg:w-full lg:border-none ${
                tabs.length - 3 === i
                  ? 'border-t'
                  : tabs.length - 1 === i
                  ? 'border-b'
                  : 'border-t border-b'
              }`}
            >
              <div
                className={`mx-auto w-fit  border-secondary transition-all duration-100 ease-linear lg:w-full ${
                  setTab === i ? 'border-b-4' : ''
                }`}
              >
                <a
                  href={`#${item.toLowerCase()}`}
                  tabIndex={0}
                  className="block cursor-pointer py-5 text-center text-base-200 hover:text-secondary"
                >
                  {item}
                </a>
              </div>
            </li>
          ))}
        </ul>
      </div>

      <div className="hero prose mx-auto max-w-full px-3 prose-headings:text-base-200 lg:relative">
        {panels.map((panel, i) => (
          <Panels
            items={panel}
            key={i}
            className={`${setTab !== i ? 'hidden' : 'flex'}`}
          />
        ))}
      </div>
    </section>
  );
}

function Panels({ items, className }) {
  return (
    <div
      className={`hero-content flex-col lg:flex-row lg:gap-28 lg:px-10 ${className}`}
    >
      <div className="relative mb-10 max-h-full lg:static lg:mb-0">
        <div className="absolute bottom-0 -left-1/4 -z-10 h-3/4 w-screen rounded-r-full bg-primary md:-left-[370px] lg:-left-[600px] xl:-left-[800px] "></div>
        <img src={items.img} className="z-50" />
      </div>
      <div className="max-w-sm text-center lg:text-left">
        <h2>{items.title}</h2>
        <p className="text-neutral">{items.brief}</p>
        <button className="btn hidden bg-primary shadow-md lg:block">
          {items.button}
        </button>
      </div>
    </div>
  );
}

const tabs = ['Simple Bookmarking', 'Speedy Searching', 'Easy Sharing'];

const panels = [
  {
    title: 'Bookmark in one click',
    brief:
      'Organize your bookmarks however you like. Our simple drag-and-drop interface gives you complete control over how you manage your favourite sites.',
    button: 'More Info',
    img: tab1,
  },
  {
    title: 'Intelligent search',
    brief:
      'Our powerful search feature will help you find saved sites in no time at all. No need to trawl through all of your bookmarks.',
    button: 'More Info',
    img: tab2,
  },
  {
    title: 'Share your bookmarks',
    brief:
      'Easily share your bookmarks and collections with others. Create a shareable link that you can send at the click of a button.',
    button: 'More Info',
    img: tab3,
  },
];
