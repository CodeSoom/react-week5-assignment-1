import { useDispatch, useSelector } from "react-redux";

import { setCategories } from "./actions";
import reducer from "./reducer";

jest.mock('react-redux');

describe('reducer', () => {
  describe('setCategories', () => {
    it('set categories', () => {
      const state = reducer({
        categories: [],
      }, setCategories([
        { id: 1, name: '한식'},
      ]));

      expect(state.categories).not.toHaveLength(0);
    });
  });
});
