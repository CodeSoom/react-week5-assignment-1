export default function Categories({ categories }) {
  return (
    <li>
      {
        categories.map((category) => (
          <li id={category.id}>{category.name}</li>
        ))
      }
    </li>
  );
}
