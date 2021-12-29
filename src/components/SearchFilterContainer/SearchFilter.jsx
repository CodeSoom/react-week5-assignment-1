export default function SearchFilter({ regions, categories }) {
  return (
    <form>
      <div>
        <label htmlFor="region">지역</label>
        <select id="region">
          {regions.map(({ id, name }) => (
            <option key={id} value={name}>{name}</option>
          ))}
        </select>
      </div>

      <div>
        <label htmlFor="category">분류</label>
        <select id="category">
          {categories.map(({ id, name }) => (
            <option key={id} value={name}>{name}</option>
          ))}
        </select>
      </div>
    </form>
  );
}
