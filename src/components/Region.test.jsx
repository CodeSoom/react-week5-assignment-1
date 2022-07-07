import { fireEvent, render } from '@testing-library/react';

import Region from './Region';

import REGIONS from '../fixtures/regions';

describe('<Region />', () => {
  const handleClick = jest.fn();

  const renderRegion = (region) => render((<Region region={region} onClick={handleClick} />));

  beforeEach(() => {
    handleClick.mockClear();
  });

  it('render region name', () => {
    const region = REGIONS[0];

    const { container } = renderRegion(region);

    expect(container).toHaveTextContent(region.name);
  });

  it('listen click event', () => {
    const region = REGIONS[0];

    const { getByRole } = renderRegion(region);

    expect(handleClick).not.toBeCalled();

    fireEvent.click(getByRole('button'));

    expect(handleClick).toBeCalledWith(region.id);
  });
});
