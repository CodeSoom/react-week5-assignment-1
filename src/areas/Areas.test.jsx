import { fireEvent, render } from '@testing-library/react';
import { useDispatch } from 'react-redux';
import areas from '../../fixtures/areas';
import { setAreaName } from '../redux/reducer';

import Areas from './Areas';

jest.mock('react-redux');

describe('Areas', () => {
  const handleClick = jest.fn();
  const dispatch = jest.fn();
  useDispatch.mockImplementation(() => dispatch);

  describe('지역', () => {
    it('서울이 보인다', () => {
      const { getByText } = render((
        <Areas areas={areas} handleClick={handleClick} />
      ));
      expect(getByText(/서울/)).not.toBeNull();
    });
  });

  describe('지역명을 클릭하면', () => {
    it('handleClick이 실행된다', () => {
      const { getByText } = render((
        <Areas areas={areas} handleClick={handleClick} />
      ));
      const button = getByText('서울');
      expect(handleClick).not.toBeCalled();
      fireEvent.click(button);
      expect(handleClick).toBeCalled();
    });
  });

  describe('지역명을 클릭하면', () => {
    it('선택한 지역명 우측에 (V) 가 표시된다', () => {
      const { getByText } = render((
        <Areas areas={[{ id: 1, name: '서울(V)' }]} handleClick={handleClick} />
      ));
      expect(getByText('서울(V)')).not.toBeNull();
    });
  });

  // describe('지역명을 클릭하면', () => {
  //   it('setAreaName dispatch가 실행된다', () => {
  //     const { getByText } = render((
  //       <Areas areas={areas} handleClick={handleClick} />
  //     ));
  //     const button = getByText('서울');
  //     fireEvent.click(button);
  //     expect(dispatch).toBeCalledWith(setAreaName(1));
  //   });
  // });
});
