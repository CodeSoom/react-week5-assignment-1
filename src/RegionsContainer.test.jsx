import { fireEvent, render } from '@testing-library/react';
import { useSelector, useDispatch } from 'react-redux';
import { selectRegion } from './actions';

import RegionsContainer from './RegionsContainer';

jest.mock('react-redux');

beforeEach(() => {
  jest.clearAllMocks();
});

test('RegionsContainer', () => {
  const dispatch = jest.fn();

  useDispatch.mockImplementation(() => dispatch);
  useSelector.mockImplementation((selector) => selector({
    regions: [{
      id: 100,
      name: '테스트',
    }],
    region: {
      id: 1,
      name: '서울',
    },
  }));

  const { container, getByText } = render(<RegionsContainer />);

  expect(container).toHaveTextContent('테스트');

  fireEvent.click(getByText('테스트'));

  expect(dispatch).toBeCalledWith(selectRegion({ regionId: 100 }));
});
