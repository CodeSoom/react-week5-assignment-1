import React from 'react';

import { render } from '@testing-library/react';

import Restaurants from './Restaurants';

import { restaurants } from '../fixtures/restaurants';

describe('Restaurants', () => {
  it('props로 받은 음식점 리스트를 보여준다.', () => {
    const { getByText } = render(<Restaurants restaurants={restaurants} />);

    expect(getByText('양천주가')).not.toBeNull();
    expect(getByText('한국식 초밥')).not.toBeNull();
  });

  it('props로 받은 음식점 리스트가 없을 경우, 관련 텍스트를 보여준다..', () => {
    const { getByText } = render(<Restaurants restaurants={[]} />);

    expect(getByText('검색된 리스트가 없습니다.')).not.toBeNull();
  });
});
