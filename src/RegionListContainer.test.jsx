import { useDispatch, useSelector } from 'react-redux';

import { fireEvent, render } from '@testing-library/react';

import RegionListContainer from './RegionListcontainer';

jest.mock('react-redux');

describe('RegionListContainer', () => {
  beforeEach(() => {
    jest.clearAllMocks();
  });

  const dispatch = jest.fn();

  useDispatch.mockImplementation(() => dispatch);

  useSelector.mockImplementation((selector) => selector({
    regionList: [
      {
        id: 1, name: '서울',
      },
      {
        id: 2, name: '포항',
      },
    ],
  }));

  it('render regionList name', () => {
    const { queryByText } = render((
      <RegionListContainer />
    ));

    expect(queryByText(/서울/)).not.toBeNull();
  });

  it('clicks Region Button', () => {
    const { getAllByText } = render((
      <RegionListContainer />
    ));

    fireEvent.click(getAllByText(/서울/)[0]);

    expect(dispatch).toBeCalledWith({
      type: 'selectRegion',
      payload: {
        id: 1,
      },
    });
  });
});
