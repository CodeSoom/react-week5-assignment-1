import { useSelector } from 'react-redux';

export default function SearchFilterContainer() {
  const { regions } = useSelector((state) => state);

  return (
    <form>
      <div>
        <label htmlFor="region">지역</label>
        <select id="region">
          {regions.map((region) => (
            <option key={region} value={region}>{region}</option>
          ))}
        </select>
      </div>
    </form>
  );
}
