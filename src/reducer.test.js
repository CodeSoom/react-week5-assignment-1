import reducer from "./reducer";

import { render, fireEvent } from "@testing-library/react";

const initialState = {
  regions: [
    { id: 1, name: "서울" },
    { id: 2, name: "대전" },
  ],
  categories: [
    { id: 1, name: "한식" },
    { id: 2, name: "대전" },
  ],
};

describe("reducer", () => {
  it("Load Basic API Restaurant data", () => {
    const state = reducer(
      {},
      loadInitialState({
        type: "Load_InitialState",
        payload: {
          regions: [
            { id: 1, name: "서울" },
            { id: 2, name: "대전" },
          ],
          categories: [{ id: 1, name: "한식" }],
        },
      })
    );

    expect(state.Region).toHaveLength(2);
    expect(state.Categories).toHaveLength(1);
  });

  context("when Regions button Clicked", () => {
    const state = reducer(initialState, changeRegion(1));

    expect(state.currentRegion).toBe(1);
  });

  context("when Categories button Clicked", () => {
    const state = reducer(initialState, changeCategory(2));

    expect(state.currentCategory).toBe(2);
  });
});
