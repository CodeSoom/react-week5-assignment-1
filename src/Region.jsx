import Button from './Button';

export default function Region({ regions }) {
  return (
    <ul>
      {regions.map(({ id, name }) => (
        <li key={id}>
          <Button name={name} />
        </li>
      ))}
    </ul>
  );
}
