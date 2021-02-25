import React from 'react';

import { render, fireEvent } from '@testing-library/react';

import RegionButtons from './RegionButtons';

beforeEach(() => {
  jest.clearAllMocks();
});

describe('RegionButtons', () => {
  const handleClick = jest.fn();

  function renderRegionButtons() {
    return render((
      <RegionButtons
        onClick={handleClick}
        currentRegion=""
      />
    ));
  }
  it('renders restaurant region buttons', () => {
    const { getByText } = renderRegionButtons();

    expect(getByText('서울')).not.toBeNull();
  });

  it('marks the clicked button', () => {
    const { getByText } = renderRegionButtons();

    fireEvent.click(getByText('서울'));

    expect(handleClick).toBeCalled();
  });
});
