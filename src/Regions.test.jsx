import React from 'react';

import { fireEvent, render } from '@testing-library/react';

import Regions from './Regions';

import regions from '../fixtures/regions';

describe('Categories', () => {
  it('when rendering then show the list', () => {
    const { getByText } = render((
      <Regions
        regions={regions}
      />
    ));
    expect(getByText(/서울/)).not.toBeNull();
    expect(getByText(/대전/)).not.toBeNull();
  });

  it('Region button click', () => {
    const handleClick = jest.fn();
    const { getByText } = render((
      <Regions
        onClick={handleClick}
        regions={regions}
        selectRegion="서울"
      />
    ));

    fireEvent.click(getByText(/서울/));

    expect(getByText('서울(V)')).not.toBeNull();
  });
});
