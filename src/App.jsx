/**
 * 0. 지역, 분류 목록을 읽기
 * 1. 지역 선택 - Regions <- API
 * 2. 분류 선택 - Categories - 한식, 중식, 일식, ... <- API
 * 3. 식당 목록 - Restaurants <- API (with region, category)
 */

function RegionsContainer() {
  return null;
}
function CategoriesContainer() {
  return null;
}
function RestaurntsContainer() {
  return null;
}

export default function App() {
  return (
    <>
      <RegionsContainer />
      <CategoriesContainer />
      <RestaurntsContainer />
    </>
  );
}
