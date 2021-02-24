const initialState = {
  regions: [],
  categories: [],
  restaurants: [],
  error: { regions: null, categories: null, restaurants: null },
  watching: { regionName: null, categoryId: null },
};

const actionHandler = {

  GET_REGIONS_SUCCESS(state, action) {
    const regions = action.payload.map((region) => ({ ...region, clicked: false }));
    return { ...state, regions };
  },

  WATCH_THE_REGION(state, action) {
    const { watching } = state;
    const regionName = action.payload;
    const regions = state.regions.map((region) => (region.name === regionName
      ? { ...region, clicked: true }
      : { ...region, clicked: false }));

    return { ...state, regions, watching: { ...watching, regionName } };
  },

  GET_CATEGORIES_SUCCESS(state, action) {
    const categories = action.payload.map((category) => ({ ...category, clicked: false }));
    return { ...state, categories };
  },

  WATCH_THE_CATEGORY(state, action) {
    const { watching } = state;
    const categoryId = action.payload;
    const categories = state.categories.map((category) => (category.id === categoryId
      ? { ...category, clicked: true }
      : { ...category, clicked: false }));

    return { ...state, categories, watching: { ...watching, categoryId } };
  },

  GET_RESTAURANTS_SUCCESS(state, action) {
    return {
      ...state,
      restaurants: [
        {
          id: 1, categoryId: 1, name: '양천주가', address: '서울 강남구 123456', information: '양천주가 in 서울 강남구 123456',
        }, {
          id: 6, categoryId: 1, name: '한국식 초밥', address: '서울 강남구', information: '한국식 초밥 in 서울 강남구',
        }, {
          id: 14, categoryId: 1, name: '김초밥', address: '서울시 강남구 역삼동', information: '김초밥 in 서울시 강남구 역삼동',
        },
      ],
    };
  },
};

export default function reducer(state = initialState, action = { type: undefined }) {
  return actionHandler[action.type] ? actionHandler[action.type](state, action) : state;
}
