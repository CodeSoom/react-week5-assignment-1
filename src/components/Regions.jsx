import ERROR_MESSAGES from '../../constants/emptyMessages';

export default function Regions({ regions, errorMessage }) {
  if (!regions?.length) {
    return <div>{errorMessage ?? ERROR_MESSAGES.REGION}</div>;
  }

  return (
    <div>
      <ul>
        {regions.map(({ id, name }) => (
          <li key={id}>
            <button type="button">{name}</button>
          </li>
        ))}
      </ul>
    </div>
  );
}
