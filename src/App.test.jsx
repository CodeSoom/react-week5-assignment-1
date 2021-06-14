import { render } from '@testing-library/react';
import { useDispatch, useSelector } from 'react-redux';

import App from './App';

jest.mock('react-redux');
jest.mock('./services/api.js');

describe('App', () => {
  it('renders categories', () => {
    const dispatch = jest.fn();
    useDispatch.mockImplementation(() => dispatch);

    useSelector.mockImplementation((selector) => selector({
      regions: [{ id: 1, name: '서울' }],
    }));
    const { getByText } = render(<App />);

    expect(dispatch).toBeCalledTimes(1);
  });
});
