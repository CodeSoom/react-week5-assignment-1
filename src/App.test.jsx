import { render } from '@testing-library/react';

import { useSelector, useDispatch } from 'react-redux';

import App from './App';

import restaurants from '../fixtures/fixture';

jest.mock('react-redux');

describe('App', () => {
  const dispatch = jest.fn();

  useDispatch.mockImplementation(() => dispatch);

  useSelector.mockImplementation((selector) => selector({
    restaurants,
  }));

  const renderApp = () => render((<App />));

  it('sets restaurants', () => {
    const { container } = renderApp();

    expect(container).toHaveTextContent('Restaurants');
  });
});
