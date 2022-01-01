// Container Components:
// 카테고리 목록을 스토어에서 가져와서 카테코리 컴포넌트에 넘겨줌
import { useSelector } from 'react-redux';

import Categories from './Categories';

export default function CategoriesContainer() {
  const { categories } = useSelector((state) => ({
    categories: state.categories,
  }));

  return (
    <Categories
      categories={categories}
    />
  );
}
