export default function Region({ regionList, onClick }) {
  function handleClick({ id }) {
    onClick({ id });
  }
  // Todo : 컴포넌트 아래에 하나 더 만들기

  return (
    <ul>
      {regionList.map((region) => (
        <li key={region.id}>
          <button
            type="button"
            onClick={() => handleClick({ id: region.id })}
          >
            {region.name}
          </button>
        </li>

      ))}
    </ul>
  );
}
