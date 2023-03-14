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
      className="py-40 max-w-[1440px] mx-auto overflow-hidden -scroll-mt-36"
    >
      <div className="px-7">
        <div className="text-center prose mb-10 max-w-md mx-auto prose-headings:text-base-200">
          <h2 className="">Features</h2>
          <p className="text-neutral">
            Our aim is to make it quick and easy for you to access your
            favourite websites. Your bookmarks sync between your devices so you
            can access them on the go.
          </p>
        </div>
        <ul className="w-full max-w-2xl lg:flex lg:border-b mx-auto">
          {tabs.map((item, i) => (
            <li
              onClick={() => toggleTab(i)}
              key={i}
              className={`border-neutral/40 lg:border-none lg:w-full ${
                tabs.length - 3 === i
                  ? 'border-t'
                  : tabs.length - 1 === i
                  ? 'border-b'
                  : 'border-t border-b'
              }`}
            >
              <div
                className={`w-fit lg:w-full  border-secondary mx-auto transition-all duration-100 ease-linear ${
                  setTab === i ? 'border-b-4' : ''
                }`}
              >
                <a
                  href={`#${item.toLowerCase()}`}
                  tabIndex={0}
                  className="block text-center text-base-200 py-5 cursor-pointer hover:text-secondary"
                >
                  {item}
                </a>
              </div>
            </li>
          ))}
        </ul>
      </div>

      <div className="lg:relative hero prose mx-auto max-w-full px-3 prose-headings:text-base-200">
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
      className={`hero-content flex-col lg:flex-row lg:px-10 lg:gap-28 ${className}`}
    >
      <div className="relative mb-10 lg:mb-0 lg:static max-h-full">
        <div className="h-3/4 bg-primary rounded-r-full absolute bottom-0 -left-1/4 md:-left-[370px] lg:-left-[600px] xl:-left-[800px] w-screen -z-10 "></div>
        <img src={items.img} className="z-50" />
      </div>
      <div className="text-center lg:text-left max-w-sm">
        <h2>{items.title}</h2>
        <p className="text-neutral">{items.brief}</p>
        <button className="btn bg-primary shadow-md hidden lg:block">
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
