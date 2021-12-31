import { render, fireEvent } from "@testing-library/react";

import reducer, { initialState } from "./reducer";
import { setInitialState, changeRegion, changeCategory } from "./actions";

// mock를 넣어서 수정
// refactoring으로 커밋하자

describe("reducer", () => {
  it("Set Restaurant regions, categories Basic API data", () => {
    //setInitialState 검사까지 같이 되는 것
    const state = reducer(
      initialState,
      setInitialState(
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
