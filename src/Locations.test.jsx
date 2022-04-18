import { render, fireEvent } from '@testing-library/react';

import Locations from './Locations';

import locations from '../fixtures/locations';

test('Locations', () => {
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
