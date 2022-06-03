import Button from './Button';

export default function Regions({ regions }) {
  return (
    <ul>
      {regions && regions.map((region) => (
        <li>
          <Button data={region} />
        </li>
      ))}
    </ul>
  );
}
