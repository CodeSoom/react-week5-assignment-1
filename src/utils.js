export function get(key) {
  return (obj) => obj[key];
}

export function equal(key, value) {
  return (object) => object[key] === value;
}
