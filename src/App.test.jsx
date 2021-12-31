import { render, fireEvent } from "@testing-library/react";

import App from "./App";

import { changeRegion, changeCategory } from "./actions";
import { useDispatch, useSelector } from "react-redux";
import React, { useEffect } from "react";
jest.mock("react-redux");

/* 계획
-[x] dispatch 잘되는지 
    - 버튼이 클릭되면 dispatch가 잘 호출되는지
-[x] selector 잘되는지
    - selector 정보 있을때 텍스트 보이는지?
-[x] useEffect 잘되는지
    - 첫 로드때 불러와져서 화면에 렌더링 잘 뿌려주는지
*/

describe("App", () => {
  const dispatch = jest.fn();
  useDispatch.mockImplementation(() => dispatch);
  useSelector.mockImplementation((selector) =>
    selector({
      currentRegion: "서울",
      currentCategory: 2,
      Regions: [{ id: 1, name: "서울" }],
      Categories: [{ id: 2, name: "양식" }],
    })
  );

  beforeEach(() => {
    jest.clearAllMocks();
  });

  it("render clicked button and buttons", () => {
    const { getByText } = render(<App />);

    expect(getByText(/서울/)).not.toBeNull();
    expect(getByText("양식 (V)")).not.toBeNull();
  });

  context("when Region and Category button clicked ", () => {
    it("Region and Category State is dispatched", () => {
      const { getByText } = render(<App />);

      fireEvent.click(getByText(/서울/));

      expect(dispatch).toBeCalledWith(changeRegion("서울"));

      fireEvent.click(getByText(/양식/));

      expect(dispatch).toBeCalledWith(changeCategory(2));
    });
  });

  // context("when the first load is carried out", () => {
  //   it("Restaurant API data is rendered", () => {
  //     useSelector.mockImplementation((selector) =>
  //       selector({
  //         currentRegion: "",
  //         currentCategory: "",
  //         Regions: [],
  //         Categories: [],
  //       })
  //     );
  //     const { container } = render(<App />);

  //     expect(container).not.toHaveTextContent();

  //     jest.spyOn(React, "useEffect").mockImplementation((f) => f());

  //     expect(useEffect).toBeCalled();
  //   });
  // });
});
