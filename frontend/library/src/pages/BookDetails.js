import React from 'react';

const tagClasses = 'px-3 py-1 bg-zinc-900 text-yellow-100 rounded-full';

const BookTag = ({ text }) => {
  return <span className={tagClasses}>{text}</span>;
};

const BookDetails = () => {
  return (
    <div className="flex flex-col md:flex-row items-start z-10  mt-4 p-4">
      <div className="flex flex-col items-center md:items-start md:w-1/4">
        <img src="https://placehold.co/200x300" alt="Book Cover" className="w-48 h-auto mb-4" />
        <button className="flex items-center bg-zinc-700 text-zinc-200 px-4 py-2 rounded-lg">
          <span>Add to Library</span>
          <span className="ml-2">+</span>
        </button>
      </div>
      <div className="md:w-3/4 md:pl-8">
        <h1 className="text-2xl text-yellow-100 font-bold mb-2">The Love Hypothesis</h1>
        <p className="text-zinc-100 mb-4">The Tiktok sensation and romcom of the year!</p>
        <p className="text-lg font-semibold text-zinc-300 mb-2">Ali Hazelwood</p>
        <p className="text-blue-200 mb-4 cursor-pointer">More by Author</p>
        <div className="flex flex-wrap gap-2 mb-4">
          <BookTag text="Fiction / Romance / Romantic Comedy" />
          <BookTag text="Family & Relationships / Love & Romance" />
          <BookTag text="Fiction / Romance / General" />
          <BookTag text="Fiction / Romance / Erotic" />
          <BookTag text="Fiction / Romance / Science Fiction" />
          <BookTag text="Fiction / Romance / New Adult" />
          <BookTag text="Fiction / Romance / Workplace" />
          <BookTag text="Fiction / Romance / Medical" />
          <BookTag text="Fiction / Romance / Contemporary" />
          <BookTag text="Fiction / Science Fiction / Humorous" />
        </div>
        <p className="mb-4 text-zinc-100" >Based on the available information and the data hitherto collected, my hypothesis is that the further I stay away from love, the better off I</p>
        <p className="mb-4 text-zinc-100">'Contemporary romance's unicorn: the elusive marriage of deeply brainy and delightfully escapist.' Christina Lauren, New York Times bestselling author of The Unho</p>
        <p className="mb-4 text-zinc-100">•</p>
        <p className="mb-4 text-zinc-100">When a fake relationship between scientists meets the irresistible force of attraction, it throws one woman's carefully calculated theories on love into chaos.</p>
        <p className="mb-4 text-zinc-100">As a third-year Ph.D. candidate, Olive Smith doesn't believe in lasting romantic relationships but her best friend does, and that's what got her into this situation. Convincing Anh that Olive on her way to a happily ever after was always going to be tough, scientists require proof. So, like any self-respecting woman, Olive panics and kisses the first man she sees.</p>
        <p className="mb-4 text-zinc-100">That man is none other than Adam Carlsen, a young hotshot professor and well-known ass. Which is why Olive is positively floored when...</p>
      </div>
    </div>
  );
};

export default BookDetails;
