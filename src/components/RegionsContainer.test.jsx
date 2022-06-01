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

  test('setRegion 함수가 호출된다.', () => {
    render((<RegionsContainer />));

    expect(dispatch).toBeCalledWith({
      type: 'setRegions',
      payload: {
        regions,
      },
    });
  });
});
