import React from 'react';

import { render } from '@testing-library/react';

import Regions from './Regions';

jest.mock('react-redux');

describe('App', () => {
  it('should display regions', () => {
    const regions = [
      { id: 101, name: '서울' },
    ];

    const { container } = render((
      <Regions
        regions={regions}
      />
    ));

    expect(container).toHaveTextContent('서울');
  });
});
