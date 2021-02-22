import React from 'react';

import { render } from '@testing-library/react';

describe('App', () => {
  it('지역들을 보여준다.', () => {
    const { queryByText } = render(<App />);
    expect(queryByText('서울')).toBeInTheDocument();
  })
})