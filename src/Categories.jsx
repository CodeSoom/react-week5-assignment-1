const containerStyle = { marginTop: '10px' };
const buttonStyle = { width: '60px', margin: '0 5px' };

const Categories = ({ category, categories, onClickCategory }) => (
  <div style={containerStyle}>
    <span>카테고리 선택 : </span>
    { categories?.map((categoryItem) => (
      <button
        type="button"
        key={`button-category-${categoryItem.id}`}
        onClick={() => onClickCategory(categoryItem)}
        style={buttonStyle}
      >
        { categoryItem.name }
        { !!category && categoryItem.id === category.id && '(V)' }
      </button>
    )) }
  </div>
);
export default Categories;
