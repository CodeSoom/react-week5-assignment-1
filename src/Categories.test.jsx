import React from 'react';

import { render } from '@testing-library/react';

import Categories from './Categories';

describe('Categories', () => {
  const categories = [];

  it('show all categories', () => {
    const { queryByText } = render(<Categories categories={categories} />);

    expect(queryByText('한식')).toBeNull();
  });
});
