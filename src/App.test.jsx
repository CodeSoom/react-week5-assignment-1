import { render } from '@testing-library/react';

import App from './App';

describe('App', () => {
  it('레스토랑 지역 목록을 그린다', () => {
    const { getByText } = render(<App />);

    expect(getByText(/서울/)).not.toBeNull();
    expect(getByText(/부산/)).not.toBeNull();
  });
});
