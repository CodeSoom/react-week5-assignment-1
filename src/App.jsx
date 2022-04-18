import { useEffect } from 'react';
import CategoriesContainer from './CategoriesContainer';

export default function App() {
  const categories = [
    { id: 1, name: '한식' },
  ];

  return (
    <div>
      <ul>
        <CategoriesContainer />
      </ul>
    </div>
  );
}
