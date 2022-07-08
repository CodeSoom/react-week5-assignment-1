import Category from './Category';

const Categories = ({ categories, onClick }) => (
  <ul>
    {categories.map((category) => (
      <Category
        key={category.id}
        category={category}
        onClick={onClick}
      />
    ))}
  </ul>
);

export default Categories;
