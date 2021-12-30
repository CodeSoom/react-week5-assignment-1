import { render, fireEvent } from '@testing-library/react';
import { useSelector, useDispatch } from 'react-redux';

import RegionsContainer from './RegionsContainer';
import { setRegionActiveId } from '../actions';
import { regionsData } from '../fixtures';

jest.mock('react-redux');

describe('RegionsContainer', () => {
  const dispatch = jest.fn();
  const renderRegionsContainer = () => render(<RegionsContainer />);

  beforeEach(() => {
    jest.clearAllMocks();

    useDispatch.mockImplementation(() => dispatch);
    useSelector.mockImplementation((selector) => selector({
      regions: {
        regions: [],
        activeId: -1,
      },
    }));
  });

  context('지역정보가 없으면,', () => {
    it('사용자에게 안내 메시지를 보여준다.', () => {
      const { getByText } = renderRegionsContainer();

      expect(getByText(/지역 정보를 가져오세요./)).toBeInTheDocument();
    });
  });

  context('지역정보가 있으면,', () => {
    const initialState = {
      regions: {
        regions: regionsData,
        activeId: -1,
      },
    };

    it('지역정보를 화면에 보여준다.', () => {
      useSelector.mockImplementation((selector) => selector(initialState));

      const { getByText } = renderRegionsContainer();

      expect(getByText(regionsData[0].name)).not.toBeNull();
      expect(getByText(regionsData[1].name)).not.toBeNull();
    });

    it('지역정보가 있는 버튼을 클릭하면, setRegionActionId 액션이 디스패치 된다.', () => {
      useSelector.mockImplementation((selector) => selector(initialState));

      const { getByText } = renderRegionsContainer();

      fireEvent.click(getByText(regionsData[0].name));
      // const regex = new RegExp(`${regionsData[0].name}`);

      expect(dispatch).toBeCalledWith(setRegionActiveId(regionsData[0].id));
      // expect(getByText(regex)).toHaveTextContent(/\(V\)/);
    });
  });
});
