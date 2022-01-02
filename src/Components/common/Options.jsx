export default function Options({ options, selectedId, updateSelectedOption }) {
  const handleClickButton = (id, name) => {
    updateSelectedOption({ id, name });
  };

  if (!options || options.length === 0) {
    return <h2>정보가 존재하지 않습니다</h2>;
  }

  return (
    <ul>
      {options.map(({ id, name }) => (
        <li key={id}>
          <button
            type="button"
            name={name}
            onClick={() => handleClickButton(id, name)}
          >
            {`${name}${selectedId === id ? '(V)' : ''}`}
          </button>
        </li>
      ))}
    </ul>
  );
}
