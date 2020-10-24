import React from 'react';

import { render } from '@testing-library/react';

import { useSelector } from 'react-redux';
import RestaurantsContainer from './RestaurantsContainer';

describe('RestaurantsContainer', () => {
  beforeEach(() => {
    jest.clearAllMocks();

    useSelector.mockImplementation((selector) => selector({
      restaurants: [
        {
          id: 1,
          categoryId: 1,
          name: '양천주가',
          address: '서울 강남구 123456',
          information: '양천주가 in 서울 강남구 123456',
        },
      ],
    }));
  });
  it('renders', () => {
    const { container, getByText } = render(<RestaurantsContainer />);

    expect(container).not.toBeNull();
    expect(getByText('양천주가')).not.toBeNull();
  });
});
