import React from 'react';

import { render } from '@testing-library/react';

import App from './App';

import locations from '../fixtures/locations';

describe('App', () => {
  it('지역을 출력합니다.', () => {
    const { queryByText } = render((<App />));

    locations.forEach((location) => {
      expect(queryByText(location.name)).not.toBeNull();
    });
  });
});
