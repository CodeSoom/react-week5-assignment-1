import { render, fireEvent } from '@testing-library/react';
import { useSelector, useDispatch } from 'react-redux';

import CategoriesContainer from './CategoriesContainer';
import { categoriesData } from '../fixtures';
import { setCategoryActiveId } from '../actions';

jest.mock('react-redux');

describe('CategoriesContainer', () => {
  const dispatch = jest.fn();
  const renderCategoriesContainer = () => render(<CategoriesContainer />);

  context('카테고리 정보가 없으면,', () => {
    useSelector.mockImplementation((selector) => selector({
      categories: {
        categories: [],
        activeId: -1,
      },
    }));
    useDispatch.mockImplementation(() => dispatch);

    it('사용자에게 안내 메시지를 보여준다.', () => {
      const { getByText } = renderCategoriesContainer();

      expect(getByText(/카테고리 정보를 가져오세요./)).not.toBeNull();
    });
  });

  context('카테고리 정보가 있으면,', () => {
    beforeEach(() => {
      jest.clearAllMocks();

      useSelector.mockImplementation((selector) => selector({
        categories: {
          categories: categoriesData,
          activeId: -1,
        },
      }));
      useDispatch.mockImplementation(() => dispatch);
    });

    it('카테고리 정보를 화면에 보여준다.', () => {
      const { getByText } = renderCategoriesContainer();

      // expect(dispatch).toBeCalledWith(loadCategories());
      expect(getByText(categoriesData[0].name)).not.toBeNull();
      expect(getByText(categoriesData[1].name)).not.toBeNull();
    });

    it('카테고리 버튼을 클릭하면, setCategoryActionId 액션이 디스패치된다.', () => {
      const { getByText } = renderCategoriesContainer();

      fireEvent.click(getByText(categoriesData[0].name));

      expect(dispatch).toBeCalledWith(setCategoryActiveId(categoriesData[0].id));
    });
  });
});
