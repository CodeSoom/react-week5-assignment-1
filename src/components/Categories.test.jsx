import { render } from '@testing-library/react';

import categories from '../../fixture/categories';

import Categories from './Categories';

test('Categories', () => {
  const { getByText } = render(<Categories categories={categories} />);

  expect(getByText(categories[0].name)).toBeInTheDocument();
});
