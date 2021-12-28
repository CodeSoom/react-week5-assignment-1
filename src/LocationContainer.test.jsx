import { render } from '@testing-library/react';

import LocationContainer from './LocationContainer';

describe('LocationContainer', () => {
  it('renders location list', () => {
    const { getByText } = render((
      <LocationContainer />
    ));

    expect(getByText('서울')).not.toBeNull();
  });
});
