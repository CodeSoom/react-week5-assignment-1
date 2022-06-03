import EMPTY_MESSAGES from '../../constants/emptyMessages';

export default function Categories({ categories, errorMessage }) {
  if (!categories?.length) {
    return errorMessage ?? EMPTY_MESSAGES.CATEGORY;
  }

  return (
    <div>
      <ul>
        {categories.map((category) => (
          <li key={category.id}><button type="button">{category.name}</button></li>
        ))}
      </ul>
    </div>
  );
}
