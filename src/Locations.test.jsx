import { render } from '@testing-library/react';

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
});
