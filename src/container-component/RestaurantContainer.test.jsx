import React from 'react';

import { render } from '@testing-library/react';

import { useSelector, useDispatch } from 'react-redux';

import RestaurantContainer from './RestaurantContainer';

jest.mock('react-redux');

describe('RestaurantContainer', () => {
  const dispatch = jest.fn();
  useDispatch.mockImplementation(() => dispatch);
  useSelector.mockImplementation((selector) => selector({
    selectedOption: {
      region: 1,
      category: 1,
    },
    restaurant: [],
  }));

  function renderRegionContainer() {
    return render((
      <RestaurantContainer />
    ));
  }

  beforeEach(() => {
    jest.clearAllMocks();
  });

  context('when change selected option', () => {
    it('load new restaurants', () => {
      renderRegionContainer();

      expect(dispatch).toBeCalled();
    });

    it('show restaurants', () => {
      const { container } = renderRegionContainer();

      expect(container).toHaveTextContent('양천주가');
      expect(container).toHaveTextContent('한국식 초밥');
    });
  });
});
