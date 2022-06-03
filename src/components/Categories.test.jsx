import { fireEvent, render } from '@testing-library/react';

import categories from '../../fixture/categories';

import Categories from './Categories';

test('Categories', () => {
  const { getByText } = render(<Categories categories={categories} />);

  const categoryNameButton = getByText(categories[0].name, { exact: false });

  expect(categoryNameButton).toBeInTheDocument();

  fireEvent.click(categoryNameButton);

  expect(categoryNameButton).toHaveTextContent(/V/g);
});
