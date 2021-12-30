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
    restaurant: {
      name: '모토',
      category: '일식',
      place: '서울',
    },
  }));

  const renderListCreatorContainer = () => render((<ListCreatorContainer />));

  it('listens "등록" button click event', () => {
    const { getByText } = renderListCreatorContainer();

    expect(getByText('등록')).toBeInTheDocument();

    fireEvent.click(getByText('등록'));

    expect(dispatch).toBeCalledWith({
      type: 'addRestaurant',
    });
  });

  it('changes to call onChange handler with createRestaurant', () => {
    const { getByDisplayValue } = renderListCreatorContainer();

    expect(getByDisplayValue('모토')).toBeInTheDocument();
    expect(getByDisplayValue('일식')).toBeInTheDocument();
    expect(getByDisplayValue('서울')).toBeInTheDocument();
  });
});
