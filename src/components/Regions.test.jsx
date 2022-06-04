import { render, fireEvent } from '@testing-library/react';

import Regions from './Regions';

import restaurant from '../../fixtures/restaurant';

import regions from '../../fixtures/regions';

test('Regions', () => {
  const handleClick = jest.fn();

  const { getByText } = render(
    <Regions
      regions={regions}
      onClick={handleClick}
      restaurant={restaurant}
    />,
  );

  expect(getByText(/서울/)).not.toBeNull();

  fireEvent.click(getByText(/서울/));

  expect(handleClick).toBeCalled();
});
