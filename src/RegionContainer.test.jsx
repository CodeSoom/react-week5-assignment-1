import React from 'react';

import { render } from '@testing-library/react';

import RegionContainer from './RegionContainer';

describe('RegionContainer', () => {
  it('지역 리스트가 나타난다.', () => {
    const { getByText } = render(<RegionContainer />);

    expect(getByText('서울')).not.toBeNull();
    expect(getByText('대전')).not.toBeNull();
    expect(getByText('대구')).not.toBeNull();
  });
});
