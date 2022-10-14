export default function Categories({ categories }) {
  return (
    <ul>
      {categories.map((category) => (<li><button type="button" key={category.key}>{category.name}</button></li>))}
    </ul>
  );
}
