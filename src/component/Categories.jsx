import ButtonContainer from '../container/ButtonContainer';

export default function Categories({ categories }) {
  return (
    <ul>
      {categories?.map((categorie) => (
        <li key={categorie.id}>
          <ButtonContainer data={categorie} type="category" />
        </li>
      ))}
    </ul>
  );
}
