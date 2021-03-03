import React from 'react';

import { render } from '@testing-library/react';

import { useDispatch, useSelector } from 'react-redux';

import App from './App';

jest.mock('react-redux');

test('App', () => {
  const dispatch = jest.fn();
  useDispatch.mockImplementation(() => dispatch);

  useSelector.mockImplementation((selector) => selector({
    regions: [{ id: 1, name: '서울' }],
    categories: [{ id: 1, name: '한식' }],
  }));

  const { container } = render(
    <App />,
  );
  expect(container).toHaveTextContent('서울');
  expect(container).toHaveTextContent('한식');
});
