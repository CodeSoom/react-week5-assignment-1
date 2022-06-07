import { fireEvent, render } from '@testing-library/react';
import categories from '../../fixtures/categories';

import Categories from './Categories';

jest.mock('react-redux');

describe('Categories', () => {
  const handleClick = jest.fn();

  describe('한식', () => {
    it('한식이 보인다', () => {
      const { getByText } = render((
        <Categories categories={categories} handleClick={handleClick} />
      ));
      expect(getByText(/한식/)).not.toBeNull();
    });
  });

  describe('카테고리를 클릭하면', () => {
    it('handleClick이 실행된다', () => {
      const { getByText } = render((
        <Categories categories={categories} handleClick={handleClick} />
      ));
      const button = getByText('한식');
      expect(handleClick).not.toBeCalled();
      fireEvent.click(button);
      expect(handleClick).toBeCalled();
    });
  });

  describe('카테고리를 클릭하면', () => {
    it('선택한 카테고리명 우측에 (V) 가 표시된다', () => {
      const { getByText } = render((
        <Categories categories={[{ id: 1, name: '한식(V)' }]} handleClick={handleClick} />
      ));
      expect(getByText('한식(V)')).not.toBeNull();
    });
  });
});
