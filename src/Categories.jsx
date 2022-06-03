export default function Categories({ categories, selectedCategory, updateSelectedCategory }) {
  const handleClickButton = ({ target: { name } }) => {
    updateSelectedCategory(name);
  };

  if (!categories || categories.length === 0) { return <h2>카테고리가 존재하지 않습니다</h2>; }

  return (
    <>
      <ul>
        {categories.map(({ id, name }) => (
          <li key={id}>
            <button
              type="button"
              name={name}
              onClick={handleClickButton}
            >
              {`${name}${selectedCategory === name ? '(V)' : ''}`}
            </button>
          </li>
        ))}
      </ul>
    </>
  );
}
