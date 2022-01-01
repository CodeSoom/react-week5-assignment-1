import { render, fireEvent } from "@testing-library/react";
import { screen } from "@testing-library/dom";
import Regions from "./Regions";

/* 계획
1. 버튼이 잘보인다
2. 버튼이 잘 눌린다 -> v표시 잘 보인다
*/

describe("Regions", () => {
  context("restaurantRegions prop has no data", () => {
    it("Not render any button", () => {
      const regions = [];
      const { queryByRole } = render(<Regions restaurantRegions={regions} />);

      expect(queryByRole("button")).toBeNull();
    });
  });

  context("restaurantRegions prop has data", () => {
    it("render Restaurant Regions has two type button", () => {
      const currentRegion = "서울";
      const restaurantRegions = [
        { id: 1, name: "서울" },
        { id: 2, name: "부산" },
      ];
      const { queryByText } = render(
        <Regions
          currentRegion={currentRegion}
          restaurantRegions={restaurantRegions}
        />
      );

      expect(queryByText("서울 (V)")).not.toBeNull();
      expect(queryByText("부산")).not.toBeNull();
    });
  });

  it("Restaurant Regions button clicked and rerender", () => {
    const handleClick = jest.fn();
    const currentRegion = "서울";
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
    // 상태값이 변한거는 <Regions />의 관심사가 아니므로 데이터가 바뀐거는 보여주지 않는다
    // RegExpr에서 ()은 캡쳐링 기능이다
  });
});
