import { useSelector } from 'react-redux';
import OptionList from './OptionList';

export default function App() {
  const categories = useSelector((state) => state.groups.categories);
  const regions = useSelector((state) => state.groups.regions);

  return (
    <>
      <OptionList
        options={categories}
        optionType="category"
      />

      <OptionList
        options={regions}
        optionType="region"
      />
    </>
  );
}
