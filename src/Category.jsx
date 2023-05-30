const Category = ({ category: { id, name, checked }, onCheckCategory }) => (
  <li>
    <button type="button" onClick={() => onCheckCategory(id)}>
      {name}
      {checked ? '(V)' : null}
    </button>
  </li>
);
export default Category;
