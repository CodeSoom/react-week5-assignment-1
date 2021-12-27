import { render, fireEvent } from '@testing-library/react';

import App from './App';

// App 구성요소 렌더링

describe('App test', () => {
  const renderApp = () => render(<App />);

  it('renders text of List', () => {
    const { container } = renderApp();

    expect(container).toHaveTextContent('Restaurants');
    expect(container).toHaveTextContent('모토쿠라시');
    expect(container).toHaveTextContent('일식');
    expect(container).toHaveTextContent('서울 송파구');
  });

  it('renders Input', () => {
    const { getByPlaceholderText, getByText } = renderApp();

    expect(getByPlaceholderText(/이름/)).toBeInTheDocument();
    expect(getByPlaceholderText(/분류/)).toBeInTheDocument();
    expect(getByPlaceholderText(/주소/)).toBeInTheDocument();
    expect(getByText(/등록/)).toBeInTheDocument();
  });

  context('with put text and click "등록" button', () => {
    it('renders text', () => {
      const { getByPlaceholderText, getByText } = renderApp();

      fireEvent.change(getByPlaceholderText(/이름/), {
        target: { value: '마녀식당' },
      });
      fireEvent.change(getByPlaceholderText(/분류/), {
        target: { value: '양식' },
      });
      fireEvent.change(getByPlaceholderText(/주소/), {
        target: { value: '서울 강남구' },
      });
      fireEvent.click(getByText(/등록/));

      expect(getByPlaceholderText(/이름/).value).toBe('마녀식당');
      expect(getByPlaceholderText(/분류/).value).toBe('양식');
      expect(getByPlaceholderText(/주소/).value).toBe('서울 강남구');
    });
  });
});
