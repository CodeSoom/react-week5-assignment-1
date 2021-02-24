import React from 'react';

import { render } from '@testing-library/react';

import Regions from './Regions';

describe('Regions', () => {
  const regions = [
    { id: 1, name: '서울' },
  ];
  it('renders region buttons', () => {
    const { queryByText } = render(<Regions regions={regions} />);

    expect(queryByText('서울')).not.toBeNull();
  });
});
