export default function Region({ regionList, onClick }) {
  function handleClick(id) {
    onClick(id);
  }

  return (
    <ul>
      {regionList.map((region) => (
        <li key={region.id}>
          <button
            type="button"
            onClick={() => handleClick(region.id)}
          >
            {region.name}
          </button>
        </li>

      ))}
    </ul>
  );
}
