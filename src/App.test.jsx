import { render } from "@testing-library/react";

test('App', () => {
  // 1. 지역목록을 보여준다!
  it('show region list', () => {
    const { getByText } = render((
      <App />
    ));

    expect(getByText(/대전/)).not.toBeNull();
  });
  // 2. 카테고리를 보여준다!
  it('show category list', () => {
    const { getByText } = render((
      <App />
    ));

    expect(getByText(/분식/)).not.toBeNull();
  });
});