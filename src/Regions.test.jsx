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

  function renderRegions(id) {
    return render((
      <Regions
        regions={regions}
        selectedRegion={id}
        onClick={handleClick}
      />

    ));
  }

  it('renders region buttons', () => {
    const { queryByText } = renderRegions();

    expect(queryByText('서울')).not.toBeNull();
  });

  it('listens lick event', () => {
    const { queryByText } = renderRegions();

    fireEvent.click(queryByText('서울'));

    expect(handleClick).toBeCalled();
  });

  it('renders selected button with "V" ', () => {
    const { queryByText } = renderRegions(1);

    expect(queryByText('서울(V)')).not.toBeNull();
  });
});
