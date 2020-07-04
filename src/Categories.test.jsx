import React from 'react';

import { render } from '@testing-library/react';

import Categories from './Categories';

jest.mock('react-redux');

describe('App', () => {
  it('should display categories', () => {
    const categories = [
      { id: 101, name: '중식' },
    ];

    const { container } = render((
      <Categories
        categories={categories}
      />
    ));

    expect(container).toHaveTextContent('중식');
  });
});
