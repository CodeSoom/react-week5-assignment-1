import Categories from './Categories';

const CategoriesContainer = () => {
  const categories = [
    { id: 1, name: '한식' },
  ];

  return (
    <Categories categories={categories} />
  );
};
export default CategoriesContainer;
