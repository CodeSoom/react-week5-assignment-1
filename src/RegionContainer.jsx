import { useSelector } from 'react-redux';

export default function RegionContainer() {
  const { regions } = useSelector((state) => ({
    regions: state.regions,
  }));
  return ((
    <div>
      <ul>
        <li>서울</li>
        <li>대전</li>
      </ul>
    </div>
  ));
}
