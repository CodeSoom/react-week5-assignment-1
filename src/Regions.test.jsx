import { render } from '@testing-library/react';
import given from 'given2';

import Regions from './Regions';

import { regions } from '../__fixtures__/regions';

jest.mock('react-redux');

describe('Regions', () => {
  const renderComponent = (selectedRegion) => render(
    <Regions
      regions={given.regions}
      selectedRegion={selectedRegion}
    />,
  );

  context('with regions', () => {
    given('regions', () => regions);

    it('render "region" buttons', () => {
      const { getByRole } = renderComponent(undefined);

      regions.forEach((region) => {
        expect(getByRole('button', { name: region.name })).toBeInTheDocument();
      });
    });

    it('selected button, render region name with (V) ', () => {
      const { getByText } = renderComponent(regions[0]);

      expect(getByText(`${regions[0].name}(V)`)).toBeInTheDocument();
    });
  });

  context('without regions', () => {
    given('regions', () => []);

    it('noting render', () => {
      const { container } = renderComponent(undefined);

      expect(container).toBeEmptyDOMElement();
    });
  });
});
