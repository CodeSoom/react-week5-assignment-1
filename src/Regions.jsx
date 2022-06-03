import { useState } from 'react';

export default function Regions({ regions }) {
  const [selected, setSelected] = useState();

  const handleClickButton = ({ target: { name } }) => {
    setSelected(name);
  };
  return (
    <div>
      {regions.map(({ id, name }) => (
        <li key={id}>
          <button type="button" name={name} onClick={handleClickButton}>
            {
              `${name}${selected === name ? '(V)' : ''}`
            }
          </button>
        </li>
      ))}
    </div>
  );
}
