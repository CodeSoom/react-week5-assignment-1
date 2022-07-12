const Category = ({ category, selected, onClick }) => {
  const handleClick = () => onClick(category);

  return (
    <li>
      <button type="button" onClick={handleClick}>
        {category.name}
        {selected && '(V)'}
      </button>
    </li>
  );
};

export default Category;
