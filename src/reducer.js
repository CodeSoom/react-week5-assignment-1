const initialState = {
  // TODO: 조회 초기 상태를 정의
};

const reducers = {
  // TODO: Reducer가 action에 따라 리턴할 값을 정의
};

export default function reducer(state = initialState, action = { type: undefined }) {
  return reducers[action.type] ? reducers[action.type](state, action) : state;
}
