import { render } from '@testing-library/react';

import App from './App';

function customRender() {
  return render(<App />);
}

describe('App', () => {
  test('renders regions', () => {
    const { queryByText } = customRender();

    expect(queryByText('서울(V)')).not.toBeNull();
  });

  test('renders categories', () => {
    const { queryByText } = customRender();

    expect(queryByText('한식')).not.toBeNull();
  });

  test('renders restaurants', () => {
    const { queryByText } = customRender();

    expect(queryByText('양천주가')).not.toBeNull();
  });
});
