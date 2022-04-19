import { useEffect } from 'react';
import { useDispatch } from 'react-redux';

import InputContainer from '../containers/InputContainer';
import RestaurantContainer from '../containers/RestaurantContainer';

import { setRestaurants } from '../redux/actions';

export default function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(setRestaurants({
      restaurants: [{
        id: 1,
        name: '두향',
        category: '한식',
        address: '성남시 분당구',
      },
      {
        id: 2,
        name: '맥도날드',
        category: '양식',
        address: '서울시 강남구',
      },
      ],
    }));
  }, []);

  return (
    <>
      <h1>Restaurants</h1>
      <RestaurantContainer />
      <InputContainer />
    </>
  );
}
