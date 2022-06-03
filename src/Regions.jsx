import ButtonContainer from './ButtonContainer';

export default function Regions({ regions }) {
  return (
    <ul>
      {regions?.map((region) => (
        <li key={region.id}>
          <ButtonContainer data={region} type="region" />
        </li>
      ))}
    </ul>
  );
}
