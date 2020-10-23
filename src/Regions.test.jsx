import React from 'react';

import { render, fireEvent } from '@testing-library/react';

import regions from '../__fixtures__/regions';

import Regions from './Regions';

describe('Regions', () => {
  const handleClickRegion = jest.fn();

  beforeAll(() => {
    jest.clearAllMocks();
  });

  const renderRegions = (selectedRegion = '') => render(
    <Regions
      regions={regions}
      selectedRegion={selectedRegion}
      onClick={handleClickRegion}
    />,
  );

  context('without selectRegion', () => {
    it('renders button text', () => {
      const { container } = renderRegions();

      regions.forEach(({ name }) => {
        expect(container).toHaveTextContent(name);
      });
    });
  });

  context('with selectedRegion', () => {
    it('render button text with "(V)"', () => {
      const selectedRegion = '대전';

      const { container } = renderRegions(selectedRegion);

      regions.forEach(({ name }) => {
        const buttonText = selectedRegion === name ? `${name} (V)` : name;
        expect(container).toHaveTextContent(buttonText);
      });
    });
  });

  context('when buttion is clicked', () => {
    it('called onClick', () => {
      const { getByText } = renderRegions();

      expect(handleClickRegion).not.toBeCalled();

      regions.forEach(({ name }) => {
        fireEvent.click(getByText(name));
      });

      expect(handleClickRegion).toBeCalledTimes(regions.length);
    });
  });
});
