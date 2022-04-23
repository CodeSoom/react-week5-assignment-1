import { render } from '@testing-library/react';

import App from './App';

test('App', () => {
  const { queryByText } = render((
    <App />
  ));

  expect(queryByText(/서울/)).not.toBeNull();
  expect(queryByText(/인천/)).not.toBeNull();

  expect(queryByText(/한식/)).not.toBeNull();
  expect(queryByText(/분식/)).not.toBeNull();

  expect(queryByText(/조회된 레스토랑이 없습니다/)).not.toBeNull();
});
