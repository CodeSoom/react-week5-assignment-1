import { fireEvent, render } from '@testing-library/react';
import { useDispatch, useSelector } from 'react-redux';

import { selectRegion } from '../redux_module/selectedSlice';
import RegionListContainer from './RegionListContainer';

jest.mock('react-redux');

describe('RegionListContainer', () => {
  beforeEach(() => {
    useSelector.mockImplementation((selector) => selector({
      selected: {
        region: '서울',
      },
      groups: {
        regions: ['서울', '부산'],
      },
    }));
  });

  it('renders buttons with (V) when selected', () => {
    const { getByRole, queryByRole } = render(<RegionListContainer />);

    expect(getByRole('button', { name: '서울(V)' })).toBeInTheDocument();
    expect(queryByRole('button', { name: '서울' })).not.toBeInTheDocument();

    expect(getByRole('button', { name: '부산' })).toBeInTheDocument();
  });

  it('change region with button', () => {
    const dispatch = jest.fn();
    useDispatch.mockImplementation(() => dispatch);

    const { getByRole } = render(<RegionListContainer />);

    fireEvent.click(getByRole('button', { name: '서울(V)' }));
    expect(dispatch).toBeCalledWith(selectRegion('서울'));

    fireEvent.click(getByRole('button', { name: '부산' }));
    expect(dispatch).toBeCalledWith(selectRegion('부산'));
  });
});
