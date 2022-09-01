import Categories from './Categories';

import { categories } from '../__fixtures__/data';

export default function CategoriesContainer() {
  return (
    <Categories
      categories={categories}
    />
  );
}
