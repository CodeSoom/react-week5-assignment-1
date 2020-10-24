import React from 'react';

import { fireEvent, render } from '@testing-library/react';

import Regions from './Regions';

import regions from '../fixtures/regions';

describe('Regions', () => {
  const handleClick = jest.fn();

  function renderMaker(regions = {}, selectRegion = '', handleClick = '') {
    return render((
      <Regions
        regions={regions}
        selectRegion={selectRegion}
        onClick={handleClick}
      />
    ));
  }

  it('when rendering then show the list', () => {
    const { getByText } = renderMaker(regions);

    expect(getByText(/서울/)).not.toBeNull();
    expect(getByText(/대전/)).not.toBeNull();
  });

  it('Region button click', () => {
    const selectRegion = '서울';

    const { getByText } = renderMaker(regions, selectRegion, handleClick);

    fireEvent.click(getByText(/서울/));

    expect(getByText('서울(V)')).not.toBeNull();
  });
});
