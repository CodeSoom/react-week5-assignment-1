import React from 'react';

import { render } from '@testing-library/react';

import App from './App';

describe('App', () => {
  it('레스토랑 지역 목록을 보여준다.', () => {
    const { getByText } = render((
      <App />
    ));

    expect(getByText('서울')).not.toBeNull();
    expect(getByText('대전')).not.toBeNull();
    expect(getByText('대구')).not.toBeNull();
    expect(getByText('부산')).not.toBeNull();
    expect(getByText('광주')).not.toBeNull();
    expect(getByText('강원도')).not.toBeNull();
    expect(getByText('인천')).not.toBeNull();
  });
});
