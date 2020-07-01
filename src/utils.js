const CHECK_SYMBOL = '(V)';

const check = ({ id, name }, checkedId) => {
  const element = { id, name: name.replace(CHECK_SYMBOL, '') };
  if (element.id === checkedId) {
    element.name += CHECK_SYMBOL;
  }
  return element;
};

export { CHECK_SYMBOL, check };
