import { render } from '@testing-library/react';

import App from './App';

describe('App', () => {
  const { getByText } = render((
    <App />
  ));

  describe('제목 표시', () => {
    it('제목이 보인다', () => {
      expect(getByText(/지역/)).not.toBeNull();
      expect(getByText(/카테고리/)).not.toBeNull();
    });
  });
});
