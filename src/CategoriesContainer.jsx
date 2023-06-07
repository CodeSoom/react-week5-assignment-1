import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchCategory, updateSelectedData } from './action';
import Category from './Category';

export default function CategoriesContainer() {
  const dispatch = useDispatch();
  const { categoryData, selectedData } = useSelector((state) => state);

  useEffect(() => {
    dispatch(fetchCategory());
  }, []);

  function handleClickCategory(category) {
    dispatch(updateSelectedData({
      selectedRegion: selectedData?.selectedRegion,
      selectedCategory: category,
    }));
  }

  return (
    <Category
      categoryData={categoryData}
      selectedData={selectedData}
      onClick={handleClickCategory}
    />
  );
}
