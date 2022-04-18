import { render, fireEvent } from '@testing-library/react';

import Locations from './Locations';

import locations from '../fixtures/locations';

describe('Locations', () => {
  const handleClick = jest.fn();

  function renderLocations({ locationId }) {
    return render((
      <Locations
        locations={locations}
        locationId={locationId}
        onClick={handleClick}
      />
    ));
  }

  it('render locations', () => {
    const { queryByText } = renderLocations({ locationId: '' });

    expect(queryByText('서울')).not.toBeNull();
  });

  it('calls handleClick', () => {
    const { getByText } = renderLocations({ locationId: '' });

    fireEvent.click(getByText('서울'));

    expect(handleClick).toBeCalled();
  });

  context('with selected location', () => {
    it('renders location with a mark', () => {
      const { queryByText } = renderLocations({ locationId: 1 });

      expect(queryByText('서울(V)')).not.toBeNull();
    });
  });
});
