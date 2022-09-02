import { useSelector } from 'react-redux';
import Categories from './Categories';

export default function CategoriesContainer() {
  const { categories, selectedCategory } = useSelector((state) => ({
    categories: state.categories,
    selectedCategory: state.selectedCategory,
  }));

  return (
    <Categories
      categories={categories}
      selectedCategory={selectedCategory}
    />
  );
}
