export default function Region({ regionList }, onClick) {
  return (
    <ul>
      {regionList.map((region) => (
        <li key={region.id}>
          <button
            type="button"
            onClick={() => onClick(region.id)}
          >
            {region.name}
          </button>
        </li>

      ))}
    </ul>
  );
}
