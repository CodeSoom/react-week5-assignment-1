import React from 'react';

import { render } from '@testing-library/react';

import App from './App';

describe('App', () => {
  it('지역을 출력합니다.', () => {
    const { queryByText } = render((<App />));

    expect(queryByText(/서울/)).not.toBeNull();
  });
});
