import { useEffect } from 'react';
// import { useSelector } from 'react-redux';
import { fetchCategories, fetchRegions, fetchRestaurants } from './services/api';

export default function App() {
  useEffect(() => {
    fetchCategories();
    fetchRegions();
    fetchRestaurants('서울', 1);
  }, []);

  return (
    <div>
      지역과 카테고리를 선택하세요.
    </div>
  );
}
