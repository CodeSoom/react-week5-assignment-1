export default function Categories({ categories }) {
  //   const { categories } = useSelector((state) => ({
  //     categories: state.categories,
  //   }));

  return (
    <ul>
      {categories.map((category) => (
        <li key={category.id}>
          <p>
            {category.name}
          </p>
        </li>
      ))}
    </ul>
  );
}
