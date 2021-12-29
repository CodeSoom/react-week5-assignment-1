import { render } from '@testing-library/react';
import { useDispatch, useSelector } from 'react-redux';

import RestaurantsContainer from './RestaurantsContainer';

import { RESTAURANTS } from '../../lib/fixtures';

jest.mock('react-redux');

describe('RestaurantsContainer', () => {
  const dispatch = jest.fn();

  useDispatch.mockImplementation(() => dispatch);
  useSelector.mockImplementation((selector) =>
    selector({
      category: { id: 1, name: '카페' },
      region: { id: 1, name: '수원' },
      restaurants: RESTAURANTS,
    })
  );

  it('식당 목록을 보여준다', () => {
    const { container } = render(<RestaurantsContainer />);

    expect(container).toHaveTextContent('도산분식');
  });
});
