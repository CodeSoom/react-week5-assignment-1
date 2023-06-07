import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { loadCategories, setSelectedRegionAndCategory } from './action';
import Category from './Category';

export default function CategoriesContainer() {
  const dispatch = useDispatch();
  const { categories, selectedRegionAndCategory } = useSelector((state) => state);

  useEffect(() => {
    dispatch(loadCategories());
  }, []);

  function handleClickCategory(category) {
    dispatch(setSelectedRegionAndCategory({
      selectedRegion: selectedRegionAndCategory?.selectedRegion,
      selectedCategory: category,
    }));
  }

  return (
    <Category
      categories={categories}
      selectedRegionAndCategory={selectedRegionAndCategory}
      onClick={handleClickCategory}
    />
  );
}
