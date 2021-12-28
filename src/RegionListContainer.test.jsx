import { fireEvent, render } from '@testing-library/react';
import { useDispatch, useSelector } from 'react-redux';

import RegionListContainer from './RegionListContainer';
import { changeRegion } from './store/actions';

jest.mock('react-redux');

describe('RegionListContainer', () => {
  const dispatch = jest.fn();

  const renderComponent = () => render(<RegionListContainer />);

  beforeEach(() => {
    jest.clearAllMocks();

    useSelector.mockImplementation((selector) => selector({
      selected: {
        regionId: null,
      },
      regions: [
        {
          id: 1,
          name: '서울',
        },
        {
          id: 2,
          name: '대전',
        },
        {
          id: 3,
          name: '대구',
        },
        {
          id: 4,
          name: '부산',
        },
        {
          id: 5,
          name: '광주',
        },
        {
          id: 6,
          name: '강원도',
        },
        {
          id: 7,
          name: '인천',
        },
        {
          id: 8,
          name: '제주',
        },
        {
          id: 9,
          name: '전주',
        },
        {
          id: 10,
          name: '순천',
        },
        {
          id: 11,
          name: '독도',
        },
      ],
    }));
    useDispatch.mockImplementation(() => dispatch);
  });

  it('RegionListContainer 렌더링', () => {
    const { container } = renderComponent();

    expect(container).not.toBeNull();
  });

  it('렌더링 시, 지역 리스트가 노출 된다.', () => {
    const { container } = renderComponent();

    expect(container).toHaveTextContent('서울');
    expect(container).toHaveTextContent('대전');
  });

  it('버튼 클릭 시, changeRegion 이 dispatch 된다.', () => {
    const { getByRole } = renderComponent();

    const button = getByRole('button', { name: /서울/ });
    fireEvent.click(button);

    expect(dispatch).toBeCalledWith(changeRegion(1));
  });
});
