export default function Button({ region, onClickFunction }) {
  return (
    <li>
      <input type='button' value={region} onClick={onClickFunction} />
    </li>
  );
}