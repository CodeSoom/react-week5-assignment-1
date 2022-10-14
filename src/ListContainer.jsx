import List from './List';

export default function ListContainer() {
  const stores = [{ id: 1, name: '호신각' }];
  return (
    <List stores={stores} />
  );
}
