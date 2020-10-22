import React from 'react';

import { render, fireEvent } from '@testing-library/react';

import Regions from './Regions';

describe('Regions', () => {
  const handleClickRegion = jest.fn();

  const regions = [
    { id: 1, name: '서울' },
  ];

  const renderRegions = () => render(
    <Regions regions={regions} onClick={handleClickRegion} />,
  );

  it('renders button', () => {
    const { getByText } = renderRegions();

    expect(getByText('서울')).not.toBeNull();
  });

  context('when buttion is clicked', () => {
    it('called onClick', () => {
      const { getByText } = renderRegions();

      expect(handleClickRegion).not.toBeCalled();

      fireEvent.click(getByText('서울'));

      expect(handleClickRegion).toBeCalled();
    });
  });
});
