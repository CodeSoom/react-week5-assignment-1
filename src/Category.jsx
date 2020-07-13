import React from 'react';

export default function Category({ category: { id, name }, categoryId, onClick }) {
  const handleClick = (event) => {
    const { id: checkedId } = event.target;
    onClick({ id: checkedId * 1 });
  };

  return (
    <>
      <li>
        <button type="button" id={id} onClick={handleClick}>{ `${name}${categoryId === id ? '(V)' : ''}` }</button>
      </li>
    </>
  );
}
