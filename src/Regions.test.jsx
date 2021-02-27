import React from 'react';

import { fireEvent, render } from '@testing-library/react';

import Regions from './Regions';

describe('Regions', () => {
  const regions = [
    { id: 1, name: '서울' },
  ];

  const handleClick = jest.fn();

  beforeEach(() => {
    handleClick.mockClear();
  });

  it('renders region buttons', () => {
    const { queryByText } = render((
      <Regions
        regions={regions}
        onClick={handleClick}
      />
    ));

    expect(queryByText('서울')).not.toBeNull();

    fireEvent.click(queryByText('서울'));

    expect(handleClick).toBeCalled();
  });
});
