import { useDispatch } from 'react-redux';

import reducer from './reducer';

import {
  changeNameValue,
  changeCategoryValue,
  changePlaceValue,
  clickAdd,
} from './action';

jest.mock('react-redux');

describe('reducer test', () => {
  const dispatch = useDispatch(() => dispatch); // 이해안감

  context('with changeNameValue', () => {
    it('changes state with value of name', () => {
      const state = reducer({
        nameValue: '',
      }, changeNameValue('마녀공장'));

      expect(state.nameValue).toBe('마녀공장');
    });
    // ToDO: calls useDispatch
  });

  context('with changeCategoryValue', () => {
    it('changes state with value of category', () => {
      const state = reducer({
        categoryValue: '',
      }, changeCategoryValue('양식'));

      expect(state.categoryValue).toBe('양식');
    });
  });

  context('with changePlaceValue', () => {
    it('changes state with value of place', () => {
      const state = reducer({
        placeValue: '',
      }, changePlaceValue('서울시 강남구'));

      expect(state.placeValue).toBe('서울시 강남구');
    });
  });

  // ToDO: without changing value

  context('with clickAdd', () => {
    it('return new state of restaurants', () => {
      const state = reducer({
        newId: 100,
        nameValue: '',
        categoryValue: '',
        placeValue: '',
        restaurants: [],
      }, clickAdd());

      expect(state.restaurants).toHaveLength(1);
      expect(state.newId).toBeDefined();
    });
  });
});
