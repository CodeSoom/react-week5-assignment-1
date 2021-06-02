import { useSelector } from 'react-redux';

import Buttons from '../Buttons';

export default function ButtonsContainer() {
  const { regions } = useSelector((state) => ({
    regions: state.regions,
  }));

  return (
    <Buttons regions={regions} />
  );
}
