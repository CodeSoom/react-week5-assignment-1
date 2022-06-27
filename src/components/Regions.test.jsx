import { render, fireEvent } from '@testing-library/react';

import Regions from './Regions';

import regions from '../../fixtures/regions';

test('Regions', () => {
  const handleClick = jest.fn();

  const restaurant = {
    categoryId: 1,
    region: '',
  };

  const { getByText, queryByText } = render(
    <Regions regions={regions} onClick={handleClick} restaurant={restaurant} />,
  );

  expect(queryByText(/V/)).toBeNull();

  expect(getByText(/서울/)).not.toBeNull();

  fireEvent.click(getByText(/서울/));

  expect(handleClick).toBeCalled();
});
