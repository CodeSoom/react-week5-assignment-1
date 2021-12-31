import { render, fireEvent } from "@testing-library/react";

import Restaurants from "./Restaurants";

/* 계획
1. props에 따라 restaurants가 잘 보인다
*/

describe("Restaurants", () => {
  it("render Restaurants that fits region and category", () => {
    const restaurants = [
      {
        id: 9,
        categoryId: 2,
        name: "호신각",
        address: "서울 강남구",
        information: "호신각 in 서울 강남구",
      },
      {
        id: 10,
        categoryId: 2,
        name: "홍콩반점",
        address: "서울시 서대문구",
        information: "홍콩반점 in 서울시 서대문구",
      },
    ];

    const { getByText } = render(<Restaurants restaurants={restaurants} />);

    expect(getByText(/호신각/)).toBeInTheDocument();
    expect(getByText(/홍콩반점/)).toBeInTheDocument();
  });
});
