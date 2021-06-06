import React from 'react';

export default function Button({ item, onclick, selectedButton }) {
  return (
    <div>
      <button type="button" onClick={() => onclick(item)}>
        {selectedButton.name === item.name
          ? `${item.name}${'(V)'}`
          : `${item.name}`}
      </button>
    </div>
  );
}
