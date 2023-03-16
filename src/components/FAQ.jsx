import React, { useRef, useState } from 'react';

export default function FAQ() {
  const [currentIndex, setCurrentIndex] = useState('0');

  function handleToggle(index) {
    currentIndex === index ? setCurrentIndex('0') : setCurrentIndex(index);
  }

  return (
    <section className="mx-auto grid max-w-[1440px] place-content-center py-40">
      <div className="prose max-w-lg px-7 prose-headings:text-base-200">
        <div className="text-center">
          <h2>Frequently Asked Questions</h2>
          <p className="text-neutral">
            Here are some of our FAQs. If you have any other questions you’d
            like answered please feel free to email us.
          </p>
        </div>
        <ul className="mt-12 min-w-[330px] p-0">
          {faq.map((item, i) => (
            <Dropdown
              key={i}
              faq={item}
              onClick={() => handleToggle(i)}
              active={currentIndex === i}
            />
          ))}
        </ul>
        <button className="btn mx-auto mt-10 block bg-primary px-8 shadow-md">
          More Info
        </button>
      </div>
    </section>
  );
}

function Dropdown({ faq, onClick, active }) {
  const { question, answer } = faq;

  const contentEl = useRef();

  return (
    <li className="list-none border-b">
      <button
        tabIndex={0}
        onClick={onClick}
        className="flex w-full flex-nowrap items-center justify-between text-base-200 hover:text-secondary"
      >
        {question}
        <svg
          className={`${
            active ? 'rotate-180 stroke-secondary' : ''
          } ease stroke-primary transition duration-300`}
          xmlns="http://www.w3.org/2000/svg"
          width="18"
          height="12"
        >
          <path fill="none" strokeWidth="3" d="M1 1l8 8 8-8" />
        </svg>
      </button>
      <div
        ref={contentEl}
        className="ease overflow-hidden transition-all duration-300"
        style={
          active ? { height: contentEl.current.scrollHeight } : { height: '0' }
        }
      >
        <p
          aria-hidden={active ? 'false' : 'true'}
          className={`ease text-neutral transition duration-700 ${
            active ? 'opacity-100' : 'opacity-0'
          }`}
        >
          {answer}
        </p>
      </div>
    </li>
  );
}

const faq = [
  {
    question: 'What is Bookmark?',
    answer:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce tincidunt justo eget ultricies fringilla. Phasellus blandit ipsum quis quam ornare mattis.',
  },
  {
    question: 'How can I request a new browser?',
    answer:
      'Vivamus luctus eros aliquet convallis ultricies. Mauris augue massa, ultricies non ligula. Suspendisse imperdiet. Vivamus luctus eros aliquet convallis ultricies. Mauris augue massa, ultricies non ligula. Suspendisse imperdie tVivamus luctus eros aliquet convallis ultricies. Mauris augue massa, ultricies non ligula. Suspendisse imperdiet.',
  },
  {
    question: 'Is there a mobile app?',
    answer:
      'Sed consectetur quam id neque fermentum accumsan. Praesent luctus vestibulum dolor, ut condimentum urna vulputate eget. Cras in ligula quis est pharetra mattis sit amet pharetra purus. Sed sollicitudin ex et ultricies bibendum.',
  },
  {
    question: 'What about other Chromium browsers?',
    answer:
      'Integer condimentum ipsum id imperdiet finibus. Vivamus in placerat mi, at euismod dui. Aliquam vitae neque eget nisl gravida pellentesque non ut velit.',
  },
];
