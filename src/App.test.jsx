import { render } from '@testing-library/react';

import { useSelector } from 'react-redux';

import App from './App';

import categories from '../fixture/categories';
import regions from '../fixture/regions';

describe('App', () => {
  useSelector.mockImplementation((selector) => selector({
    categories,
    regions,
  }));

  it('renders categories', () => {
    const { container } = render((
      <App />
    ));

    expect(container).toHaveTextContent('한식');
  });

  it('renders regions', () => {
    const { container } = render((
      <App />
    ));

    expect(container).toHaveTextContent('서울');
  });
});
