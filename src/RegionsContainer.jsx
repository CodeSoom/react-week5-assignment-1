import Regions from './Regions';

export default function RegionsContainer() {
  const regions = [
    { id: 1, name: '서울' },
    { id: 2, name: '대전' },
    { id: 3, name: '대구' },
    { id: 4, name: '부산' },
    { id: 5, name: '광주' },
    { id: 6, name: '강원도' },
    { id: 7, name: '인천' },
    { id: 8, name: '제주' },
    { id: 9, name: '전주' },
    { id: 10, name: '순천' },
    { id: 11, name: '독도' },
  ];

  function handleClick(event) {
    // TO-DO
    console.log(event);
  }

  return (
    <Regions
      regions={regions}
      onClick={handleClick}
    />
  );
}
