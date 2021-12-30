export default function SelectRegion({ options, value, onChange }) {
  return (
    <div>
      <label htmlFor="region">지역</label>
      <ul id="region" name="region">
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
