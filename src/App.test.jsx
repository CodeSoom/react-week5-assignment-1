import { render } from '@testing-library/react';

import { useDispatch } from 'react-redux';

import App from './App';

jest.mock('react-redux');

describe('App', () => {
  const dispatch = jest.fn();
  useDispatch.mockImplementation(() => dispatch);

  it('set categories state, when load', () => {
    render(<App />);

    expect(dispatch).toBeCalled();
  });
});
