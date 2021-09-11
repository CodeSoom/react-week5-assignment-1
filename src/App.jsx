import { useEffect, useState } from 'react';

export default function App() {
  const [state, setState] = useState({
    category: null,
    region: null,
    regions: [],
    categories: [],
    restaurants: [],
  });

  const {
    categoryId, regionId, regions, categories, restaurants,
  } = state;

  useEffect(() => {
    setState({
      ...state,
      regions: [
        { id: 1, name: '한식' },
        { id: 2, name: '중식' },
      ],
      categories: [
        { id: 1, name: '서울' },
        { id: 2, name: '대전' },
      ],
      restaurants: [
        { id: 1, name: '원초밥' },
      ],
    });
  }, []);

  function handleClickButton({ name, id }) {
    setState({
      ...state,
      [`${name}Id`]: id,
    });
  }

  return (
    <>
      <ul>
        {
          regions.map(({ id, name }) => (
            <li key={id}>
              <button
                type="button"
                name="region"
                onClick={(e) => handleClickButton({ name: e.target.name, id })}
              >
                {name}
                {regionId === id ? '(V)' : ''}
              </button>
            </li>
          ))
        }
      </ul>
      <ul>
        {
          categories.map(({ id, name }) => (
            <li key={id}>
              <button
                type="button"
                name="category"
                onClick={(e) => handleClickButton({ name: e.target.name, id })}
              >
                {name}
                {categoryId === id ? '(V)' : ''}
              </button>
            </li>
          ))
        }
      </ul>
      <ul>
        {
          restaurants.map(({ id, name }) => (
            <li key={id}>
              {name}
            </li>
          ))
        }
      </ul>
    </>
  );
}
