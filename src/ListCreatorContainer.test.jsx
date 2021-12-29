// Container Components:
// 추가되는 레스토랑 목록을 가져오는 액션을  ListCreator컴포넌트에 넘겨주는 것에 대한 테스트
import { render, fireEvent } from '@testing-library/react';

import { useDispatch, useSelector } from 'react-redux';

import ListCreatorContainer from './ListCreatorContainer';

jest.mock('react-redux');

describe('ListCreatorContainer', () => {
  const dispatch = jest.fn();

  useDispatch.mockImplementation(() => dispatch);

  useSelector.mockImplementation((selector) => selector({
  }));

  const renderListCreatorContainer = () => render((<ListCreatorContainer />));

  it('clicks to call onClick handler with addRestaurants', () => {
    const { getByText } = renderListCreatorContainer();

    expect(getByText(/등록/)).toBeInTheDocument();

    fireEvent.click(getByText(/등록/));

    expect(dispatch).toBeCalledWith({
      type: 'addRestaurant',
    });
  });
});
