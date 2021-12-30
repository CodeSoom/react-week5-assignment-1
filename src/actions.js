export const loadInitialState = ({ regions, categories }) => {
  return {
    type: "Load_InitialState",
    payload: { regions, categories },
  };
};

export const changeRegion = () => {};
