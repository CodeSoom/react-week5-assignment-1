import RegionContainer from '../RegionContainer';

export default function Regions({ regions }) {
  return (
    <ul>
      {regions.map(({ name, id }) => (
        <RegionContainer
          key={id}
          region={name}
        />
      ))}
    </ul>
  );
}
