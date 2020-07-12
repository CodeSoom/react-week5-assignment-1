export function get(key) {
  return (obj) => obj[key];
}

export function equal(key, value) {
  return (o) => o[key] === value;
}
