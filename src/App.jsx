import { regions, categories } from '../__fixtures__/list';
import CategoriesContainer from './CategoriesContainer';
import RegionsContainer from './RegionsContainer';

export default function App() {
  return (
    <div>
      <RegionsContainer />
      <p />
      <CategoriesContainer />
    </div>
  );
}
