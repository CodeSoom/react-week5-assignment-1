const initialState = {

};

export default function reducer({ state = initialState, action }) {
  const actions = {};
  const { type } = action;

  if (actions[type]) return actions[type];

  return state;
}
