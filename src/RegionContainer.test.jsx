import { fireEvent, render } from '@testing-library/react';

import { useDispatch, useSelector } from 'react-redux';

import RegionContainer from './RegionContainer';

import regions from '../fixtures/regions';

jest.mock('react-redux');

test('RegionContainer', () => {
  const dispatch = jest.fn();
  useDispatch.mockImplementation(() => dispatch);
  useSelector.mockImplementation((selector) => selector({
    regions,
  }));

  const { container, getByText, getAllByRole } = render(<RegionContainer />);

  expect(container).toHaveTextContent('서울');

  expect(getAllByRole('listitem')).not.toBeNull();
  expect(getByText(regions[1].name)).not.toBeNull();

  fireEvent.click(getByText(regions[1].name));

  expect(dispatch).toBeCalled();
});
