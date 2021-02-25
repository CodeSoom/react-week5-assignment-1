import React from 'react';

import { render } from '@testing-library/react';

import Restaurants from './Restaurants';

import restaurants from '../fixture/retaurants';

describe('Restaurants', () => {
  it('음식점 목록을 보여준다.', () => {
    const { queryByText } = render(<Restaurants restaurants={restaurants} />);

    expect(queryByText('양천주가')).toBeInTheDocument();
    expect(queryByText('김초밥')).toBeInTheDocument();
  });
});
