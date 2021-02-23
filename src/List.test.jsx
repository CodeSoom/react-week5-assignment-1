import React from 'react';

import { render } from '@testing-library/react';

import List from './List';

describe('List', () => {
  it('should be there list with received prop', () => {
    const { getByRole } = render(<List list={[1, 2, 3]} />);

    const list = getByRole('list');

    expect(list).toHaveTextContent(1);
    expect(list).toHaveTextContent(2);
    expect(list).toHaveTextContent(3);
  });
});
