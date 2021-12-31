import { render, fireEvent } from "@testing-library/react";

import { setInitialState } from "./actions";
import { useDispatch } from "react-redux";
/*
 1. fetchRestaurantRegions, fetchRestaurantCategories가 이루어졌다면
 dispatch가 적절하게 호출되었는가
 2. fetchRestaurants가 이루어졌다면 dispatch가 적절하게 호출되었는가
*/
describe("actions", () => {
  it("Initial Load data fetch and dispatch that data", async () => {
    const fetchRestaurantRegions = jest
      .fn()
      .mockResolvedValue([{ id: 1, name: "서울" }]);
    const fetchRestaurantCategories = jest
      .fn()
      .mockResolvedValue([{ id: 1, name: "한식" }]);
    const dispatch = jest.fn();
    useDispatch.mockImplementation(() => dispatch);

    const regions = await fetchRestaurantRegions();
    const categories = await fetchRestaurantCategories();

    expect(dispatch).toBeCalledWith(setInitialState(regions, categories));
  });
});
