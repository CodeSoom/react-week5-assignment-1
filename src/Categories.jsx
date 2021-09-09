import Item from './Item';

export default function Categories({ categories, handleClickCategory, checkedElement }) {
  return (
    <ul>
      {categories.map((category) => (
        <Item
          key={category.id}
          name="category"
          data={category}
          handleClick={handleClickCategory}
          checkedElement={checkedElement}
        />
      ))}
    </ul>
  );
}
