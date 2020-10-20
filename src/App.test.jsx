import React from "react";

import { render } from "@testing-library/react";

import App from "./App";

describe("App", () => {
  const renderApp = () => render(<App />);
  it("show categories and regions", () => {
    const { getByText } = renderApp();

    const categories = [
      '한식', '중식', '일식', '양식', '분식'
    ]
    const regions = [
      '서울', '대구', '부산', '대전', '강원도', '광주'
    ]

    categories.forEach((category) => {
      expect(getByText(`${category}`)).not.toBeNull();
    })

    regions.forEach((region) => {
      expect(getByText(`${region}`)).not.toBeNull();
    })
  })
})

