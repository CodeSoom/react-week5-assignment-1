import { render, fireEvent } from '@testing-library/react';

import Categories from './Categories';

test('Categories', () => {
  const handleClick = jest.fn();

  const categories = [
    {
      id: 1,
      name: '한식',
    },
  ];
  const { getByText } = render(<Categories categories={categories} onClick={handleClick} />);

  expect(getByText(/한식/)).not.toBeNull();

  fireEvent.click(getByText(/한식/));

  expect(handleClick).toBeCalled();
});
