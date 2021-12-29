// Presentational Components: 레스토랑 목록을 추가해주는 것에 대한 테스트
import { render, fireEvent } from '@testing-library/react';

import ListCreator from './ListCreator';

jest.mock('react-redux');

describe('ListCreator', () => {
  const restaurant = {
    name: '모토쿠라시',
    category: '일식',
    place: '서울시 송파구',
  };
  const handleClick = jest.fn();

  const renderListCreator = () => render((
    <ListCreator
      restaurant={restaurant}
      onClick={handleClick}
    />
  ));

  it('renders "등록" button to calls onClick handler', () => {
    const { getByText } = renderListCreator();

    expect(getByText(/등록/)).toBeInTheDocument();

    fireEvent.click(getByText(/등록/));

    expect(handleClick).toBeCalled();
  });

  it('changes to call onChange handler with createRestaurant', () => {
    const { getByDisplayValue } = renderListCreator();

    expect(getByDisplayValue('모토쿠라시')).toBeInTheDocument();
    expect(getByDisplayValue('일식')).toBeInTheDocument();
    expect(getByDisplayValue('서울시 송파구')).toBeInTheDocument();
  });
});
