import reducer, { initialState } from "./reducer";
import {
  setInitialState,
  changeRegion,
  changeCategory,
  setRestaurants,
} from "./actions";

describe("reducer", () => {
  it("renders not restaurant API data", () => {
    const state = reducer();

    expect(state.currentRegion).not.toBeNull();
  });

  it("Set Restaurant regions, categories Basic API data", () => {
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

  it("render Restaurants List for region and category", () => {
    const state = reducer(
      initialState,
      setRestaurants([{ id: 9, name: "호신각" }])
    );

    expect(state.Restaurants).toHaveLength(1);
  });
});
