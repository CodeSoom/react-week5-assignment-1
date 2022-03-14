import { useDispatch, useSelector } from 'react-redux';

import Item from './Item';
import { changeCategory } from './store/actions';
import { loadRestaurants } from './store/asyncActions';

export default function CategoryListContainer() {
  const dispatch = useDispatch();
  const { categories, categoryId } = useSelector((state) => ({
    categories: state.categories,
    categoryId: state.selected.categoryId,
  }));

  function handleClick(id) {
    dispatch(changeCategory(id));
    dispatch(loadRestaurants());
  }

  if (!categories || !categories.length) {
    return <>카데고리 목록이 비어있습니다.</>;
  }

  return (
    <ul>
      {categories.map((category) => (
        <Item
          key={category.id}
          item={category}
          onClick={() => handleClick(category.id)}
          selected={categoryId === category.id}
        />
      ))}
    </ul>
  );
}
