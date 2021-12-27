import { GET_CATEGORIES } from '../urls';

export async function fetchCategories() {
  const response = await fetch(GET_CATEGORIES);
  return response.json();
}

export default {};
