// 액션 타입
export const SET_AREAS = 'SET_AREAS';

// 액션 생성 함수
export const setAreas = (areas) => ({ type: SET_AREAS, payload: { areas } });

// export const handleLoadBanner = bannerId => {
//   return async dispatch => {
//     try {
//       const response = await authApiClient(apiClient, API_METHOD.GET, `banner/${bannerId}`, undefined);
//       dispatch(loadBanner(response.data.result));
//     } catch (e) {
//       errorNotify(e);
//       return;
//     }
//   };
// };

const initialState = {
  area: [],
  category: [],
};

export default function reducer(state = initialState, action) {
  switch (action.type) {
  case SET_AREAS: {
    const { areas } = action.payload;
    return {
      ...state,
      areas,
    };
  }
  default: {
    return state;
  }
  }
}
