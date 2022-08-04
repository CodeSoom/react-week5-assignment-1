import SelectorButton from './SelectorButton';

export default function Categories({ selectedCategoryName, categories, onClick }) {
  return (
    <div>
      <ul>
        {categories.map(((category) => {
          const { id, name } = category;
          return (
            <SelectorButton
              key={id}
              name={name}
              selectedName={selectedCategoryName}
              onClick={onClick}
            />
          );
        }
        ))}
      </ul>
    </div>
  );
}
