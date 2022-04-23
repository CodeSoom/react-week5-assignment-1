export default function Categories({ categories, onClick }) {
  function handleClick({ id }) {
    onClick({ id });
  }

  // TOdo: 컴포넌트 아래 만들기
  return (
    <ul>
      {categories.map((category) => (
        <li key={category.id}>
          <button
            type="button"
            onClick={() => handleClick({ id: category.id })}
          >
            {category.name}
          </button>
        </li>
      ))}
    </ul>
  );
}
