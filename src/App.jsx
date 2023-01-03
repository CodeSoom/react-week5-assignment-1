import { useEffect, useState } from 'react';

import RegionsContainer from './RegionsContainer';
import CategoriesContainer from './CategoriesContainer';
import Restaurants from './Restaurants';

export default function App() {
  const [restaurants, setRestaurants] = useState([]);

  // useEffect(() => {
  //   const checkedRegion = regions.find((region) => region.checked);
  //   const checkedCategory = categories.find((category) => category.checked);

  //   if (checkedCategory && checkedRegion) {
  //     (async () => {
  //       const regionName = checkedRegion.name;
  //       const categoryId = checkedCategory.id;

  //       const response = await fetch(`https://eatgo-customer-api.ahastudio.com/restaurants?region=${regionName}&category=${categoryId}`);
  //       const restaurantList = await response.json();

  //       setRestaurants(restaurantList);
  //     })();
  //   }
  // }, []);

  return (
    <>
      <RegionsContainer />
      <CategoriesContainer />
      {/* <Restaurants restaurants={restaurants} /> */}
    </>
  );
}
