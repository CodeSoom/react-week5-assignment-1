import { useSelector } from 'react-redux';

import Categories from './Categories';

export default function CategoriesContainer() {
  const { categories } = useSelector((state) => ({
    restaurant: state.restaurant,
  }));

  return (
    <>
      <Categories categories={categories} />
    </>
  );
}
