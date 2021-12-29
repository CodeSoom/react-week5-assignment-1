import { fireEvent, render } from '@testing-library/react';
import Categories from './Categories';

describe('Categories', () => {
  it('전달된 카테고리들을 노출한다.', () => {
    const categories = [
      { id: 1, name: '한식' },
    ];
    const { getByText } = render(<Categories categories={categories} />);

    expect(getByText('한식')).not.toBeNull();
  });

  it('지역을 클릭하면 onClick 함수를 실행한다.', () => {
    const categories = [
      { id: 1, name: '한식' },
    ];
    const handleCategory = jest.fn();
    const { getByText } = render(
      <Categories
        onClick={handleCategory}
        categories={categories}
      />,
    );

    fireEvent.click(getByText('한식'));

    expect(handleCategory).toBeCalledWith({ id: 1, name: '한식' });
  });
});
