import React from 'react';

import { render } from '@testing-library/react';

import Location from './Location';

import locations from '../fixtures/locations';

describe('Location', () => {
  it('지역을 출력합니다.', () => {
    const { queryByText } = render((<Location locations={locations} />));

    locations.forEach((location) => {
      expect(queryByText(location.name)).not.toBeNull();
    });
  });
});
