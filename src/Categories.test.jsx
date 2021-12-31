import { render, fireEvent } from '@testing-library/react';

import Categories from './Categories';

/* 계획
1. 버튼이 잘보인다
2. 버튼이 잘 눌린다 -> v표시 잘 보인다
*/

describe('Categories', () => {
  it('render Restaurant Categories buttons', () => {
    const categories = [
      { id: 1, name: '한식' },
      { id: 2, name: '양식' },
    ];
    const { getByText } = render(
      <Categories restaurantCategories={categories} />,
    );

    expect(getByText(/한식/)).not.toBeNull();
    expect(getByText(/양식/)).not.toBeNull();
  });

  it('Restaurant Categories button clicked and rerender', () => {
    const handleClick = jest.fn();
    const currentCategory = 2;
    const categories = [
      { id: 1, name: '한식' },
      { id: 2, name: '양식' },
    ];
    const { getByText } = render(
      <Categories
        currentCategory={currentCategory}
        restaurantCategories={categories}
        onClick={handleClick}
      />,
    );

    fireEvent.click(getByText(/양식/));

    expect(handleClick).toBeCalledWith(2);
    // 상태값이 변한거는 <Regions />의 관심사가 아니다
    // RegExpr에서 ()은 캡쳐링 기능이다
    expect(getByText('양식 (V)')).not.toBeNull();
  });
});
