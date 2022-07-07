import { render } from '@testing-library/react';

import { useSelector, useDispatch } from 'react-redux';

import App from './App';

import regions from './fixtures/regions';
import categories from './fixtures/categories';

jest.mock('react-redux');

describe('App', () => {
  const dispatch = useDispatch();

  useDispatch.mockImplementation(() => dispatch);

  useSelector.mockImplementation((selector) => selector({
    regions,
    categories,
  }));

  function renderApp() {
    return render((
      <App />
    ));
  }

  it('regions가 보여집니다.', () => {
    const { getByText } = renderApp();

    regions.forEach(({ name }) => {
      expect(getByText(name)).not.toBeNull();
    });
  });

  it('categories가 보여집니다.', () => {
    const { getByText } = renderApp();

    categories.forEach(({ name }) => {
      expect(getByText(name)).not.toBeNull();
    });
  });
});
