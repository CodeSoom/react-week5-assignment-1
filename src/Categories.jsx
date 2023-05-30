import Category from './Category';

const Categories = ({ categories, onUpdateCategory }) => (
  <ul>
    {categories.map((category) => (
      <Category key={category.id} category={category} onCheckCategory={onUpdateCategory} />
    ))}
  </ul>
);

export default Categories;
