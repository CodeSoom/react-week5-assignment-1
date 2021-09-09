import { useDispatch, useSelector } from 'react-redux';

import { updateField } from '../store/actions';

import CategoryList from '../presentational/CategoryList';

export default function CategoryContainer() {
  const dispatch = useDispatch();

  const { categories, selectedCategory } = useSelector((state) => state);

  const handleClick = ({ field, value }) => {
    dispatch(updateField({ field, value }));
  };

  return (
    <CategoryList
      categories={categories}
      onClick={handleClick}
      selectedCategory={selectedCategory}
    />
  );
}
