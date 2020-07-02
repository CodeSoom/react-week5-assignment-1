import React from 'react';
import { useSelector } from 'react-redux';
import Categories from '../Components/Categories';

export default function CategoriesContainer() {
  const categories = useSelector((state) => state.categories);
  return (<Categories categories={categories} />);
}
