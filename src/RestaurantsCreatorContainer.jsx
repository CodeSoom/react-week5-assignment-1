import { useDispatch, useSelector } from 'react-redux';

import { addRestaurant, updateRestaurantInput } from './actions';

export default function RestaurantsCreatorContainer() {
  const { restaurantName, restaurantCategory, restaurantAddress } = useSelector(
    (selector) => ({
      restaurantName: selector.restaurantName,
      restaurantCategory: selector.restaurantCategory,
      restaurantAddress: selector.restaurantAddress,
    }),
  );
  const dispatch = useDispatch();
  function handleAddRestaurant() {
    dispatch(addRestaurant());
  }
  function handleOnChangeInput(name, value) {
    dispatch(updateRestaurantInput(name, value));
  }

  return (
    <div>
      <input
        name="name"
        placeholder="이름"
        value={restaurantName}
        onChange={(e) => {
          handleOnChangeInput('name', e.target.value);
        }}
      />
      <input
        name="category"
        placeholder="분류"
        value={restaurantCategory}
        onChange={(e) => {
          handleOnChangeInput('category', e.target.value);
        }}
      />
      <input
        name="address"
        placeholder="주소"
        value={restaurantAddress}
        onChange={(e) => {
          handleOnChangeInput('address', e.target.value);
        }}
      />
      <button type="button" onClick={handleAddRestaurant}>
        등록
      </button>
    </div>
  );
}
