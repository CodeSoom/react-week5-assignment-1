import { render } from '@testing-library/react';

import App from './App';

describe('App', () => {
  const renderApp = () => render(<App />);

  it('아무 정보가 없으면, 안내 메시지를 보여줘야 한다.', () => {
    const { getByText } = renderApp();

    expect(getByText(/지역과 카테고리를 선택하세요./)).toBeInTheDocument();
  });
});
