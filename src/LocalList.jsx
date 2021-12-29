export default function LocalList({ locals }) {
  return (
    <ul>
      {
        locals.map(({ id, name }) => (
          <li key={id}>
            <button type="button">{name}</button>
          </li>
        ))
      }
    </ul>
  );
}
