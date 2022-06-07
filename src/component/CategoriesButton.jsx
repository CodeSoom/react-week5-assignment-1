export default function CategoriesButton({
  onClick, data, categorieId,
}) {
  const { id, name } = data;

  return (
    <button type="button" onClick={onClick} value={id} name="categorieId">
      {name}
      {(Number(categorieId) === id) && '(V)'}
    </button>
  );
}
