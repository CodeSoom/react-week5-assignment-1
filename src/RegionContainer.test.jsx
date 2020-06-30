import React from 'react';

import { render } from '@testing-library/react';

import RegionContainer from './RegionContainer';

describe('RegionContainer', () => {
  it('should display regions', () => {
    const { getByText } = render((
      <RegionContainer />
    ));

    expect(getByText('서울')).not.toBeNull();
  });
});
