export default function SearchFilter({ options: { regions, categories }, value = {}, onChange }) {
  return (
    <form>
      <h2 style={{ display: 'none' }}>검색 필터</h2>
      <div>
        <label htmlFor="region">지역</label>
        <ul id="region" name="region">
          {regions.map(({ id, name }) => (
            <li key={id} value={id}>
              <button type="button" onClick={() => onChange({ ...value, region: id })}>
                {name}
                {id === value.region ? '(V)' : ''}
              </button>
            </li>
          ))}
        </ul>
      </div>

      <div>
        <label htmlFor="category">분류</label>
        <ul id="category" name="category">
          {categories.map(({ id, name }) => (
            <li key={id} value={id}>
              <button type="button" onClick={() => onChange({ ...value, category: id })}>
                {name}
                {id === value.category ? '(V)' : ''}
              </button>
            </li>
          ))}
        </ul>
      </div>
    </form>
  );
}
