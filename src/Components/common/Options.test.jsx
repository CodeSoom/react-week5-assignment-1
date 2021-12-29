import { fireEvent, render } from '@testing-library/react';

import Options from './Options';

import { CATEGORIES } from '../../lib/fixtures';

const updateSelectedCategory = jest.fn();

describe('Categories', () => {
  const renderComponent = (categories, selectedCategoryId) =>
    render(
      <Options
        selectedId={selectedCategoryId}
        options={categories}
        updateSelectedOption={updateSelectedCategory}
      />
    );

  it('컴포넌트가 깨지지 않고 정상적으로 렌더링됩니다', () => {
    const { container } = renderComponent(CATEGORIES, '');

    expect(container).toHaveTextContent('한식');
  });

  context('카테고리가 있을 때', () => {
    it('카테고리를 클릭하면 updateSelectedCategory가 호출된다', () => {
      const { getByRole } = renderComponent(CATEGORIES, '');

      const button = getByRole('button', { name: '한식' });
      fireEvent.click(button);

      expect(updateSelectedCategory).toBeCalled();
    });

    it('선택된 카테고리에는 V표시가 붙는다', () => {
      const { container } = renderComponent(CATEGORIES, 1);

      expect(container).toHaveTextContent('한식(V)');
    });
  });

  context('카테고리가 없을 때', () => {
    it('헬퍼메세지가 출력된다', () => {
      const { container } = renderComponent([]);

      expect(container).toHaveTextContent('정보가 존재하지 않습니다');
    });
  });
});
