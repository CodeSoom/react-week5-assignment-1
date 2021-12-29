// Container Components:
// 입력값(name, value)을 스토어에서 가져와서 ListCreator컴포넌트에 넘겨줌
import { useSelector } from 'react-redux';

export default function ListCreatorContainer() {
  const xx = useSelector((state) => ({

  }));

  return (
    <div>
      등록
    </div>
  );
}
