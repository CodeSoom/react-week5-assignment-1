import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';

function CategoriesContainer() {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch();
  }, []);
  return (
    <div className="categories-container">categories-container</div>
  );
}

export default CategoriesContainer;
