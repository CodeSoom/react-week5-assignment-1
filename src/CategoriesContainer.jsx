import { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import Categories from './Categories';

export default function CategoriesContainer() {
  const { storeCategories } = useSelector((state) => ({
    storeCategories: state.categories,
  }));

  const [categories, setCategories] = useState();

  useEffect(() => {
    setCategories(storeCategories);
  }, []);

  return (
    <>
      <Categories categories={categories} />
    </>
  );
}
