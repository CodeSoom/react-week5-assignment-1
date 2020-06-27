Feature('Region');

const regions = ['서울', '대전', '대구', '부산', '광주', '강원도', '인천'];

Scenario('지역 목록을 볼 수 있습니다.', (I) => {
  I.amOnPage('/');

  regions.forEach((region) => I.see(region));
});

Scenario('지역을 선택하면 선택됨을 표시합니다.', (I) => {
  I.amOnPage('/');

  regions.forEach((region) => {
    I.click(`${region}`);
    I.see(`${region}(V)`);
  });
});
