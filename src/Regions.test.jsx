import React from 'react';

import { render } from '@testing-library/react';

import Regions from './Regions';

test('Regions', () => {
  const { getByText } = render(<Regions />);

  expect(getByText('서울')).not.toBeNull();
});
