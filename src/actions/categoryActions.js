export function setCategories(categories) {
  return {
    type: 'setCategories',
    payload: {
      categories,
    },
  };
}

export function updateCategoriesLoading(loading) {
  return {
    type: 'updateCategoriesLoading',
    payload: {
      loading,
    },
  };
}

export function selectCategory(categoryId) {
  return {
    type: 'selectCategory',
    payload: {
      categoryId,
    },
  };
}
