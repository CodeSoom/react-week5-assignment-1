import { render, fireEvent } from '@testing-library/react';
import Category from './Category';
import { categories, selectedRegionAndCategory } from '../fixtures/data';

describe('Region', () => {
  const onClick = jest.fn();

  const renderCategory = () => render(
    <Category
      categories={categories}
      selectedRegionAndCategory={selectedRegionAndCategory}
      onClick={onClick}
    />,
  );

  it('지역 input이 보인다.', () => {
    const { getByText } = renderCategory();
    expect(getByText('양식')).not.toBeNull();
  });
  it('지역 input을 클릭하면 함수를 호출한다.', () => {
    const { getByText } = renderCategory();
    fireEvent.click(getByText('양식'));
    expect(onClick).toBeCalledWith({ id: 2, name: '양식' });
  });
  it('선택된 input 옆에는 체크표시가 된다.', () => {
    const { getByText } = renderCategory();
    expect(getByText('한식 v')).not.toBeNull();
  });
});
