const initialState = {

};

export default function reducer(state = initialState, action) {
  const actions = {
    updateRegion: () => {

    },
  };

  if (actions[action.type]) actions[action.type]();

  return state;
}
