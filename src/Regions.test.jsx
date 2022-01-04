import { render, fireEvent } from '@testing-library/react';

import regions from '../fixtures/regions';

import Regions from './Regions';

test('Regions', () => {
  const handleClick = jest.fn();

  const region = regions[0];

  const { getByText } = render(
    <Regions regions={regions} region={region} handleClick={handleClick} />,
  );

  expect(getByText(/(V)/)).not.toBeNull();

  fireEvent.click(getByText('대전'));

  expect(handleClick).toBeCalledWith(2);
});
