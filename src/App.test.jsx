import { render } from '@testing-library/react';

import { useDispatch, useSelector } from 'react-redux';

import App from './App';

jest.mock('react-redux');
jest.mock('./services/api');

describe('App', () => {
  it('renders categories', () => {
    const dispatch = jest.fn();

    useDispatch.mockImplementation(() => dispatch);

    useSelector.mockImplementation((selector) => selector({
      categories: [
        { id: 1, name: '한식' },
      ],
    }));

    const { queryByText } = render((
      <App />
    ));

    expect(dispatch).toBeCalledTimes(1);

    expect(queryByText(/한식/)).not.toBeNull();
  });
});
