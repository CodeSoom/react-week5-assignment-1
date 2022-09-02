import { render } from '@testing-library/react';

import { useDispatch } from 'react-redux';

import App from './App';

jest.mock('react-redux');

describe('App', () => {
  const dispatch = jest.fn();

  useDispatch.mockImplementation(() => dispatch);

  afterEach(() => {
    jest.clearAllMocks();
  });

  it('loads regions & categories from API', () => {
    render((
      <App />
    ));

    expect(dispatch).toBeCalledTimes(2);
  });
});
