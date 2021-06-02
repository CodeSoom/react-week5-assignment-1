import { useDispatch } from 'react-redux';
import { changeRegion } from '../actions';

import Button from '../Button';

export default function RegionContainer({ region }) {
  const dispatch = useDispatch();

  function handleClickChangeRegion(changedRegion) {
    dispatch(changeRegion(changedRegion));
  }

  return (
    <Button
      content={region}
      onClick={handleClickChangeRegion}
    />
  );
}
