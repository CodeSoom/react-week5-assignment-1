import { useDispatch } from 'react-redux';

import Button from './Button';

import { setFieldId } from './modules/actions';

export default function ButtonContainer({ data, type }) {
  const dispatch = useDispatch();

  const handleClick = (e) => {
    const { name, value } = e.target;
    dispatch(setFieldId({ name, value }));
  };

  return <Button onClick={handleClick} data={data} type={type} />;
}
