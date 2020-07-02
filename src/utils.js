const CHECK_SYMBOL = '(V)';

const check = (obj, id) => {
  if (obj.id !== id) {
    return obj;
  }
  return {
    ...obj,
    name: obj.name.replace(CHECK_SYMBOL, '') + CHECK_SYMBOL,
  };
};

export { CHECK_SYMBOL, check };
