import { render, fireEvent } from '@testing-library/react';
import { useDispatch, useSelector } from 'react-redux';
import CategoriesContainer from './CategoriesContainer';

describe('CategoriesContainer', () => {
  // TODO:
  // 1. selector에서 데이터 페칭해서 받아오기
  // 2. dispatch로 초기 데이터 렌더링하기
  // 3. input 클릭 시 함수 호출하기
  const dispatch = jest.fn();
  const renderCategoriesContainer = () => render(<CategoriesContainer />);
  jest.mock('react-redux');
  jest.mock('./services/api');

  useSelector.mockImplementation(() => [
    { id: 1, name: '한식' }, { id: 2, name: '양식' },
  ]);

  useDispatch.mockImplementation(() => dispatch);

  it('데이터 받기', () => {
    const { getByText } = renderCategoriesContainer();
    expect(getByText('한식')).not.toBeNull();
  });

  describe('button 클릭이 되면', () => {
    it('클릭 된 버튼의 데이터를 state에 저장한다', () => {
      const { getByText } = renderCategoriesContainer();
      fireEvent.click(getByText('한식'));
      expect(dispatch).toBeCalled();
    });
  });
});
