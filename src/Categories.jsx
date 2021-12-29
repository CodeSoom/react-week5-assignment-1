export default function Categories({
  categories,
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
          <li key={id}>{name}</li>
        );
      })}
    </ul>
  );
}
