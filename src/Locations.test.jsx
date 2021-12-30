import { render, fireEvent } from '@testing-library/react';

import Locations from './Locations';

import locations from '../fixtures/locations';

describe('Locations', () => {
  it('renders location list', () => {
    const { container } = render((
      <Locations locations={locations} />
    ));

    expect(container).toHaveTextContent(locations[0].name);
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
