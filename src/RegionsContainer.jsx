import Regions from './Regions';

const RegionsContainer = () => {
  const regions = [
    { id: 1, region: '서울' },
  ];

  return (
    <Regions regions={regions} />
  );
};
export default RegionsContainer;
