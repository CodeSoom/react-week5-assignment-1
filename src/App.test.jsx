import { render } from '@testing-library/react';
import { useSelector, useDispatch } from 'react-redux';

import App from './App';

import {
  regions,
  region,
  categories,
  category,
} from '../fixtures/staticData';

jest.mock('react-redux');
jest.mock('./services/api');

function customRender() {
  return render(<App />);
}

describe('App', () => {
  useSelector.mockImplementation((selector) => selector({
    regions,
    region,
    categories,
    category,
  }));

  const dispatch = jest.fn();
  useDispatch.mockImplementation(() => dispatch);

  beforeEach(() => {
    jest.clearAllMocks();
  });

  context('with selected region and category', () => {
    test('renders regions', () => {
      const { queryByText } = customRender();

      expect(queryByText('서울(V)')).not.toBeNull();
    });

    test('renders categories', () => {
      const { queryByText } = customRender();

      expect(queryByText('한식(V)')).not.toBeNull();
    });

    test('renders restaurants', () => {
      const { queryByText } = customRender();

      expect(queryByText('양천주가')).not.toBeNull();
    });
  });
});
