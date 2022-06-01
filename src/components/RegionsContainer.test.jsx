import { render } from '@testing-library/react';

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

  test('지역 목록을 가져오는 함수를 호출한다.', () => {
    render((<RegionsContainer />));

    expect(dispatch).toBeCalledTimes(1);
  });
});
