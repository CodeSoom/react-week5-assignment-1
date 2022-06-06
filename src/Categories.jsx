export default function Categories({ categories, selectedCategoryId, updateSelectedCategory }) {
  const handleClickButton = (id) => {
    updateSelectedCategory(id);
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
              onClick={() => handleClickButton(id)}
            >
              {`${name}${selectedCategoryId === id ? '(V)' : ''}`}
            </button>
          </li>
        ))}
      </ul>
    </>
  );
}
