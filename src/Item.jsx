import { useDispatch } from 'react-redux';

export default function Item({ value: { name } }) {
  const dispatch = useDispatch();
  const handleClick = () => {
    dispatch();
  };

  return (
    <button type="button" onClick={handleClick}>
      {name}
    </button>
  );
}
