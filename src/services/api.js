export async function fetchRegions() {
  return Promise.resolve([{ id: 1, name: '서울' }]);
}

export async function fetchCategories() {
  return Promise.resolve([{ id: 1, name: '한식' }]);
}
