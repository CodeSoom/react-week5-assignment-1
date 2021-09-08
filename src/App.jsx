import { useEffect, useState } from 'react';

export default function App() {
  const [regions, setRegions] = useState([]);
  const [categories, setCategories] = useState([]);

  useEffect(() => {
    setRegions([
      { id: 1, name: '한식' },
    ]);

    setCategories([
      { id: 1, name: '서울' },
    ]);
  }, []);

  return (
    <>
      <ul>
        {
          regions.map(({ id, name }) => (
            <li key={id}>
              <button type="button">{name}</button>
            </li>
          ))
        }
      </ul>
      <ul>
        {
          categories.map(({ id, name }) => (
            <li key={id}>
              <button type="button">{name}</button>
            </li>
          ))
        }
      </ul>
    </>
  );
}
