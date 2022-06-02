import { useState } from 'react';

export default function Categories({ categories }) {
  const [selected, setSelected] = useState();

  const handleClickButton = ({ target: { name } }) => {
    setSelected(name);
  };

  if (categories.length === 0) { return <h2>카테고리가 존재하지 않습니다</h2>; }

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
