import React from 'react';

export default function Button({ buttons, onclick, selectedButton }) {
  return (
    <div>
      <ul>
        {buttons.map((button) => (
          <li key={button.id}>
            <button type="button" onClick={() => onclick(button)}>
              {selectedButton.name === button.name
                ? `${button.name}${'(V)'}`
                : `${button.name}`}
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
}
