export default function Button({
  onClick, data, buttonName, selectId,
}) {
  const { id, name } = data;

  return (
    <button type="button" onClick={onClick} value={id} name={buttonName}>
      {name}
      {(selectId && Number(selectId[buttonName]) === id) && '(V)'}
    </button>
  );
}
