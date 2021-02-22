import React from 'react';

import { fireEvent, render } from '@testing-library/react';

import { useSelector, useDispatch } from 'react-redux';

import RegionListContainer from './RegionListContainer';

jest.mock('react-redux');

describe('RegionListContainer', () => {
  const dispatch = jest.fn();

  beforeEach(() => {
    jest.clearAllMocks();

    useDispatch.mockImplementation(() => dispatch);
    useSelector.mockImplementation((selector) => selector({
      regions: [
        { id: 1, name: '서울' },
        { id: 2, name: '인천' },
        { id: 3, name: '부산' },
      ],
      selectedRegionID: 1,
    }));
  });

  it('지역들 중 버튼을 하나 누르면 dispatch를 실행한다.', () => {
    const { getByText } = render(<RegionListContainer />);
    fireEvent.click(getByText('인천'));
    expect(dispatch).toBeCalled();
  });
});
