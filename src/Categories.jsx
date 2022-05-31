import Buttons from './Buttons';

export default function Categories({ state, onClick }) {
  return (
    <Buttons
      items={state.categories}
      name="currentCategoryId"
      currentId={state.currentCategoryId}
      onClick={onClick}
    />
  );
}
