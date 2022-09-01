import { render, fireEvent } from '@testing-library/react';

import Regions from './Regions';

import regions from '../__fixtures__/list';

describe('<Regions />', () => {
  it('shows regions', () => {
    const { queryByText } = render(
      <Regions
        regions={regions}
        selectedRegion="부산"
      />,
    );

    regions.forEach((region) => {
      expect(queryByText(region.name)).not.toBeNull();
    });
  });

  it('clicks each button to check it\'s selected', () => {
    const { getByRole, queryByText } = render(
      <Regions
        regions={regions}
        selectedRegion="부산"
      />,
    );

    regions.forEach((region) => {
      fireEvent.click(getByRole('button', { name: region.name }));
      expect(queryByText(region.name)).toBeEnabled();
    });
  });
});
