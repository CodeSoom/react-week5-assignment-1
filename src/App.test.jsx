import { render } from '@testing-library/react';
import App from './App';

describe('App', () => {
  it('renders categories', () => {
    const categories = ['한식', '중식', '일식', '양식', '분식'];

    const { container } = render(<App />);
    categories.forEach((category) => {
      expect(container).toHaveTextContent(category);
    });
  });
});
