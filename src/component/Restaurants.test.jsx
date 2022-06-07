import { render } from '@testing-library/react';

import { useDispatch } from 'react-redux';

import Restaurants from './Restaurants';

jest.mock('react-redux');

describe('Restaurants', () => {
  const dispatch = jest.fn();
  useDispatch.mockImplementation(() => dispatch);

  it('render Restaurants', () => {
    const restaurants = [
      {
        id: 1,
        name: '맛집',
      },
      {
        id: 2,
        name: '찐맛집',
      },
    ];
    const { getByText } = render(<Restaurants restaurants={restaurants} />);

    expect(getByText('맛집')).not.toBeNull();
    expect(getByText('찐맛집')).not.toBeNull();
  });
});
