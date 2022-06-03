import { render } from '@testing-library/react';

import categories from '../../fixture/categories';

import Categories from './Categories';

test('Categories', () => {
  const { getByText } = render(<Categories />);

  expect(getByText(categories[0].name)).toBeInTheDocument();
});
