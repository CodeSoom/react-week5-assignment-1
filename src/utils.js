const CHECK_SYMBOL = '(V)';

const check = (obj, id) => {
  const name = obj.name.replace(CHECK_SYMBOL, '');
  if (obj.id !== id) {
    return {
      ...obj,
      name,
    };
  }
  return {
    ...obj,
    name: name + CHECK_SYMBOL,
  };
};

export { CHECK_SYMBOL, check };
