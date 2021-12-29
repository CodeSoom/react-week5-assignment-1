// Presentational Components:
// 레스토랑 목록을 추가해주는 것에 대한 테스트
import { render, fireEvent } from '@testing-library/react';

import ListCreator from './ListCreator';

jest.mock('react-redux');

describe('ListCreator', () => {
  const handleClick = jest.fn();

  const renderListCreator = () => render((
    <ListCreator
      onClick={handleClick}
    />
  ));

  it('renders "등록" button to calls onClick handler', () => {
    const { getByText } = renderListCreator();

    expect(getByText(/등록/)).toBeInTheDocument();

    fireEvent.click(getByText(/등록/));

    expect(handleClick).toBeCalled();
  });
});
