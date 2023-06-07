import { render, fireEvent } from '@testing-library/react';
import { useDispatch, useSelector } from 'react-redux';
import { categories } from '../fixtures/data';
import { setSelectedRegionAndCategory } from './action';
import CategoriesContainer from './CategoriesContainer';

describe('CategoriesContainer', () => {
  const dispatch = jest.fn();
  const renderCategoriesContainer = () => render(<CategoriesContainer />);

  jest.mock('react-redux');
  jest.mock('./services/api');

  useSelector.mockImplementation(() => ({ categories }));

  useDispatch.mockImplementation(() => dispatch);

  it('데이터 받기', () => {
    const { getByText } = renderCategoriesContainer();
    expect(getByText(categories[0].name)).not.toBeNull();
  });

  describe('button 클릭이 되면', () => {
    it('클릭 된 버튼의 데이터를 state에 저장한다', () => {
      const { getByText } = renderCategoriesContainer();
      // expect(dispatch).not.toBeCalled();
      fireEvent.click(getByText(categories[0].name));
      expect(dispatch).toBeCalledWith(setSelectedRegionAndCategory({
        selectedRegion: undefined,
        selectedCategory: categories[0],
      }));
    });
  });

  // it('dispatch가 실행된다', () => {
  //   const category = categories[0];
  //   renderCategoriesContainer(category);

  //   expect(dispatch).not.toBeCalled();

  //   fireEvent.click(screen.getByText(category.name));

  //   expect(dispatch).toBeCalledWith(selectCategory(category.id));
  // });
});
