import CategoriesButtonContainer from '../container/CategoriesButtonContainer';

export default function Categories({ categories }) {
  return (
    <ul>
      {categories?.map((categorie) => (
        <li key={categorie.id}>
          <CategoriesButtonContainer data={categorie} />
        </li>
      ))}
    </ul>
  );
}
