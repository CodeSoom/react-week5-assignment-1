import SelectableItem from './SelectableItem';

describe('SelectableItem', () => {
  it('selected의 기본값은 false이다', () => {
    expect(new SelectableItem({}).selected).toBe(false);
  });

  context('selected가 true인 경우,', () => {
    it('content에 (V)가 추가된다.', () => {
      const item = { name: '이름', selected: true };
      expect(new SelectableItem(item).content).toContain('(V)');
    });
  });
});
