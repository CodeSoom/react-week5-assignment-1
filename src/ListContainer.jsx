import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';
import List from './List';
import { loadStores } from './actions';

export default function ListContainer() {
  const dispatch = useDispatch();
  const { selectedId } = useSelector((state) => ({ selectedId: state.selectedId }));
  const { selectedRegion } = useSelector((state) => ({ selectedRegion: state.selectedRegion }));
  const { stores } = useSelector((state) => ({ stores: state.stores }));

  useEffect(() => {
    dispatch(loadStores(selectedRegion, selectedId));
  }, [selectedId, selectedRegion]);

  return (
    <List stores={stores} />
  );
}
