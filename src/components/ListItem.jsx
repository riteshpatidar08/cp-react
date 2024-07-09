//rfce //rafce shorthand for creating the component in the file

import React from 'react';
import { useState } from 'react';
const ListItem = () => {
  const [list, setList] = useState(['🚀', '🍕', '🤑', '🧑', '👌', '📅', '🍿']);

  const handleClick = (newEmoji) => {
    setList([...list, newEmoji]);
  };
  return (
    <div className="h-64">
      <h1 className=" mt-20 text-center font-bold text-[38px] text-indigo-700 animate-pulse">
        Rendering a List in React
      </h1>
      <div className="flex m-10 justify-around flex-wrap border-2 rounded-md  border-indigo-400">
        {list.map((item, index) => (
          <h1 className="text-3xl m-5">{item}</h1>
        ))}
      </div>
      <button
        className="px-8 py-2 bg-indigo-700 m-10 font-semibold text-white rounded-md"
        onClick={() => {
          handleClick('😒');
        }}
      >
        Add Emoji
      </button>
    </div>
  );
};

export default ListItem;

//create a new component
//make a new input field user enter a color in that input field get the color from the input field and make an element  h1 and gives that color as background color to that element.
