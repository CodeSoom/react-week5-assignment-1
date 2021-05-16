Feature('Category');

const categories = ['한식', '중식', '일식', '양식', '분식'];

Scenario('카테고리 목록을 볼 수 있습니다.', ({ I }) => {
  I.amOnPage('/');

  categories.forEach((category) => I.see(category));
});

Scenario('카테고리를 선택하면 선택됨을 표시합니다.', ({ I }) => {
  I.amOnPage('/');

  categories.forEach((category) => {
    I.click(`${category}`);
    I.see(`${category}(V)`);
  });
});
