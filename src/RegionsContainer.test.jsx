import React from 'react';

import { render } from '@testing-library/react';

import RegionsContainer from './RegionsContainer';

test('RegionsContainer', () => {
  const { getByText } = render(<RegionsContainer />);

  expect(getByText('서울')).not.toBeNull();
});
