import { useDispatch, useSelector } from 'react-redux';

import { changeSearch } from '../../actions';
import Buttons from '../../presentational/Buttons';

export default function CategoriesContainer() {
  const dispatch = useDispatch();

  const { categories, selected } = useSelector((state) => ({
    categories: state.categories,
    selected: state.categories.find((category) => category.id === state.search.categoryId)?.name,
  }));

  function handleClickChangeSearch({ value }) {
    dispatch(changeSearch({
      search: 'categoryId',
      value: categories.find((category) => category.name === value)?.id,
    }));
  }

  return (
    <Buttons
      values={categories}
      selected={selected}
      onClickChangeSearch={handleClickChangeSearch}
    />
  );
}
