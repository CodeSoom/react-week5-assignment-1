import { useState } from 'react';

export default function Regions({ regions }) {
  const [selected, setSelected] = useState();

  const handleClickButton = ({ target: { name } }) => {
    setSelected(name);
  };

  if (!regions || regions.length === 0) {
    return <h2>지역이 존재하지 않습니다</h2>;
  }

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
