import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { getCateroriesThunk } from './actions';

function CategoriesContainer() {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getCateroriesThunk());
  }, []);
  return (
    <div className="categories-container">categories-container</div>
  );
}

export default CategoriesContainer;
