import { render } from "@testing-library/react";

import App from './App';

describe('App', () => {
  // 1. 지역목록을 보여준다!
  test('show region list', () => {
    const { getByText } = render((
      <App />
    ));

    expect(getByText(/대전/)).not.toBeNull();
  });
  // 2. 카테고리를 보여준다!
  test('show category list', () => {
    const { getByText } = render((
      <App />
    ));

    expect(getByText(/분식/)).not.toBeNull();
  });
});