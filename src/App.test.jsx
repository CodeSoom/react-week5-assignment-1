import { render } from '@testing-library/react';

import { useDispatch, useSelector } from 'react-redux';

import App from './App';

jest.mock('react-redux');

describe('App', () => {
  const dispatch = jest.fn();

  useDispatch.mockImplementation(() => dispatch);
  useSelector.mockImplementation((selector) => selector({
    locations: [],
  }));

  it('renders location list', () => {
    const { queryByText } = render((
      <App />
    ));

    expect(dispatch).toBeCalledWith({
      type: 'setLocation',
      payload: {
        location: [],
      },
    });

    expect(queryByText('지역')).not.toBeNull();
  });
});
