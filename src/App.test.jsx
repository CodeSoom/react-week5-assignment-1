/**
 * # 과제 5의 요구사항
 * 1. 카테고리
 * - 카테고리 목록 보기
 * - 카테고리 선택
 *
 * 2. 지역
 * - 지역 목록 보기
 * - 지역 선택
 *
 * 3. 레스토랑
 * - 카테고리 및 지역에 따른 레스토랑 목록 보기
 */

describe('<App />', () => {
  context('render App', () => {
    it('shows categories', () => {});
    it('shows regions', () => {});
  });
  context('with a selected region', () => {
    it('shows a mark for a selected region', () => {});
  });

  context('with a selected category', () => {
    it('shows a mark for a selected category', () => {});
  });

  context('with a selected region &  with a selected category', () => {
    it('shows a mark for a selected category', () => {});
    it('shows restaurants', () => {});
  });
});

describe('<Regions />', () => {
  context('render Regions', () => {
    it('shows regions', () => {});
  });

  context('with a selected region', () => {
    it('shows a mark for a selected region', () => {});
  });
});

describe('<Categories />', () => {
  context('render Categories', () => {
    it('shows categories', () => {});
  });

  context('with a selected category', () => {
    it('shows a mark for a selected category', () => {});
  });
});

describe('<Restaurants />', () => {
  context('render Restaurants', () => {
    it('does not show restaurants', () => {});
  });
  context('with a selected region &  with a selected category', () => {
    it('shows restaurants', () => {});
  });
});
