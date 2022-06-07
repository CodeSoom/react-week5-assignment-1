import { useDispatch, useSelector } from 'react-redux';

import RegionsButton from '../component/RegionsButton';

import { setFieldId } from '../modules/actions';

export default function RegionsButtonContainer({ data }) {
  const { regionName } = useSelector((state) => ({
    regionName: state.regionName,
  }));

  const dispatch = useDispatch();

  const handleClick = (e) => {
    const { name, value } = e.target;
    dispatch(setFieldId({ name, value }));
  };

  return (
    <RegionsButton
      onClick={handleClick}
      data={data}
      regionName={regionName}
    />
  );
}
