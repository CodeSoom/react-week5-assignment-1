import Button from './Button';

export default function Categories({ categories, onClick, restaurant }) {
  return (
    <ul>
      {categories.map((category) => (
        <Button
          key={category.id}
          name={category.name}
          onClick={onClick}
          buttonName="categoryId"
          value={category.id}
          selected={restaurant.categoryId === category.id}
        />
      ))}
    </ul>
  );
}
