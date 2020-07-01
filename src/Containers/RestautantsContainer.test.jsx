import React from 'react';
import { render } from '@testing-library/react';
import { useSelector, useDispatch } from 'react-redux';

import RestaurantsContainer from './RestaurantsContainer';

test('[RegionsContainer]', () => {
  const dispatch = jest.fn();
  useDispatch.mockImplementation(() => dispatch);
  useSelector.mockImplementation((selector) => selector({
    searchQuery: {
      regionName: '',
      categoryId: '',
    },

  }));

  const { getByTest } = render((
    <RestaurantsContainer />
  ));
});
