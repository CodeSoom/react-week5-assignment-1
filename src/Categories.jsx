const Categories = ({ categories }) => (
  <ul>
    {categories.map((category) => (
      <li key={category.id}>
        {category.name}
      </li>
    ))}
  </ul>
);
export default Categories;
