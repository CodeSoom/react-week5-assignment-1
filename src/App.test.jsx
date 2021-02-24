import React from 'react';

import { useSelector } from 'react-redux';

import { render } from '@testing-library/react';

import App from './App';

jest.mock('react-redux');

describe('App', () => {
  beforeEach(() => {
    useSelector.mockImplementation((selector) => selector({
      regions: [{ id: 1, name: '서울' }],
    }));
  });

  it('renders title', () => {
    const { container } = render(<App />);

    expect(container).toHaveTextContent(/Restaurant List/);
  });

  it('renders region buttons', () => {
    const { queryByText } = render(<App />);

    expect(queryByText('서울')).not.toBeNull();
  });

  it('renders category buttons', () => {
    const { queryByText } = render(<App />);

    expect(queryByText('한식')).not.toBeNull();
    expect(queryByText('중식')).not.toBeNull();
    expect(queryByText('일식')).not.toBeNull();
    expect(queryByText('양식')).not.toBeNull();
    expect(queryByText('분식')).not.toBeNull();
  });
});
