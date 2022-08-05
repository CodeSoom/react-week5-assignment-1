import SelectorButton from './SelectorButton';

export default function RestaurantSelectorButtons({ list, selectedItemName, onClick }) {
  return (
    <div>
      <ul>
        {list.map(((item) => {
          const { id, name } = item;
          return (
            <SelectorButton
              key={id}
              name={name}
              selectedName={selectedItemName}
              onClick={onClick}
            />
          );
        }
        ))}
      </ul>
    </div>
  );
}
