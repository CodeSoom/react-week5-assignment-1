import React from 'react';

import App from './App';

import { render } from '@testing-library/react';

describe('App', () => {
  it('지역들을 보여준다.', () => {
    const { queryByText } = render(<App />);
    expect(queryByText('서울')).toBeInTheDocument();
    expect(queryByText('부산')).toBeInTheDocument();
  })
})