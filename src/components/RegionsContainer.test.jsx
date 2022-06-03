import { fireEvent, render } from '@testing-library/react';

import { useDispatch, useSelector } from 'react-redux';

import RegionsContainer from './RegionsContainer';

import regions from '../../fixture/regions';

jest.mock('react-redux');

describe('RegionsContainer', () => {
  const dispatch = jest.fn();

  useDispatch.mockImplementation(() => dispatch);

  useSelector.mockImplementation((selector) => selector({
    regions,
  }));

  it('지역 목록을 가져오는 함수를 호출한다.', () => {
    render((<RegionsContainer />));

    expect(dispatch).toBeCalledTimes(1);
  });

  describe('handleClick이 호출되면', () => {
    it('selectRegionId 함수에 props로 받은 id를 전달하여 호출한다.', () => {
      const { getByText } = render(<RegionsContainer />);

      fireEvent.click(getByText(regions[0].name, { exact: false }));

      expect(dispatch).toBeCalledWith({
        type: 'selectRegionId',
        payload: { selectRegionId: regions[0].id },
      });
    });
  });
});
