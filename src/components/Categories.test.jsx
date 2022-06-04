import { render, fireEvent } from '@testing-library/react';

import Categories from './Categories';

import restaurant from '../../fixtures/restaurant';

import categories from '../../fixtures/categories';

test('Categories', () => {
  const handleClick = jest.fn();

  const { getByText } = render(
    <Categories
      categories={categories}
      onClick={handleClick}
      restaurant={restaurant}
    />,
  );

  expect(getByText(/한식/)).not.toBeNull();

  fireEvent.click(getByText(/한식/));

  expect(handleClick).toBeCalled();
});
