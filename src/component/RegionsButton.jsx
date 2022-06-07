export default function Button({
  onClick, data, regionName,
}) {
  const { name } = data;

  return (
    <button type="button" onClick={onClick} value={name} name="regionName">
      {name}
      {(regionName === name) && '(V)'}
    </button>
  );
}
