import Buttons from './Buttons';

import { categories } from '../__fixtures__/list';

export default function CategoriesContainer() {
  return (
    <Buttons roles={categories} />
  );
}
