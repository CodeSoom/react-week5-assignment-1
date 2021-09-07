import { useState, useEffect } from 'react';

export default function App() {
  const [initialData, setInitialData] = useState({
    regions: [],
    categories: [],
  });

  const { regions, categories } = initialData;

  async function loadInitialData() {
    const regionsData = await fetch('https://eatgo-customer-api.ahastudio.com/regions');
    const regionsList = await regionsData.json();
    const categoriesData = await fetch('https://eatgo-customer-api.ahastudio.com/categories');
    const categoriesList = await categoriesData.json();
    setInitialData({
      ...initialData,
      regions: [...regions, ...regionsList],
      categories: [...categories, ...categoriesList],
    });
  }

  useEffect(() => {
    loadInitialData();
  }, []);

  return (
    <div>
      <ul>
        {regions.map((region) => (<li><button type="button">{region.name}</button></li>))}
      </ul>
      <ul>
        {categories.map((category) => (<li><button type="button">{category.name}</button></li>))}
      </ul>
      <ul>
        results...
      </ul>
    </div>
  );
}
