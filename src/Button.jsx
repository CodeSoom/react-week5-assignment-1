import { useSelector } from 'react-redux';

export default function Button({ onClick, data, type }) {
  const selectId = useSelector((state) => ({
    [`${type}Id`]: state[`${type}Id`],
  }));

  const { id, name } = data;

  return (
    <button type="button" onClick={onClick} value={id}>
      {name}
      {(selectId && selectId[`${type}Id`] === id) && '(V)'}
    </button>
  );
}
