export default function Categories({ categoryList, onClick }) {
  function handleClick(id) {
    onClick(id);
  }

  return (
    <ul>
      {categoryList.map((region) => (
        <li key={region.id}>
          <button
            type="button"
            onClick={() => handleClick(id)}
          >
            {region.name}
          </button>
        </li>

      ))}
    </ul>
  );
}
