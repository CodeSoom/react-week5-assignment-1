import { useSelector } from 'react-redux';

export default function List() {
  const info = useSelector((state) => state.selected.restaurants);
  return (
    <p>
      {info[0].name}
    </p>
  );
}
