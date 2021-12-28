import { render } from '@testing-library/react';
import App from './App';

describe('App', () => {
  it('App 렌더링', () => {
    const { container } = render(<App />);

    expect(container).not.toBeNull();
  });

  it('렌더링 시, 지역 리스트가 노출 된다.', () => {
    const { container } = render(<App />);

    expect(container).toHaveTextContent('서울');
    expect(container).toHaveTextContent('대전');
  });
});
