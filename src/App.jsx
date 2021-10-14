import { useState, useEffect } from 'react';

import { loadRegions, loadCategories } from './services/api';

export default function App() {
  const [state, setState] = useState({
    regions: [],
    categories: [],
    selectedRegion: '',
    selectedCategory: '',
  });

  useEffect(() => {
    const loadData = async () => {
      const regions = await loadRegions();
      const categories = await loadCategories();

      setState({
        ...state,
        regions,
        categories,
      });
    };

    loadData();
  }, []);

  function handleClickRegion(id) {
    setState({
      ...state,
      selectedRegion: id,
    });
  }

  function handleClickCategory(id) {
    setState({
      ...state,
      selectedCategory: id,
    });
  }

  const {
    regions, categories, selectedRegion, selectedCategory,
  } = state;

  return (
    <div>
      <ul>
        {regions.map(({ id, name }) => (
          <li key={id}>
            <button
              type="button"
              onClick={() => {
                handleClickRegion(id);
              }}
            >
              {id === selectedRegion ? `${name}(V)` : name}
            </button>
          </li>
        ))}
      </ul>
      <ul>
        {categories.map(({ id, name }) => (
          <li key={name}>
            <button
              type="button"
              onClick={() => {
                handleClickCategory(id);
              }}
            >
              {id === selectedCategory ? `${name}(V)` : name}
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
}
