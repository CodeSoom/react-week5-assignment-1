import React from 'react';

import { render } from '@testing-library/react';

import Item from './Item';

describe('Item', () => {
  it('should be there button with received prop', () => {
    const { getByText } = render(<Item text="서울" />);

    expect(getByText('서울')).toBeInTheDocument();
  });
});
