import { render, fireEvent } from '@testing-library/react';
import { useDispatch } from 'react-redux';

import { setRegion } from './actions';

import regions from '../fixtures/regions';

import Regions from './Regions';

jest.mock('react-redux');

beforeEach(() => {
  jest.clearAllMocks();
});

test('Regions', () => {
  const dispatch = jest.fn();

  useDispatch.mockImplementation(() => dispatch);

  const { getByText } = render(<Regions regions={regions} />);

  const button = getByText('부산');

  fireEvent.click(button);

  expect(dispatch).toBeCalledWith(setRegion({
    region: '부산',
  }));
});
