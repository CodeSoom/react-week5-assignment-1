import Button from './Button';

export default function Categories({ categories, onClick }) {
  return (
    <ul>
      {categories.map((category) => (
        <Button key={category.id} name={category.name} onClick={onClick} />
      ))}
    </ul>
  );
}
