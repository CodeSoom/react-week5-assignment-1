import { useDispatch } from 'react-redux';

import { setSelectedRegion } from './actions';

export default function Item({ value: { name } }) {
  const dispatch = useDispatch();
  const handleClick = () => {
    dispatch(setSelectedRegion(name));
  };

  return (
    <button
      type="button"
      onClick={handleClick}
    >
      {name}
    </button>
  );
}
