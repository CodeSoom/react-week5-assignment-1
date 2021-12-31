import { render, fireEvent } from "@testing-library/react";

import Regions from "./Regions";

/* 계획
1. 버튼이 잘보인다
2. 버튼이 잘 눌린다 -> v표시 잘 보인다
*/

describe("Regions", () => {
  it("render Restaurant Regions buttons", () => {
    const regions = [
      { id: 1, name: "서울" },
      { id: 2, name: "부산" },
    ];
    const { getByText } = render(<Regions restaurantRegions={regions} />);

    expect(getByText(/서울/)).not.toBeNull();
    expect(getByText(/부산/)).not.toBeNull();
  });

  it("Restaurant Regions button clicked and rerender", () => {
    const handleClick = jest.fn();
    const currentRegion = "부산";
    const regions = [
      { id: 1, name: "서울" },
      { id: 2, name: "부산" },
    ];
    const { getByText } = render(
      <Regions
        currentRegion={currentRegion}
        restaurantRegions={regions}
        onClick={handleClick}
      />
    );

    fireEvent.click(getByText(/부산/));

    expect(handleClick).toBeCalledWith("부산");
    //상태값이 변한거는 <Regions />의 관심사가 아니다
    // RegExpr에서 ()은 캡쳐링 기능이다
    expect(getByText("부산 (V)")).not.toBeNull();
  });
});
