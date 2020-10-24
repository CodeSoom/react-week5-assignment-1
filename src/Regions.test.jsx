import React from 'react';

import { render, fireEvent } from '@testing-library/react';

import regions from '../__fixtures__/regions';

import Regions from './Regions';

jest.mock('react-redux');

describe('Regions', () => {
  const handleClickRegion = jest.fn();

  function renderRegions(selectedRegion) {
    return render((
      <Regions
        regions={regions}
        selectedRegion={selectedRegion}
        onClick={handleClickRegion}
      />
    ));
  }

  it('renders regions name for buttons text', () => {
    const selectedRegion = '서울';

    const { container } = renderRegions(selectedRegion);

    regions.forEach(({ name }) => {
      const buttonText = selectedRegion === name
        ? `${name}(V)`
        : name;
      expect(container).toHaveTextContent(buttonText);
    });
  });

  context('when the button clicked', () => {
    it('run handleClickRegion function', () => {
      const selectedRegion = '';

      const { container, getByText } = renderRegions(selectedRegion);

      regions.forEach(({ name }) => {
        expect(container).toHaveTextContent(name);
        fireEvent.click(getByText(name));
      });

      expect(handleClickRegion).toBeCalledTimes(regions.length);
    });
  });
});
