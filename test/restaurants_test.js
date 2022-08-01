Feature('Restaurant');

Scenario('카테고리와 지역을 모두 선택하면 레스토랑 목록을 볼 수 있습니다.', ({ I }) => {
  I.amOnPage('/');

  I.click('서울');
  I.click('한식');

  I.see('김초밥');
  I.see('한국식 초밥');

  I.click('부산');
  I.see('밀면넘어져요');
});
