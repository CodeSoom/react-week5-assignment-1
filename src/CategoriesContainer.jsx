import { useSelector } from 'react-redux';

import Categories from './Categories';

export default function RegionsContainer() {
  const { categories } = useSelector((state) => ({
    categories: state.regions,
  }));

  return (
    <Categories
      categories={categories}
    />
  );
}
