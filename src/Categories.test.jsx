import React from 'react';

import { render } from '@testing-library/react';

import Categories from './Categories';

describe('Categories Component', () => {
  it('Page render', () => {
    const { getByText } = render((
      <Categories />
    ));

    expect(getByText(/한식/)).not.toBeNull();
    expect(getByText(/중식/)).not.toBeNull();
    expect(getByText(/일식/)).not.toBeNull();
    expect(getByText(/양식/)).not.toBeNull();
    expect(getByText(/분식/)).not.toBeNull();
  });
});
