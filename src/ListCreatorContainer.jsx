// Container Components:
// 추가되는 레스토랑 목록을 스토어에서 가져와서 ListCreator컴포넌트에 넘겨줌
import { useSelector } from 'react-redux';

import ListCreator from './ListCreator';

export default function ListCreatorContainer() {
  const xx = useSelector((state) => ({

  }));

  return (
    <ListCreator />
  );
}
