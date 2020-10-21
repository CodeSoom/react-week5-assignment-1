import {
  intializeSelectButtons,
} from './actions';

describe('intializeSelectButtons', () => {
  it('호출하면 intializeSelectButtons action이 반환합니다. ', () => {
    const action = intializeSelectButtons();
    expect(action).toEqual({ type: 'intializeSelectButtons' });
  });
});