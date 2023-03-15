import React, { useState } from 'react';
import arrow from '../assets/icon-arrow.svg';

export default function FAQ() {
  const [showAnswer, setShowAnswer] = useState(null);

  const toggleAnswer = (i) =>
    showAnswer === i ? setShowAnswer(null) : setShowAnswer(i);

  return (
    <section className="max-w-[1440px] mx-auto grid place-content-center py-40">
      <div className="px-7 prose max-w-lg prose-headings:text-base-200">
        <div className="text-center">
          <h2>Frequently Asked Questions</h2>
          <p className="text-neutral">
            Here are some of our FAQs. If you have any other questions you’d
            like answered please feel free to email us.
          </p>
        </div>
        {faq.map((item, i) => (
          <Dropdown
            faq={item}
            key={i}
            onClick={() => {
              toggleAnswer(i);
            }}
            showAnswer={showAnswer}
            i={i}
          />
        ))}
        <button className="btn bg-primary shadow-md block mx-auto mt-10 px-8">
          More Info
        </button>
      </div>
    </section>
  );
}

function Dropdown({ faq, onClick, showAnswer, i }) {
  return (
    <div className="overflow-hidden border-b border-t lg:border-t-0 py-4">
      <div
        onClick={onClick}
        className="flex items-center cursor-pointer justify-between"
      >
        <h5 className="hover:text-secondary flex-1">{faq.question}</h5>
        <svg
          className={`${
            showAnswer === i ? 'rotate-180 stroke-secondary' : ''
          } transition duration-300 ease-in-out stroke-primary`}
          xmlns="http://www.w3.org/2000/svg"
          width="18"
          height="12"
        >
          <path fill="none" strokeWidth="3" d="M1 1l8 8 8-8" />
        </svg>
      </div>

      <p
        aria-hidden={showAnswer === i ? 'false' : 'true'}
        className={`text-neutral ${showAnswer === i ? 'block' : 'hidden'}`}
      >
        {faq.answer}
      </p>
    </div>
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
