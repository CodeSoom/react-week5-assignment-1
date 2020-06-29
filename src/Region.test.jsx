import React from 'react';

import { render } from '@testing-library/react';

import Region from './Region';

describe('Region', () => {
  it('props로 받은 지역 리스트를 보여준다.', () => {
    const regions = [
      {
        id: 1,
        text: '서울',
      },
      {
        id: 2,
        text: '대전',
      },
      {
        id: 3,
        text: '대구',
      },
    ];
    const { getByText } = render(<Region regions={regions} />);
    expect(getByText('서울')).not.toBeNull();
    expect(getByText('대전')).not.toBeNull();
    expect(getByText('대구')).not.toBeNull();
  });
});
