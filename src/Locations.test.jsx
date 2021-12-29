import { render, fireEvent } from '@testing-library/react';

import Locations from './Locations';

import locations from '../fixtures/locations';

describe('Locations', () => {
  it('renders location list', () => {
    const { getByText } = render((
      <Locations locations={locations} />
    ));

    expect(getByText('서울')).not.toBeNull();
    expect(getByText('대구')).not.toBeNull();
  });

  it('changes state by clicking the location button', () => {
    const handleClick = jest.fn();
    const { getByText } = render((
      <Locations
        location=""
        locations={locations}
        onClick={handleClick}
      />
    ));

    fireEvent.click(getByText('서울'));

    expect(handleClick).toBeCalledWith('서울');
  });
});
