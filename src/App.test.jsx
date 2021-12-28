import { render } from '@testing-library/react';
import App from './App';

describe('App', () => {
  const renderApp = () => render(<App />);

  it('App 렌더링', () => {
    const { container } = renderApp();

    expect(container).not.toBeNull();
  });

  it('렌더링 시, 지역 리스트가 노출 된다.', () => {
    const { container } = renderApp();

    expect(container).toHaveTextContent('서울');
    expect(container).toHaveTextContent('대전');
  });

  it('렌더링 시, 카테고리 리스트가 노출된다.', () => {
    const { container } = renderApp();

    expect(container).toHaveTextContent('한식');
    expect(container).toHaveTextContent('중식');
  });
});
