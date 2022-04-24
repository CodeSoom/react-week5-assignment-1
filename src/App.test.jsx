import { render } from '@testing-library/react';

import { useDispatch, useSelector } from 'react-redux';

import App from './App';

import categories from '../fixture/categories';
import regions from '../fixture/regions';

describe('App', () => {
  beforeEach(() => {
    jest.clearAllMocks();
  });

  const dispatch = jest.fn();

  useDispatch.mockImplementation(() => dispatch);

  useSelector.mockImplementation((selector) => selector({
    categories,
    regions,
  }));

  it('renders regions, categories and restaurants', () => {
    const { container } = render((
      <App />
    ));

    expect(dispatch).toBeCalled();

    expect(container).toHaveTextContent('한식');
    expect(container).toHaveTextContent('서울');
  });
});
