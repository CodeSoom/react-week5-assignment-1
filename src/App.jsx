import React from 'react';

export default function App() {
  const handleClick = () => {

  };

  return (
    <>
      <ul>
        <li>
          <button type="button" onClick={handleClick}>
            서울
          </button>
        </li>
        <li>
          <button type="button" onClick={handleClick}>
            대전
          </button>
        </li>
      </ul>
      <ul>
        <li>
          <button type="button" onClick={handleClick}>
            한식
          </button>
        </li>
        <li>
          <button type="button" onClick={handleClick}>
            중식
          </button>
        </li>
      </ul>
    </>
  );
}
