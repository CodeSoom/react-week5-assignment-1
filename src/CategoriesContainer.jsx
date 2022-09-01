import Categories from './Categories';

import { categories } from '../__fixtures__/list';

export default function CategoriesContainer() {
  return (
    <Categories
      categories={categories}
    />
  );
}
