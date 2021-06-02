import { useDispatch, useSelector } from 'react-redux';

import { changeSearch } from '../actions';

import Button from '../Button';

export default function ButtonContainer({ name, search }) {
  const dispatch = useDispatch();

  const selected = useSelector((state) => state.search[search]);

  function handleClick(payload) {
    dispatch(changeSearch({
      search: payload.search,
      value: payload.value,
    }));
  }

  return (
    <Button
      selected={selected}
      name={name}
      onClick={handleClick}
      search={search}
    />
  );
}
