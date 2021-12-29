import { fireEvent, render } from '@testing-library/react';

import { useSelector, useDispatch } from 'react-redux';

import CategoriesContainer from './CategoriesContainer';

import { setSelectedCategory } from './actions';

import { categories } from '../__fixtures__/categories';

jest.mock('react-redux');

describe('CategoriesContainer', () => {
  const dispatch = jest.fn();
  useDispatch.mockImplementation(() => dispatch);
  useSelector.mockImplementation((selector) => selector({
    categories,
  }));

  it('get categories, when load', () => {
    const { getByRole } = render(
      <CategoriesContainer />,
    );

    categories.forEach((category) => {
      expect(getByRole('button', { name: category.name })).toBeInTheDocument();
    });
  });

  // TODO: 궁금한 점 물어보기
  // Category 컨테이너에서 selectedCategory 값을 변경하는 로직이 있음.
  // 이 부분을 어떻게 테스트해야하나?? => button 이 눌려야 해당 dispatch 가 호출되는데
  // 버튼을 클릭해서 테스트 해야하는지 궁금
  it('calls click handler, calls "setSelectedCategory dispatch" with the clicked category', () => {
    const { getByRole } = render(
      <CategoriesContainer />,
    );
    const clickedButton = categories[0];

    fireEvent.click((getByRole('button', { name: clickedButton.name })));

    expect(dispatch).toBeCalledWith(setSelectedCategory(clickedButton));
  });
});
