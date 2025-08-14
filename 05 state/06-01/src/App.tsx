import { useState } from 'react';

export default function App() {
  let name = "mike";
  let age = 20;
  const handleClick = () => {
    name = "john";
    age = 30;
    console.log(name, age);
  };


  return (
    <>
      <p>name: {name}</p>
      <p>age: {age}</p>
      <button onClick={handleClick}>change</button>
    </>
  );
}
