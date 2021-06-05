import { fireEvent, render } from '@testing-library/react';

import { useDispatch, useSelector } from 'react-redux';

import RegionsContainer from './RegionsContainer';

import { regions } from '../../../fixtures/regions';

jest.mock('react-redux');
jest.mock('../../services/api');

describe('RegionsContainer', () => {
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

  it('renders RegionsContainer', () => {
    const { getByRole } = render(<RegionsContainer values={regions} />);

    regions.forEach(({ name }) => {
      getByRole('button', { name });
    });
  });

  it('passes "changeSearch" action', () => {
    const { getByRole } = render(<RegionsContainer values={regions} />);

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
