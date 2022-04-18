import { render, fireEvent } from '@testing-library/react';

import Categories from './Categories';

import categories from '../fixtures/categories';

test('Categories', () => {
  const handleClick = jest.fn();

  const { queryByText, getByText } = render((
    <Categories
      categories={categories}
      onClick={handleClick}
    />
  ));

  expect(queryByText('한식')).not.toBeNull();

  fireEvent.click(getByText('한식'));

  expect(handleClick).toBeCalled();
});
