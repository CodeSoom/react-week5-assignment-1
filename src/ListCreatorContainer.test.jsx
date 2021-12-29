// Container Components:
// 추가되는 레스토랑 목록을 가져오는 액션을  ListCreator컴포넌트에 넘겨주는 것에 대한 테스트
import { render, fireEvent } from '@testing-library/react';

import { useSelector, useDispatch } from 'react-redux';

import ListCreatorContainer from './ListCreatorContainer';

jest.mock('react-redux');

describe('ListCreatorContainer', () => {
  const dispatch = useDispatch();

  useDispatch.mockImplementation(() => dispatch);

  useSelector.mockImplementation((selector) => selector({
  }));

  const renderListCreatorContainer = () => render((<ListCreatorContainer />));

  describe('calling onClick handler', () => {
    it('calls dispatch with addRestaurants', () => {
      const { getByText } = renderListCreatorContainer();

      expect(getByText(/등록/)).toBeInTheDocument();

      fireEvent.click(getByText(/등록/));

      expect(dispatch).toBeCalledWith({
        type: 'addRestaurants',
      });
    });
  });
});
