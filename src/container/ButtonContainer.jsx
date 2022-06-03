import { useDispatch, useSelector } from 'react-redux';

import Button from '../component/Button';

import { setFieldId } from '../modules/actions';

export default function ButtonContainer({ data, type }) {
  const selectId = useSelector((state) => ({
    [`${type}Id`]: state[`${type}Id`],
  }));

  const dispatch = useDispatch();

  const handleClick = (e) => {
    const { name, value } = e.target;
    dispatch(setFieldId({ name, value }));
  };

  return <Button onClick={handleClick} data={data} buttonName={`${type}Id`} selectId={selectId} />;
}
