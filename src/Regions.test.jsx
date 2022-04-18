import { fireEvent, render } from '@testing-library/react';

import Regions from './Regions';

import regions from '../fixture/regions';

describe('Addresses', () => {
  const onSelect = jest.fn();

  const renderRegions = (selectRegionId) => render((
    <Regions
      regions={regions}
      onSelect={onSelect}
      selectRegionId={selectRegionId}
    />
  ));

  it('renders Regions', () => {
    const { container } = renderRegions();

    expect(container).toHaveTextContent('서울');
  });

  it('listens for click event on select regions', () => {
    const { getByText } = renderRegions();

    fireEvent.click(getByText('서울'));

    expect(onSelect).toBeCalledWith(1);
  });

  context('when selected', () => {
    it('renders name with (V)', () => {
      const { queryByText } = renderRegions(1);

      expect(queryByText('서울 (V)')).not.toBeNull();
    });
  });
});
