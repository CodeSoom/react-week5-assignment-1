import { render, fireEvent } from '@testing-library/react';

import App from './App';

describe('App', () => {
  describe('restaurant list', () => {
    it('shows restaurants after a region and a category are chosen', () => {
      const { getByText } = render((
        <App />
      ));

      expect(getByText('서울')).not.toBeNull();
      expect(getByText('한식')).not.toBeNull();
      fireEvent.click(getByText('서울'));
      fireEvent.click(getByText('한식'));

      expect(getByText('양천주가')).not.toBeNull();
      expect(getByText('한국식 초밥')).not.toBeNull();
      expect(getByText('김초밥')).not.toBeNull();
    });

    it('can be empty', () => {
      const { getByText, container } = render((
        <App />
      ));

      expect(getByText('부산')).not.toBeNull();
      expect(getByText('일식')).not.toBeNull();
      fireEvent.click(getByText('부산'));
      fireEvent.click(getByText('일식'));

      expect(container).not.toHaveTextContent('음식점');
    });
  });
});
