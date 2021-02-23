import React from 'react';

import { render } from '@testing-library/react';

import App from './App';
import { useSelector } from '../__mocks__/react-redux';

describe('App', () => {
  beforeEach(() => {
    useSelector.mockImplementation((selector) => selector({
      regions: [{ id: 1, title: '서울' }],
    }));
  });

  it('renders regions', () => {
    const { queryByText } = render(<App />);
    expect(queryByText('서울')).not.toBeNull();
  });
});
