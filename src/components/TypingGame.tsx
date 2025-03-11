import React, { useEffect, useState } from 'react';

const TypingGame = (): JSX.Element => {
  const [query, setQuery] = useState<string>('');
  const [typo, setTypo] = useState<number>(0);

  //initial text
  const text: string = "One day, I'll create a game."; 
  
  // Store the last query to compare changes
  const [prevQuery, setPrevQuery] = useState<string>('');

  // Compute comparison array
  const comparison = [...text].map((textItem, index) => {
    const queryItem = query[index];
    return {
      index,
      textItem,
      queryItem,
      isMatch: textItem === queryItem,
    };
  });

  // Check for new typos on query change
  useEffect(() => {
    if (query.length > prevQuery.length) {
      // Only check the latest character when query grows
      const lastIndex = query.length - 1;
      if (lastIndex < text.length && query[lastIndex] !== text[lastIndex]) {
        setTypo((prev) => prev + 1);
      }
    }

    setPrevQuery(query);
    
    if (query === '') {
      setTypo(0);
    }
  }, [query, text]);

  const renderTextItem = (item: string) => (item === ' ' ? '\u00A0' : item); // Non-breaking space

  return (
    <div className="flex flex-col items-center w-fit bg-container p-4 rounded-xl gap-2">
      <div className="flex">
        {comparison.map(({ index, textItem, isMatch }) => (
          <div key={index}>
            <div className={`${isMatch ? 'text-white text-lg' : 'text-[--text-color] text-sm'}`}>
              {renderTextItem(textItem)}
            </div>
          </div>
        ))}
      </div>
      <input
        className="w-full bg-container border-b border-red-500 outline-none pl-2 placeholder-[--text-color] focus:placeholder-[--btn-inactive]"
        type="text"
        placeholder="enter text above"
        value={query}
        onChange={(e) => setQuery(e.target.value)}
      />
      <div className="text-red-500">Typo: {typo}</div>
    </div>
  );
};

export default TypingGame;