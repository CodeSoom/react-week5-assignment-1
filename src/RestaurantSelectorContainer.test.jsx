import { render } from '@testing-library/react';
import { useSelector, useDispatch } from 'react-redux';

import RestaurantSelectorContainer from './RestaurantSelectorContainer';

import {
  regions,
  region,
  categories,
  category,
} from '../fixtures/staticData';

jest.mock('react-redux');

describe('RestaurantSelectorContainer', () => {
  function customRender(selections) {
    return render(<RestaurantSelectorContainer selections={selections} />);
  }

  useSelector.mockImplementation((selector) => selector({
    regions,
    region,
    categories,
    category,
  }));

  const dispatch = jest.fn();
  useDispatch.mockImplementation(() => dispatch);

  beforeEach(() => {
    jest.clearAllMocks();
  });

  context('with regions', () => {
    const { queryByText } = customRender(regions);

    test('renders regions', () => {
      expect(queryByText('서울(V)')).not.toBeNull();
      expect(queryByText('대전')).not.toBeNull();
      expect(queryByText('대구')).not.toBeNull();
    });
  });

  context('with categories', () => {
    const { queryByText } = customRender(categories);

    test('renders categories', () => {
      expect(queryByText('서울(V)')).not.toBeNull();
      expect(queryByText('대전')).not.toBeNull();
      expect(queryByText('대구')).not.toBeNull();
    });
  });
});
