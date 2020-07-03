import React from 'react';

import { render } from '@testing-library/react';

import App from './App';

describe('App', () => {
  it('show restaurant regions', () => {
    const { getByText } = render((
      <App />
    ));

    expect(getByText('서울')).toBeInTheDocument();
    expect(getByText('인천')).toBeInTheDocument();
    expect(getByText('광주')).toBeInTheDocument();
  });
});
