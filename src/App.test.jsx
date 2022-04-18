import { render } from '@testing-library/react';

import { useSelector } from 'react-redux';

import App from './App';

import categories from '../fixture/categories';

describe('App', () => {
  useSelector.mockImplementation((selector) => selector({
    categories,
  }));

  it('renders categories', () => {
    const { container } = render((
      <App />
    ));

    expect(container).toHaveTextContent('한식');
  });

  it('renders addresses', () => {
    const { container } = render((
      <App />
    ));

    expect(container).toHaveTextContent('서울');
  });
});
