import { render } from '@testing-library/react';

import { useSelector, useDispatch } from 'react-redux';

import { getRegions } from './store/async-actions';

import App from './App';

import regions from './fixtures/regions';
import categories from './fixtures/categories';

jest.mock('react-redux');
jest.mock('./store/async-actions');

describe('App', () => {
  const dispatch = jest.fn();

  useDispatch.mockImplementation(() => dispatch);

  useSelector.mockImplementation((selector) => selector({
    regions,
    categories,
  }));

  beforeEach(() => {
    jest.clearAllMocks();
  });

  function renderApp() {
    return render((
      <App />
    ));
  }

  it('regions API를 호출합니다.', () => {
    const { container } = renderApp();

    expect(dispatch).toHaveBeenCalledWith(getRegions());
    regions.forEach(({ name }) => {
      expect(container).toHaveTextContent(name);
    });
  });
});
