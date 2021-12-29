import { useDispatch } from 'react-redux';

import reducer from './reducer';

jest.mock('react-redux');

describe('reducer test', () => {
  const dispatch = useDispatch(() => dispatch);
  it('sets restaurants', () => {
  });
});
