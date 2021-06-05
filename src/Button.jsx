import React from 'react';

export default function Button({ item, onclick, selectedButton }) {
  return (
    <div>
      <button
        type="button"
        onClick={() => onclick(item)}
      >
        { selectedButton === item
          ? `${item.name}${'(v)'}`
          : `${item.name}`}
      </button>
    </div>
  );
}
