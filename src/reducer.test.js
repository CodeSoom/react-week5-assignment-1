import { render, fireEvent } from "@testing-library/react";

import reducer, { initialState } from "./reducer";
import { loadInitialState, changeRegion, changeCategory } from "./actions";

describe("reducer", () => {
  it("Load Restaurant regions, categories Basic API data", () => {
    const state = reducer(
      initialState,
      loadInitialState(
        [
          { id: 1, name: "서울" },
          { id: 2, name: "부산" },
        ],
        [{ id: 1, name: "한식" }]
      )
    );

    expect(state.Regions).toHaveLength(2);
    expect(state.Categories).toHaveLength(1);
  });

  context("when Regions button Clicked", () => {
    it("change currentRegion state", () => {
      const state = reducer(initialState, changeRegion(1));

      expect(state.currentRegion).toBe(1);
    });
  });

  context("when Categories button Clicked", () => {
    it("change currentCategory state", () => {
      const state = reducer(initialState, changeCategory(2));

      expect(state.currentCategory).toBe(2);
    });
  });
});
