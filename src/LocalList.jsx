export default function LocalList({ locals, onClick }) {
  return (
    <ul>
      {
        locals.map(({ id, name }) => (
          <li key={id}>
            <button type="button" onClick={onClick}>
              {name}
            </button>
          </li>
        ))
      }
    </ul>
  );
}
