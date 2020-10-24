import React from 'react';
import { render } from '@testing-library/react';

import RegionList from './RegionList';
import regions from '../fixtures/regions';

test('RegionList', () => {
  const { getByText } = render(<RegionList regions={regions} />);

  expect(getByText('서울')).not.toBeNull();
  expect(getByText('대전')).not.toBeNull();
  expect(getByText('대구')).not.toBeNull();
  expect(getByText('부산')).not.toBeNull();
  expect(getByText('광주')).not.toBeNull();
  expect(getByText('강원도')).not.toBeNull();
  expect(getByText('인천')).not.toBeNull();
});
