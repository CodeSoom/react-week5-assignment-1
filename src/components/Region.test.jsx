import { fireEvent, render } from '@testing-library/react';

import Region from './Region';

import REGIONS from '../fixtures/regions';

describe('<Region />', () => {
  const handleClick = jest.fn();

  const renderRegion = ({ region, isSelected = false }) => render((
    <Region
      region={region}
      isSelected={isSelected}
      onClick={handleClick}
    />
  ));

  beforeEach(() => {
    handleClick.mockClear();
  });

  it('render region name', () => {
    const region = REGIONS[0];

    const { container } = renderRegion({ region });

    expect(container).toHaveTextContent(region.name);
  });

  it('listen click event', () => {
    const region = REGIONS[0];

    const { getByRole } = renderRegion({ region });

    expect(handleClick).not.toBeCalled();

    fireEvent.click(getByRole('button'));

    expect(handleClick).toBeCalledWith(region);
  });

  context('region is selected', () => {
    it('renders "(V)" next to region name', () => {
      const region = REGIONS[0];

      const { container } = renderRegion({
        region,
        isSelected: true,
      });

      expect(container).toHaveTextContent(`${region.name}(V)`);
    });
  });

  context('region is not selected', () => {
    it('doesnt render "(V)"', () => {
      const { container } = renderRegion({
        region: REGIONS[0],
        isSelected: false,
      });

      expect(container).not.toHaveTextContent('(V)');
    });
  });
});
