import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchCategory, updateSelectedData } from './action';

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
    <div>
      {categoryData?.map((category) => (
        <button
          type="button"
          key={category.id}
          onClick={() => handleClickCategory(category)}
        >
          {selectedData?.selectedCategory?.name === category.name ? `${category.name} v` : category.name}
        </button>
      ))}

    </div>
  );
}
