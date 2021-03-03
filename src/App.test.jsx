import React from 'react';

import { useDispatch, useSelector } from 'react-redux';

import { render } from '@testing-library/react';

import App from './App';

jest.mock('react-redux');

describe('App', () => {
  const dispatch = jest.fn();

  beforeEach(() => {
    dispatch.mockClear();

    useDispatch.mockImplementation(() => dispatch);

    useSelector.mockImplementation((selector) => selector({
      regions: [
        { id: 1, name: '서울' },
      ],
      categories: [
        { id: 1, name: '한식' },
      ],
      restaurants: [
        { id: 1, name: '라이브볼' },
      ],
    }));
  });

  it('renders title', () => {
    const { container } = render(<App />);

    expect(container).toHaveTextContent(/Restaurant List/);
  });

  it('renders region buttons', () => {
    const { queryByText } = render(<App />);

    expect(dispatch).toBeCalled();

    expect(queryByText('서울')).not.toBeNull();
  });

  it('renders category buttons', () => {
    const { queryByText } = render(<App />);

    expect(dispatch).toBeCalled();

    expect(queryByText('한식')).not.toBeNull();
  });

  it('renders restaurants', () => {
    const { container } = render(<App />);

    expect(container).toHaveTextContent('라이브볼');
  });
});
