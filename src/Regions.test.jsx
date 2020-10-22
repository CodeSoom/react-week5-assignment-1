import React from 'react';

import { render } from '@testing-library/react';

import Regions from './Regions';

describe('Regions', () => {
  const regions = [];

  it('show all regions', () => {
    const { queryByText } = render(<Regions regions={regions} />);

    expect(queryByText('서울')).toBeNull();
  });
});
