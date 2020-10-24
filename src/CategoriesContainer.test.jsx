import React from 'react';

import { render } from '@testing-library/react';

import CategoriesContainer from './CategoriesContainer';

describe('CategoriesContainer', () => {
  it('', () => {
    const { getByText } = render((
      <CategoriesContainer />
    ));
    expect(getByText('한식')).not.toBeNull();
  });
});
