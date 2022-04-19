import { render } from '@testing-library/react';
import { useSelector } from 'react-redux';

import App from './App';

describe('App', () => {
  useSelector.mockImplementation((selector) => selector({
    categories: [
      { id: 1, name: '한식' },
    ],
  }));

  it('renders categories', () => {
    const { queryByText } = render((
      <App />
    ));

    expect(queryByText(/한식/)).not.toBeNull();
  });
});
