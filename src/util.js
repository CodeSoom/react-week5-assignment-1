export const checkItem = (array, condition) => array.map((item) => ({
  ...item,
  name: condition(item) ? `${item.name}(V)` : item.name.replace('(V)', ''),
}));
