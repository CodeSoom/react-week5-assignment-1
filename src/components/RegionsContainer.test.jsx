import { fireEvent, render } from '@testing-library/react';

import { useDispatch, useSelector } from 'react-redux';

import RegionsContainer from './RegionsContainer';

import initialState from '../../fixture/initialState';
import regions from '../../fixture/regions';

jest.mock('react-redux');

describe('RegionsContainer', () => {
  const dispatch = jest.fn();

  useDispatch.mockImplementation(() => dispatch);

  useSelector.mockImplementation((selector) => selector({
    ...initialState,
    regions,
  }));

  it('지역 목록을 가져오는 함수를 호출한다.', () => {
    render((<RegionsContainer />));

    expect(dispatch).toBeCalledTimes(1);
  });

  describe('handleClick이 호출되면', () => {
    it('selectRegion 함수에 props로 받은 name을 전달하여 호출한다.', () => {
      const { getByText } = render(<RegionsContainer />);

      fireEvent.click(getByText(regions[0].name, { exact: false }));

      expect(dispatch).toBeCalledWith({
        type: 'selectRegion',
        payload: { selectRegion: regions[0].name },
      });
    });
  });
});
