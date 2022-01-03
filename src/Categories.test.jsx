import { render, fireEvent } from '@testing-library/react';

import categories from '../fixtures/categories';

import Categories from './Categories';

it('Categories', () => {
  const category = categories[0];
  const handleClick = jest.fn();

  const { getByText } = render(
    <Categories categories={categories} category={category} handleClick={handleClick} />,
  );

  expect(getByText(/(V)/)).not.toBeNull();

  fireEvent.click(getByText('중식'));

  expect(handleClick).toBeCalledWith(2);
});
