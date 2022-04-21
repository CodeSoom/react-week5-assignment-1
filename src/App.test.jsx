import { useDispatch, useSelector } from 'react-redux';

import { fireEvent, render, waitFor } from '@testing-library/react';

import App from './App';

import * as actions from './actions';

import locations from '../fixtures/locations';
import categories from '../fixtures/categories';
import restaurants from '../fixtures/restaurants';

jest.mock('react-redux');
jest.mock('./services/api');

describe('App', () => {
  const dispatch = jest.fn();

  useDispatch.mockImplementation(() => dispatch);

  useSelector.mockImplementation((selector) => selector({
    locations,
    categories,
    restaurants,
  }));

  const spyLoadLocations = jest.spyOn(actions, 'loadLocations').mockReturnValue(() => locations);
  const spyLoadCategories = jest.spyOn(actions, 'loadCategories').mockReturnValue(() => categories);
  const spyLoadRestaurants = jest.spyOn(actions, 'loadRestaurants').mockReturnValue(() => restaurants);

  beforeEach(() => {
    jest.clearAllMocks();
  });

  context('when mounted', () => {
    it('calls loadLocations, loadCategories and loadRestaurants', async () => {
      render(<App />);

      await waitFor(() => {
        expect(spyLoadLocations).toBeCalled();
        expect(spyLoadCategories).toBeCalled();
        expect(spyLoadRestaurants).toBeCalled();
      });
    });
  });

  it('renders regions, categories and restaurants', () => {
    const { queryByText } = render((
      <App />
    ));

    expect(queryByText('서울')).not.toBeNull();
    expect(queryByText('한식')).not.toBeNull();
    expect(queryByText('양천주가')).not.toBeNull();
  });
});
