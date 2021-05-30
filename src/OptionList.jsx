import { useState } from 'react';

export default function OptionList({ options }) {
  const [selected, setSelected] = useState('');

  return (
    <ul>
      {options.map((option) => {
        const name = (selected === option) ? `${option}(V)` : option;
        const handleClick = () => setSelected(name);

        return (
          <li key={option}>
            <button type="button" onClick={handleClick}>
              {name}
            </button>
          </li>
        );
      })}
    </ul>
  );
}
