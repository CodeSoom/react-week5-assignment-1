import React, { useEffect } from 'react';

import { useDispatch } from 'react-redux';

import { loadCategories } from './actions';

import CategoriesContainer from './CategoriesContainer';

export default function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(loadCategories());
  }, []);

  return (
    <div>
      <CategoriesContainer />
      <div>
        <ul>
          <li>서울</li>
          <li>대전</li>
        </ul>
      </div>
    </div>
  );
}
