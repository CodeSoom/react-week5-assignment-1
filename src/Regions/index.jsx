import Region from '../Region';

export default function Regions({ regions }) {
  return (
    <ul>
      {regions.map(({ name, id }) => (
        <Region
          key={id}
          region={name}
        />
      ))}
    </ul>
  );
}
