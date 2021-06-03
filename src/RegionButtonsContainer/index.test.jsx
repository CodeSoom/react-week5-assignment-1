import { fireEvent, render } from '@testing-library/react';

import { useDispatch, useSelector } from 'react-redux';

import RegionButtonsContainer from '.';

import { regions } from '../../fixtures/regions';

jest.mock('react-redux');

describe('RegionButtonsContainer', () => {
  const dispatch = jest.fn();

  beforeEach(() => {
    dispatch.mockClear();

    useDispatch.mockImplementation(() => dispatch);

    useSelector.mockImplementation((selector) => selector({
      regions,
      search: {
        region: '',
      },
    }));
  });

  it('renders RegionButtonsContainer', () => {
    const { getByRole } = render(<RegionButtonsContainer values={regions} />);

    regions.forEach(({ name }) => {
      getByRole('button', { name });
    });
  });

  it('passes "changeSearch" action', () => {
    const { getByRole } = render(<RegionButtonsContainer values={regions} />);

    expect(dispatch).not.toBeCalled();

    fireEvent.click(getByRole('button', { name: '부산' }));

    expect(dispatch).toBeCalledWith({
      type: 'changeSearch',
      payload: {
        search: 'region',
        value: '부산',
      },
    });
  });
});
