import { render, fireEvent } from '@testing-library/react';

import Locations from './Locations';

test('Locations', () => {
  const locations = [
    {
      id: 1, name: '서울',
    },
  ];

  const handleClick = jest.fn();

  const { queryByText, getByText } = render((
    <Locations
      locations={locations}
      onClick={handleClick}
    />
  ));

  expect(queryByText('서울')).not.toBeNull();

  fireEvent.click(getByText('서울'));

  expect(handleClick).toBeCalled();
});
