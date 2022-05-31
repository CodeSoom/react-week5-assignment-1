import { useState } from 'react';

export default function Categories({ categories }) {
  const [selected, setSelected] = useState();

  const handleClickButton = ({ target: { name } }) => {
    setSelected(name);
  };
  return (
    <>
      <ul>
        {categories.map(({ id, name }) => (
          <li key={id}>
            <button
              type="button"
              name={name}
              onClick={handleClickButton}
            >
              {`${name}${selected === name ? '(V)' : ''}`}
            </button>
          </li>
        ))}
      </ul>
    </>
  );
}
