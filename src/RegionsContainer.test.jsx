import React from 'react';

import { fireEvent, render } from '@testing-library/react';

import { useSelector, useDispatch } from 'react-redux';

import RegionsContainer from './RegionsContainer';

import region from '../fixture/region';

jest.mock('react-redux');

describe('RegionsContainer', () => {
  const dispatch = jest.fn();

  beforeEach(() => {
    jest.clearAllMocks();

    useDispatch.mockImplementation(() => dispatch);
    useSelector.mockImplementation((selector) => selector({
      regions: region,
      selectedRegionId: 1,
    }));
  });

  it('지역들 중 버튼을 하나 누르면 dispatch를 실행한다.', () => {
    const { getByText } = render(<RegionsContainer />);
    fireEvent.click(getByText('인천'));
    expect(dispatch).toBeCalled();
  });
});
