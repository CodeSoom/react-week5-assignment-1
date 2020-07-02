import React from 'react';

import { render } from '@testing-library/react';

import Categories from './Categories';

describe('Categories', () => {
  it('카테고리가 보인다.', () => {
    const { getByText } = render(
      <Categories />,
    );

    expect(getByText('한식')).not.toBeNull();
    expect(getByText('중식')).not.toBeNull();
    expect(getByText('일식')).not.toBeNull();
    expect(getByText('양식')).not.toBeNull();
    expect(getByText('분식')).not.toBeNull();
  });
});
