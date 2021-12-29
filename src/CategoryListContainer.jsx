import { useDispatch, useSelector } from 'react-redux';
import Item from './Item';
import { changeCategory } from './store/actions';

export default function CategoryListContainer() {
  const dispatch = useDispatch();
  const { categories, categoryId } = useSelector((state) => ({
    categories: state.categories,
    categoryId: state.selected.categoryId,
  }));

  function handleClick(id) {
    dispatch(changeCategory(id));
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
