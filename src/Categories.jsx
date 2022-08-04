import CategoryButton from './CategoryButton';

export default function Categories({ selectedCategoryName, categories, onClick }) {
  return (
    <div>
      <ul>
        {categories.map(((category) => {
          const { id, name } = category;
          return (
            <CategoryButton
              key={id}
              name={name}
              selectedCategoryName={selectedCategoryName}
              onClick={onClick}
            />
          );
        }
        ))}
      </ul>
    </div>
  );
}
