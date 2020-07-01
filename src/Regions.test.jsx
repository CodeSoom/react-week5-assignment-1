import React from 'react';

import { render, fireEvent } from '@testing-library/react';

import Regions from './Regions';

jest.mock('react-redux');

describe('App', () => {
  it('should display regions', () => {
    const handleClick = jest.fn();

    const regions = [
      { id: 101, name: '서울' },
    ];

    const { container, getByText } = render((
      <Regions
        regions={regions}
      />
    ));

    expect(container).toHaveTextContent('서울');
    fireEvent.click(getByText('서울'));

    expect(handleClick).toBeCalled();
  });
});
