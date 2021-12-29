import { render } from '@testing-library/react';
import { useDispatch, useSelector } from 'react-redux';

import App from './App';

jest.mock('react-redux');
jest.mock('./services/api');

describe('App', () => {
  const dispatch = jest.fn();
  useDispatch.mockImplementation(() => dispatch);
  useSelector.mockImplementation((selector) => selector({
    categories: [],
  }));

  context('when load', () => {
    it('set regions and categories', () => {
      render(<App />);

      // expect(dispatch).toBeCalled();
      expect(dispatch).toBeCalledTimes(2);
    });
  });
});
