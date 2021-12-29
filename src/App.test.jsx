import { render } from '@testing-library/react';

import { useSelector } from 'react-redux';

import App from './App';

jest.mock('react-redux');

describe('App', () => {
  useSelector.mockImplementation((selector) => selector({
    locations: [],
  }));

  it('renders location list', () => {
    const { queryByText } = render((
      <App />
    ));

    expect(queryByText('지역')).not.toBeNull();
  });
});
