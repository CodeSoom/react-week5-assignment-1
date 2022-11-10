import { render } from '@testing-library/react';

import { useSelector, useDispatch } from 'react-redux';

import App from './App';

import regions from '../fixtures/regions';
import categories from '../fixtures/categories';

jest.mock('react-redux');

describe('App', () => {
  const dispatch = jest.fn();

  function renderApp() {
    return render((<App />));
  }

  useDispatch.mockImplementation(() => dispatch);

  useSelector.mockImplementation((selector) => selector({
    regions,
    categories,
  }));

  it('App이 렌더링된다.', () => {
    const { getByText } = renderApp();

    expect(getByText('서울')).not.toBeNull();
    expect(getByText('한식')).not.toBeNull();
  });
});
