import React from 'react';
import { render } from '@testing-library/react';

import RegionList from './RegionList';
import regions from '../fixtures/regions';

test('RegionList', () => {
  const { getByText } = render(<RegionList regions={regions} />);

  regions.forEach(({ name }) => {
    expect(getByText(name)).not.toBeNull();
  });
});
