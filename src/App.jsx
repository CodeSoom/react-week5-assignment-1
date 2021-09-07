import { useReducer, useEffect } from 'react';

import { loadCategories, loadRegions, loadRestaurants } from './services/api';

const initialState = {
  regions: [],
  categories: [],
  selectedRegion: {},
  selectedCategory: {},
  restaurants: [],
};

const reducers = {
  SET_CATEGORIES: (state, action) => ({
    ...state,
    categories: action.payload,
  }),
  SET_REGIONS: (state, action) => ({
    ...state,
    regions: action.payload,
  }),
  SET_SELECTED_REGION: (state, action) => ({
    ...state,
    selectedRegion: action.payload,
  }),
  SET_SELECTED_CATEGORY: (state, action) => ({
    ...state,
    selectedCategory: action.payload,
  }),
  SET_RESTAURANTS: (state, action) => ({
    ...state,
    restaurants: action.payload,
  }),
};

const reducer = (state, action) => {
  try {
    return reducers[action.type](state, action);
  } catch (error) {
    return state;
  }
};

export default function App() {
  const [{
    regions,
    categories,
    selectedRegion,
    selectedCategory,
    restaurants,
  }, dispatch] = useReducer(reducer, initialState);

  const handleClick = ({ id, name }) => {
    const isRegion = regions.find((region) => region.name === name);
    const isCategory = categories.find((category) => category.name === name);

    if (isRegion) {
      dispatch({ type: 'SET_SELECTED_REGION', payload: { id, name } });
      return;
    }

    if (isCategory) {
      dispatch({ type: 'SET_SELECTED_CATEGORY', payload: { id, name } });
    }
  };

  const isEmpty = (param) => Object.keys(param).length === 0;

  useEffect(() => {
    const fetchData = async () => {
      const categoriesData = await loadCategories();
      const regionsData = await loadRegions();

      dispatch({ type: 'SET_CATEGORIES', payload: categoriesData });
      dispatch({ type: 'SET_REGIONS', payload: regionsData });
    };

    fetchData();
  }, []);

  useEffect(() => {
    if (isEmpty(selectedRegion) || isEmpty(selectedCategory)) {
      return;
    }

    const fetchData = async () => {
      const data = await loadRestaurants({
        regionName: selectedRegion.name,
        categoryId: selectedCategory.id,
      });

      dispatch({ type: 'SET_RESTAURANTS', payload: data });
    };

    fetchData();
  }, [selectedRegion, selectedCategory]);

  return (
    <>
      <ul>
        {regions.map(({ id, name }) => (
          <li key={id}>
            <button
              type="button"
              onClick={() => handleClick({ id, name })}
            >
              {id === selectedRegion.id ? `${name}(V)` : name}
            </button>
          </li>
        ))}
      </ul>
      <ul>
        {categories.map(({ id, name }) => (
          <li key={id}>
            <button
              type="button"
              onClick={() => handleClick({ id, name })}
            >
              {id === selectedCategory.id ? `${name}(V)` : name}
            </button>
          </li>
        ))}
      </ul>
      <ul>
        {restaurants.map(({ id, name }) => (
          <li key={id}>
            {name}
          </li>
        ))}
      </ul>
    </>
  );
}
