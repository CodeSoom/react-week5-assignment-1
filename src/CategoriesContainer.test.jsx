import { render, fireEvent } from '@testing-library/react';
import { useDispatch, useSelector } from 'react-redux';
import CategoriesContainer from './CategoriesContainer';

describe('CategoriesContainer', () => {
  const dispatch = jest.fn();
  const renderCategoriesContainer = () => render(<CategoriesContainer />);

  jest.mock('react-redux');
  jest.mock('./services/api');

  useSelector.mockImplementation(() => ({
    categories:
    [{ id: 1, name: '한식' }, { id: 2, name: '양식' }],
  }));

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
