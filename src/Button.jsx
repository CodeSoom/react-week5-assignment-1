import React from 'react';

export default function Button({ item }) {
  function handleClick() {
    return {
    };
  }

  return (
    <div>
      <button
        type="button"
        onClick={handleClick}
      >
        {item.name}
      </button>
    </div>
  );
}
