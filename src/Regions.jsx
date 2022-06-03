import Button from './Button';

export default function Regions({ list }) {
  return (
    <ul>
      {list && list.map((obj) => (
        <li>
          <Button data={obj} />
        </li>
      ))}
    </ul>
  );
}
