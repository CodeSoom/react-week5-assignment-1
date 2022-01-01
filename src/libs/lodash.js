function first(iterable) {
  if (!iterable) {
    return undefined;
  }
  return iterable[0];
}

function get(...args) {
  if (args.length === 1) {
    return (object) => object[args[0]];
  }
  return args[0][args[1]];
}

export default { first, get };
