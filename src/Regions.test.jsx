import React from 'react';

import { fireEvent, render } from '@testing-library/react';

import Regions from './Regions';

describe('Regions', () => {
  const handleClick = jest.fn();

  const regions = [
    { id: 1, name: '서울' },
  ];

  const renderRegions = (name = '') => render(
    <Regions
      regions={regions}
      regionName={name}
      onClick={handleClick}
    />,
  );

  it('show all regions', () => {
    const { queryByText } = renderRegions();

    expect(queryByText('서울')).not.toBeNull();
  });

  context('click category', () => {
    it('calls handleClick function', () => {
      const { getByText } = renderRegions();

      fireEvent.click(getByText('서울'));

      expect(handleClick).toBeCalled();
    });

    it('check mark in category', () => {
      const { getByText } = renderRegions();

      fireEvent.click(getByText('서울'));

      const { container } = renderRegions('서울');

      expect(handleClick).toBeCalled();

      expect(container).toHaveTextContent('서울(V)');
    });
  });
});
