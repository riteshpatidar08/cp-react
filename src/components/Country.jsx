//USEFFECT HOOK

import React from 'react';
import { useEffect, useState } from 'react';

function Country() {
  const [count, setCount] = useState(0);

  const handleClick = () => {
    setCount(count + 1);
  };

  //run initial when application is load
  useEffect(() => {
    console.log(
      'this will run only when the country component loads first time'
    );
  }, []);

  //without dependency
  useEffect(() => {
    console.log('this will run every time without empty dependency');
  });

  //with dependency
  useEffect(() => {
    console.log('run everytime whenever the count is changed');
  }, [count]);

  return (
    <div>
      CountryPage
      <p>{count}</p>
      <button onClick={handleClick}>Increment</button>
    </div>
  );
}

export default Country;
