import { updateRestaurantInput } from './actions';

describe('actions', () => {
  describe('updateRestaurantInput', () => {
    context('when calling undefined name', () => {
      it('returns object for noting to do', () => {
        const notingToDo = {
          type: 'undefined',
        };
        const actionObject = updateRestaurantInput(
          'undefinedName',
          'input value',
        );
        expect(actionObject).toEqual(notingToDo);
      });
    });
  });
});
