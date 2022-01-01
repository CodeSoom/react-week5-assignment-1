import { fireEvent, render } from '@testing-library/react';
import { useDispatch, useSelector } from 'react-redux';

import App from './App';

import regions from './fixtures/regions';
import categories from './fixtures/cetegories';
import restaurants from './fixtures/restaurants';

jest.mock('react-redux');
jest.mock('./services/api');

test('App', () => {
  const dispatch = jest.fn();

  useDispatch.mockImplementation(() => dispatch);
  useSelector.mockImplementation((selector) => selector({
    categories,
    regions,
    restaurantsList: restaurants,
    checkedRegion: '',
    checkedCategoryId: undefined,
  }));
  const { getByText } = render(<App />);

  expect(dispatch).toBeCalledTimes(3);
  // renders buttons
  regions.forEach((region) => {
    // const checkedRegion = ''
    // expect(checkedRegion === region.name).toBe(false)

    expect(getByText(region.name)).not.toBeNull();
  });
  categories.forEach((category) => {
    // const checkedCategoryId = 0
    // expect(checkedCategoryId === category.id).toBe(false)

    expect(getByText(category.name)).not.toBeNull();
  });
  // render restaurants
  restaurants.forEach((restaurant) => {
    expect(getByText(restaurant.name)).not.toBeNull();
    // handleClicks
  });

  fireEvent.click(getByText(/서울/));
  expect(dispatch).toBeCalledTimes(4);

  fireEvent.click(getByText(/한식/));
  expect(dispatch).toBeCalledTimes(5);
  // checkedCategoryId, checkedRegion
  // expect(checkedRegion === '').toBe(true)
});
