import { useDispatch, useSelector } from 'react-redux';

import {
  updateName, updateCategory, updateAddress, addRestaurant,
} from '../redux/actions';

export default function InputContainer() {
  const dispatch = useDispatch();
  const { name, category, address } = useSelector((state) => ({
    name: state.name,
    category: state.category,
    address: state.address,
  }));

  const handleUpdateName = ({ value }) => {
    dispatch(updateName({ name: value }));
  };

  const handleUpdateCategory = ({ value }) => {
    dispatch(updateCategory({ category: value }));
  };

  const handleUpdateAddress = ({ value }) => {
    dispatch(updateAddress({ address: value }));
  };

  const handleAddRestaurant = () => {
    dispatch(addRestaurant({ name, category, address }));
  };

  return (
    <div>
      <label htmlFor="input-name">이름</label>
      <input
        id="input-name"
        type="text"
        name="name"
        placeholder="이름"
        value={name}
        onChange={(event) => handleUpdateName({
          value: event.target.value,
        })}
      />
      <label htmlFor="input-category">분류</label>
      <input
        id="input-category"
        type="text"
        name="category"
        placeholder="분류"
        value={category}
        onChange={(event) => handleUpdateCategory({
          name: event.target.name,
          value: event.target.value,
        })}
      />
      <label htmlFor="input-address">주소</label>
      <input
        id="input-address"
        type="text"
        name="address"
        placeholder="주소"
        value={address}
        onChange={(event) => handleUpdateAddress({
          value: event.target.value,
        })}
      />
      <button
        type="button"
        onClick={handleAddRestaurant}
      >
        등록
      </button>
    </div>
  );
}
