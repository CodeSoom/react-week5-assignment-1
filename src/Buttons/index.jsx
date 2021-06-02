import ButtonContainer from '../ButtonContainer';

export default function Regions({ regions }) {
  return (
    <ul>
      {regions.map(({ name, id }) => (
        <ButtonContainer
          key={id}
          region={name}
        />
      ))}
    </ul>
  );
}
