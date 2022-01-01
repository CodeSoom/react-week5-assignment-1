import { render, fireEvent } from "@testing-library/react";

import React from "react";
import App from "./App";

import { changeRegion, changeCategory, getRestaurants } from "./actions";
import { useDispatch, useSelector } from "react-redux";
jest.mock("react-redux");

/* 계획
-[x] dispatch 잘되는지
    - 버튼이 클릭되면 dispatch가 잘 호출되는지
-[x] selector 잘되는지
    - selector 정보 있을때 텍스트 보이는지?
- useEffect는 react내부의 동작함수이므로 mock해선 안된다
*/

describe("App", () => {
  const dispatch = jest.fn();
  beforeEach(() => {
    jest.clearAllMocks();
    useDispatch.mockImplementation(() => dispatch);
    useSelector.mockImplementation((selector) =>
      selector({
        currentRegion: "서울",
        currentCategory: 1,
        Regions: [
          { id: 1, name: "서울" },
          { id: 2, name: "부산" },
        ],
        Categories: [
          { id: 1, name: "한식" },
          { id: 2, name: "양식" },
        ],
      })
    );
  });

  it("render clicked button and buttons", () => {
    const { getByText } = render(<App />);

    expect(getByText(/부산/)).not.toBeNull();
    expect(getByText("한식 (V)")).not.toBeNull();
  });

  context("when Region AND Category button clicked", () => {
    it("Region and Category Current State is dispatched", () => {
      const { getByText } = render(<App />);

      fireEvent.click(getByText(/부산/));

      expect(dispatch).toBeCalledWith(changeRegion("부산"));

      fireEvent.click(getByText(/양식/));

      expect(dispatch).toBeCalledWith(changeCategory(2));
    });
  });

  context("when Region OR Category button clicked", () => {
    it("Restaurant API dispatch in useEffect doesn't called", () => {
      const currentRegion = "서울";
      const currentCategory = "";
      useSelector.mockImplementation((selector) =>
        selector({
          currentRegion,
          currentCategory,
          Regions: [
            { id: 1, name: "서울" },
            { id: 2, name: "부산" },
          ],
          Categories: [
            { id: 1, name: "한식" },
            { id: 2, name: "양식" },
          ],
        })
      );
      const { getByText } = render(<App />);

      fireEvent.click(getByText(/부산/));

      expect(dispatch).toBeCalledWith(changeRegion("부산"));

      expect(dispatch).not.toBeCalledWith(
        getRestaurants(currentRegion, currentCategory)
      );
    });
  });
});
