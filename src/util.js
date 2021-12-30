export const checkItem = (array, condition) => array.map((item) => {
  item.selected = condition(item);
  return item;
});
