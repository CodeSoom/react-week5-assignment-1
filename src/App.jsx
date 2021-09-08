import { useState, useEffect } from 'react';

export default function App() {
  const [categories, setCategories] = useState(null);
  const [regions, setRegions] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const categoryUrl = 'https://eatgo-customer-api.ahastudio.com/categories';
  const RegionUrl = 'https://eatgo-customer-api.ahastudio.com/regions';

  useEffect(() => {
    try {
      setError(null);
      setCategories(null);
      setLoading(true);

      fetch(categoryUrl)
        .then((res) => res.json())
        .then((data) => {
          setCategories(data);
        })
        .then(setLoading(false));
    } catch (e) {
      setError(e);
    }
  }, []);

  useEffect(() => {
    try {
      setError(null);
      setRegions(null);
      setLoading(true);

      fetch(RegionUrl)
        .then((res) => res.json())
        .then((data) => {
          setRegions(data);
        })
        .then(setLoading(false));
    } catch (e) {
      setError(e);
    }
  }, []);

  function makeCategoryList() {
    const result = categories.map((element) => (
      <li key={element.id}>
        <button type="button">{element.name}</button>
      </li>
    ));
    return result;
  }

  function makeRegionList() {
    const result = regions.map((element) => (
      <li key={element.id}>
        <button type="button">{element.name}</button>
      </li>
    ));
    return result;
  }

  if (loading) return <div>로딩중..</div>;
  if (error) return <div>에러 발생!</div>;
  if (!categories) return null;
  if (!regions) return null;

  return (
    <>
      <ul>
        {makeRegionList()}
      </ul>
      <ul>
        {makeCategoryList()}
      </ul>
    </>
  );
}
