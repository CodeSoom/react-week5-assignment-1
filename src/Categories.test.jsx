import React from 'react';

import { render } from '@testing-library/react';

import Regions from './Regions';

jest.mock('react-redux');

describe('App', () => {
  it('should display categories', () => {
    const categories = [
      { id: 101, name: '중식' },
    ];

    const { container } = render((
      <Regions
        categories={categories}
      />
    ));

    expect(container).toHaveTextContent('중식');
  });
});
