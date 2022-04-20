export default function Categories({ regionList }, id, onclickRegion) {
  return (
    <ul>
      {regionList.map((region) => (
        <li key={region.id}>
          <button
            type="button"
            onClick={() => onclickRegion(id)}
          >
            {region.name}
          </button>
        </li>

      ))}
    </ul>
  );
}
