export default function SelectCategory({ options, value, onChange }) {
  return (
    <div>
      <label htmlFor="category">분류</label>
      <ul id="category" name="category">
        {options.map(({ id, name }) => (
          <li key={id} value={id}>
            <button type="button" onClick={() => onChange(id)}>
              {name}
              {id === value ? '(V)' : ''}
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
}
