import Buttons from './Buttons';

export default function Categories({ categories, currentCategoryId, onClick }) {
  return (
    <Buttons
      items={categories}
      name="currentCategoryId"
      currentId={currentCategoryId}
      onClick={onClick}
    />
  );
}
