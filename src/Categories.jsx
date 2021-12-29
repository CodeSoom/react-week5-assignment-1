export default function Categories({ categories }) {
  if (!categories.length) {
    return null;
  }

  return (
    <>
      {categories.map(({ id, name }) => (
        <button key={id} type="button">
          {name}
        </button>
      ))}
    </>
  );
}
