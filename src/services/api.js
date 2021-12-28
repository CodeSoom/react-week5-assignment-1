import { GET_CATEGORIES } from '../urls';

export async function fetchCategories() {
  const categories = await fetch(GET_CATEGORIES);
  return categories.json();
}

export default {};
