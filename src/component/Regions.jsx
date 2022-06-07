import RegionsButtonContainer from '../container/RegionsButtonContainer';

export default function Regions({ regions }) {
  return (
    <ul>
      {regions?.map((region) => (
        <li key={region.id}>
          <RegionsButtonContainer data={region} />
        </li>
      ))}
    </ul>
  );
}
