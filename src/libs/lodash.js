function first(iterable) {
  if (!iterable) {
    return undefined;
  }
  return iterable[0];
}

export default { first };
