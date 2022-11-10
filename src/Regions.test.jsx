import { render, screen, fireEvent } from '@testing-library/react';

import Regions from './Regions';

import { regions as regionList } from '../fixtures/data';

jest.mock('react-redux');

describe('Regions', () => {
  const handleClick = jest.fn();

  const renderCategories = ({ regions = [], selectedCategoryId = null }) => render((
    <Regions
      regions={regions}
      selectedCategoryId={selectedCategoryId}
      onClick={handleClick}
    />
  ));

  context('카테고리 데이터가 없을 시', () => {
    const { container } = renderCategories({
      regions: [],
    });

    expect(container).toHaveTextContent('카테고리가 없어요!');
  });

  context('카테고리 데이터가 있을 시', () => {
    it('카테고리 목록이 나타난다', () => {
      renderCategories({ regions: regionList });

      expect(screen.getByText('서울')).not.toBeNull();
    });

    it('카테고리를 선택하면 handleClick이 호출된다', () => {
      const category = regionList[0];
      renderCategories({ regions: regionList });

      expect(handleClick).not.toBeCalled();

      fireEvent.click(screen.getByText(category.name));

      expect(handleClick).toBeCalledWith(category.id);
    });
  });

  context('카테고리 아이디가 있을 시', () => {
    it('"V"와 함께 선택된 카테고리가 랜더링된다', () => {
      renderCategories({
        regions: regionList[0],
        selectedCategoryId: regionList[0].id,
      });

      expect(screen.queryByText(`${regionList[0].name}(V)`)).toBeNull();
    });
  });

  context('카테고리 아이디가 없을 시', () => {
    it('"V"가 랜더링되지 않는다', () => {
      const category = regionList[0];
      const { container } = renderCategories({
        regions: category,
        selectedCategoryId: null,
      });

      expect(container).not.toHaveTextContent('(V)');
    });
  });
});
