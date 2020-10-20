import React from "react";

import { fireEvent, render } from "@testing-library/react";

import App from "./App";

describe("App", () => {
  const renderApp = () => render(<App />);
  const handleClick = jest.fn();
  it("show categories and regions", () => {
    const { getByText } = renderApp();

    const categories = [
      '서울', '대구', '부산', '대전', '강원도', '광주'
    ]
    const regions = [
      '한식', '중식', '일식', '양식', '분식'
    ]

    categories.forEach((category) => {
      expect(getByText(`${category}`)).not.toBeNull();
    })

    regions.forEach((category) => {
      expect(getByText(`${category}`)).not.toBeNull();
    })

    fireEvent.click(getByText('서울'));

    expect(handleClick).toBeCalled();
  })
})

