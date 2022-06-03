import { render } from '@testing-library/react';

import App from './App';

jest.mock('react-redux');

describe('App', () => {
  it('render App Title', () => {
    const { getByText } = render(<App />);

    expect(getByText('레스토랑 조회 구현하기').textContent).toBe('레스토랑 조회 구현하기');
  });
});
