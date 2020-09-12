import React from 'react';

import { render } from '@testing-library/react';

import { useSelector, useDispatch } from 'react-redux';

import App from './App';

describe('App', () => {
  const dispatch = jest.fn();
  useDispatch.mockImplementation(() => dispatch);
  useSelector.mockImplementation((selector) => selector({
    regions: [
      { id: 1, name: '서울' },
    ],
    categories: [
      { id: 1, name: '한식' },
    ],
  }));

  it('contains region, category data', () => {
    const { queryByText } = render(
      <App />,
    );
    expect(dispatch).toBeCalled();

    // expect(container).toHaveTextContent(/서울/);
    expect(queryByText(/한식/)).not.toBeNull();
    // expect(container).toHaveTextContent(/한식/);
  });
});
