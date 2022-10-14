import React from 'react';
import { render } from '@testing-library/react';
import ListContainer from './ListContainer';
import stores from './fixtures/stores';

describe('RegionContainer', () => {
  it('리스트가 출력된다.', () => {
    const { getByText } = render((<ListContainer stores={stores} />));
    expect(getByText(/호신각/)).not.toBeNull();
  });
});
