import { render } from '@testing-library/react';
import { useSelector, useDispatch } from 'react-redux';

import App from './App';

import {
  regions,
  region,
} from '../fixtures/staticData';

jest.mock('react-redux');

function customRender() {
  return render(<App />);
}

describe('App', () => {
  useSelector.mockImplementation((selector) => selector({
    regions,
    region,
  }));

  const dispatch = jest.fn();
  useDispatch.mockImplementation(() => dispatch);

  test('renders regions', () => {
    const { queryByText } = customRender();

    expect(queryByText('서울(V)')).not.toBeNull();
  });

  test('renders categories', () => {
    const { queryByText } = customRender();

    expect(queryByText('한식')).not.toBeNull();
  });

  test('renders restaurants', () => {
    const { queryByText } = customRender();

    expect(queryByText('양천주가')).not.toBeNull();
  });
});
