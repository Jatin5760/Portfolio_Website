import React, { useState } from 'react';

const quotes = [
  "Believe in yourself and all that you are.",
  "Success is not final, failure is not fatal.",
  "Dream big and dare to fail.",
  "Do something today that your future self will thank you for.",
  "Great things never come from comfort zones.",
  "Push yourself, because no one else is going to do it for you.",
];

const QuoteCard = () => {
  const [quote, setQuote] = useState(quotes[0]);

  const generateQuote = () => {
    const randomIndex = Math.floor(Math.random() * quotes.length);
    setQuote(quotes[randomIndex]);
  };

  return (
    <div className="max-w-md mx-auto mt-20 bg-white shadow-2xl rounded-2xl p-6 text-center transition-all duration-300 hover:scale-105">
      <h2 className="text-2xl font-bold text-gray-800 mb-4">Motivational Quote</h2>
      <p className="text-gray-600 italic mb-6">"{quote}"</p>
      <button
        onClick={generateQuote}
        className="bg-indigo-600 text-white px-4 py-2 rounded-full hover:bg-indigo-700 transition"
      >
        New Quote
      </button>
    </div>
  );
};

export default QuoteCard;
