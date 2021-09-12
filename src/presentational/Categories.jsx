import Item from './Item';

export default function Categories({ categories, handleClickCategory, checkedCategory }) {
  return (
    <ul>
      {categories.map((category) => (
        <Item
          key={category.id}
          name="category"
          item={category}
          handleClick={handleClickCategory}
          checkedItem={checkedCategory}
        />
      ))}
    </ul>
  );
}
