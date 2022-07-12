import Category from './Category';

const Categories = ({ categories, selectedCategory, onClick }) => (
  <ul>
    {categories.map((category) => (
      <Category
        key={category.id}
        category={category}
        selected={category === selectedCategory}
        onClick={onClick}
      />
    ))}
  </ul>
);

export default Categories;
