import { render } from '@testing-library/react';
import App from './App';

describe('App', () => {
  it('renders categories', () => {
    const categories = ['한식', '중식', '일식', '양식', '분식'];

    const { getByRole } = render(<App />);
    categories.forEach((category) => {
      expect(getByRole('button', { name: category }));
    });
  });
  it('renders regions', () => {
    const regions = ['서울', '대전', '대구', '부산', '광주', '강원도', '인천'];

    const { getByRole } = render(<App />);
    regions.forEach((region) => {
      expect(getByRole('button', { name: region }));
    });
  });
});
