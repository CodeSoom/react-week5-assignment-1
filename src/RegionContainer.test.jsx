import { render } from '@testing-library/react';

import regions from '../fixtures/region';

import RegionContainer from './RegionContainer';

describe('RegionContainer', () => {
  it('shows region', () => {
    const { queryByText } = render((
      <RegionContainer
        regions={regions}
      />
    ));

    expect(queryByText(/서울/)).not.toBeNull();
  });
});
