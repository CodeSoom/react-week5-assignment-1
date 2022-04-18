import { render, fireEvent } from '@testing-library/react';

import Locations from './Locations';

import locations from '../fixtures/locations';

beforeEach(() => {
  jest.clearAllMocks();
});

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

  context('when the location is selected', () => {
    it('renders location with a mark', () => {
      const { queryByText } = renderLocations({ locationId: 1 });

      expect(queryByText('서울(V)')).not.toBeNull();
    });
  });

  context('when the location is not selected', () => {
    it('renders location without mark', () => {
      const { queryByText } = renderLocations({ locationId: '' });

      expect(queryByText('서울')).not.toBeNull();
    });
  });

  it('calls handleClick', () => {
    const { getByText } = renderLocations({ locationId: '' });

    fireEvent.click(getByText('서울'));

    expect(handleClick).toBeCalled();
  });
});
