import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { createThunk, GET_CATEGORIES } from './actions';
import { getCategories } from './services/api';

function CategoriesContainer() {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(createThunk(GET_CATEGORIES, getCategories));
  }, []);
  return (
    <div className="categories-container">
      <ul>
        {[
          { id: 1, name: '한식' },
          { id: 2, name: '중식' },
          { id: 3, name: '일식' },
        ].map((data) => (
          <li key={data.id}>
            <button type="button">
              {data.name}
            </button>
          </li>
        ))}
      </ul>

    </div>
  );
}

export default CategoriesContainer;
