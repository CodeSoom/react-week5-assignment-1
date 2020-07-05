import { get, equal } from './utils';

test('get', () => {
  // Given
  const state = {
    id: 1,
    name: '홍길동',
  };

  // When
  const getName = get('name');
  const getId = get('id');

  // Then
  expect(getName(state)).toBe(state.name);
  expect(getId(state)).toBe(state.id);
});

test('equal', () => {
  // Given
  const state = {
    id: 1,
    name: '홍길동',
  };

  // When
  const equalName = equal('name', '홍길동');
  const equalId = equal('id', 1);
  const notEqualName = equal('name', '고길동');

  // Then
  expect(equalName(state)).toBeTruthy();
  expect(equalId(state)).toBeTruthy();
  expect(notEqualName(state)).toBeFalsy();
});
