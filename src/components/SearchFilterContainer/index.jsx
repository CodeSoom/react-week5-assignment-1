import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { fetchRegions, fetchCategories } from '../../store/actions';

export default function SearchFilterContainer() {
  const { regions, categories } = useSelector((state) => state);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchRegions());
    dispatch(fetchCategories());
  }, []);

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
