import { render, screen, fireEvent } from '@testing-library/react';
import { useDispatch, useSelector } from 'react-redux';

import RegionsContainer from './RegionsContainer';
import regions from './fixtures/regions';

jest.mock('react-redux');
jest.mock('./services/api');

describe('RegionsContainer', () => {
  const dispatch = jest.fn();

  useDispatch.mockImplementation(() => dispatch);
  useSelector.mockImplementation((selector) => selector({
    regions: [],
  }));

  it('지역 리스트를 화면에 렌더한다.', () => {
    render(<RegionsContainer />);

    expect(screen.getByRole('list')).toBeInTheDocument();
  });

  it('지역 체크 업데이트 액션을 실행한다.', () => {
    useSelector.mockImplementation((selector) => selector({
      regions,
    }));

    render(<RegionsContainer />);

    fireEvent.click(screen.getAllByRole('button')[0]);

    expect(dispatch).toBeCalledWith({
      type: 'checkRegion',
      payload: {
        checkedRegionId: 1,
      },
    });
  });
});
