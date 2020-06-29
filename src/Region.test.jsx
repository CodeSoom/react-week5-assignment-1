import React from 'react';

import { render } from '@testing-library/react';

import Region from './Region';

import { regions } from '../fixtures/regions';

describe('Region', () => {
  it('props로 받은 지역 리스트를 보여준다.', () => {
    const { getByText } = render(<Region regions={regions} />);
    expect(getByText('서울')).not.toBeNull();
    expect(getByText('대전')).not.toBeNull();
    expect(getByText('대구')).not.toBeNull();
  });
});
