import React from 'react';
import { render } from '@testing-library/react';
import RegionContainer from './RegionContainer';
import regions from './fixtures/regions';

describe('RegionContainer', () => {
  it('리스트가 출력된다.', () => {
    const { getByText } = render((<RegionContainer resions={regions} />));
    expect(getByText(/서울/)).not.toBeNull();
  });
});
