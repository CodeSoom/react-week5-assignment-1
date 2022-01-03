import SelectCategory from './SelectCategory';
import SelectRegion from './SelectRegion';

export default function SearchFilter({ options: { regions, categories }, value = {}, onChange }) {
  const handleChangeRegion = (id) => {
    onChange({
      ...value,
      region: id,
    });
  };

  const handleChangeCategory = (id) => {
    onChange({
      ...value,
      category: id,
    });
  };

  return (
    <form>
      <h2 style={{ display: 'none' }}>검색 필터</h2>
      <SelectRegion
        options={regions}
        value={value.region}
        onChange={handleChangeRegion}
      />
      <SelectCategory
        options={categories}
        value={value.category}
        onChange={handleChangeCategory}
      />
    </form>
  );
}
