import React from 'react';

import { render } from '@testing-library/react';

import { useSelector } from 'react-redux';

import RestaurantRegionsContainer from './RestaurantRegionsContainer';

import { regions } from '../fixtures/restaurants';

jest.mock('react-redux');

describe('RestaurantRegionContainer', () => {
  it('레스토랑 지역 목록을 화면에 보여준다.', () => {
    // useSelector.mockImplementation((selector) => selector({
    //   regions,
    // }));

    const { getByText } = render((
      <RestaurantRegionsContainer />
    ));

    expect(getByText('서울')).not.toBeNull();
    expect(getByText('대전')).not.toBeNull();
    expect(getByText('대구')).not.toBeNull();
    expect(getByText('부산')).not.toBeNull();
    expect(getByText('광주')).not.toBeNull();
    expect(getByText('강원도')).not.toBeNull();
    expect(getByText('인천')).not.toBeNull();
  });
});
