export default function Categories({
  categories,
  activeId,
  onClick,
}) {
  if (categories.length === 0) {
    return (
      <div>
        카테고리 정보를 가져오세요.
      </div>
    );
  }

  return (
    <ul>
      {categories.map((category) => {
        const { id, name } = category;

        return (
          <li key={id}>
            <button type="button" onClick={() => onClick(id)}>
              {name}
              {activeId === id && '(V)'}
            </button>
          </li>
        );
      })}
    </ul>
  );
}
