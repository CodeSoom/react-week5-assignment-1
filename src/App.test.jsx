import { render, fireEvent } from '@testing-library/react';

import App from './App';

jest.mock('react-redux');

describe('App', () => {
  describe('regions list', () => {
    it('shows regions', () => {
      const { getByText } = render((
        <App />
      ));

      expect(getByText('서울')).not.toBeNull();
      expect(getByText('대전')).not.toBeNull();
      expect(getByText('대구')).not.toBeNull();
    })

    it('add checked mark(V) on the clicked region label', () => {
      const { getByText } = render((
        <App />
      ));

      expect(getByText('서울')).not.toBeNull();
      fireEvent.click(getByText('서울'));
      expect(getByText('서울(V)')).not.toBeNull();
    });
  });

  describe('category list', () => {
    it('show categories', () => {
      const { getByText } = render((
        <App />
      ));

      expect(getByText('한식')).not.toBeNull();
      expect(getByText('중식')).not.toBeNull();
      expect(getByText('일식')).not.toBeNull();
    });

    it('add checked mark(V) on the clicked category label', () => {
      const { getByText } = render((
        <App />
      ));

      expect(getByText('한식')).not.toBeNull();
      fireEvent.click(getByText('한식'));
      expect(getByText('한식(V)')).not.toBeNull();
    });
  });

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
    })
  })
});