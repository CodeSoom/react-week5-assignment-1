import { useSelector } from 'react-redux';

export default function Categories({ categories, onClick }) {
  const { selectedIdx } = useSelector((state) => ({ selectedIdx: state.selectedIdx }));
  return (
    <ul>
      {categories.map((category) => (<li key={category.id}><button type="button" onClick={() => onClick(category.id)}>{selectedIdx === category.id ? `${category.name}(V)` : category.name}</button></li>))}
    </ul>
  );
}
