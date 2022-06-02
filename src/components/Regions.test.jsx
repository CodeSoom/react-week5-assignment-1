import { render, fireEvent } from '@testing-library/react';

import Regions from './Regions';

test('Regions', () => {
  const handleClick = jest.fn();

  const regions = [
    {
      id: 1,
      name: '서울',
    },
  ];
  const { getByText } = render(<Regions regions={regions} onClick={handleClick} />);

  expect(getByText(/서울/)).not.toBeNull();

  fireEvent.click(getByText(/서울/));

  expect(handleClick).toBeCalled();
});
