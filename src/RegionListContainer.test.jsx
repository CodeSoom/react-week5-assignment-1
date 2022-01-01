import { fireEvent, render } from '@testing-library/react';
import { useDispatch, useSelector } from 'react-redux';

import RegionListContainer from './RegionListContainer';
import { changeRegion } from './store/actions';
import { REGIONS } from './fixture';

jest.mock('react-redux');

describe('RegionListContainer', () => {
  const dispatch = jest.fn();

  const renderRegionListContainer = () => render(<RegionListContainer />);

  beforeEach(() => {
    jest.clearAllMocks();

    useSelector.mockImplementation((selector) => selector({
      selected: {
        regionName: null,
      },
      regions: REGIONS,
    }));
    useDispatch.mockImplementation(() => dispatch);
  });

  it('RegionListContainer 렌더링', () => {
    const { container } = renderRegionListContainer();

    expect(container).not.toBeNull();
  });

  it('렌더링 시, 지역 리스트가 노출 된다.', () => {
    const { container } = renderRegionListContainer();

    expect(container).toHaveTextContent('서울');
    expect(container).toHaveTextContent('대전');
  });

  it('버튼 클릭 시, changeRegion 이 dispatch 된다.', () => {
    const { getByRole } = renderRegionListContainer();

    const button = getByRole('button', { name: /서울/ });
    fireEvent.click(button);

    expect(dispatch).toBeCalledWith(changeRegion('서울'));
  });
});
