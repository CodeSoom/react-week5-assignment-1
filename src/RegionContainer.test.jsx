import { fireEvent, render } from '@testing-library/react';

import { useDispatch, useSelector } from 'react-redux';

import regions from '../fixtures/region';

import RegionContainer from './RegionContainer';

jest.mock('react-redux');

describe('RegionContainer', () => {
  it('shows region', () => {
    useSelector.mockImplementation((selector) => selector({
      regions,
      categories: [],
      restaurants: [],
      selectRegion: 0,
      selectCategory: 0,
    }));

    const { queryByText } = render((
      <RegionContainer />
    ));

    expect(queryByText(/서울/)).not.toBeNull();
  });

  it('dispatchs select region', () => {
    const dispatch = jest.fn();

    useDispatch.mockImplementation(() => dispatch);

    useSelector.mockImplementation((selector) => selector({
      regions,
      categories: [],
      restaurants: [],
      selectRegion: 0,
      selectCategory: 0,
    }));

    dispatch.mockImplementation(() => dispatch);

    const { queryByText } = render((
      <RegionContainer />
    ));

    fireEvent.click(queryByText(/서울/));

    expect(dispatch).toBeCalledWith({
      type: 'setSelectRegion',
      payload: { selectRegionId: 1 },
    });
  });
});
