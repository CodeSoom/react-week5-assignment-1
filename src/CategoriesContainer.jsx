import Categories from './Categories';

export default function CategoriesContainer() {
  const categories = [
    { id: 1, name: '한식' },
  ];

  return (
    <Categories categories={categories} />
  );
}
