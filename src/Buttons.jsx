export default function Buttons({ roles }) {
  return (
    <ul>
      {
        roles.map((role) => (
          <li key={role.id}>
            <button type="button">
              {role.name}
            </button>
          </li>
        ))
      }
    </ul>
  );
}
