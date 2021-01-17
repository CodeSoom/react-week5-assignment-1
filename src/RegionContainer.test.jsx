import React from 'react';
import { render } from '@testing-library/react';

import RegionContainer from './RegionContainer';

test('RegionContainer', () => {
  const regions = [];
  const { getByText } = render(<RegionContainer regions={regions} />);

  regions.forEach(({ name }) => {
    expect(getByText(name)).not.toBeNull();
  });
});
