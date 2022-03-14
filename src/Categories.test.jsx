import { fireEvent, render } from '@testing-library/react';
import { useDispatch, useSelector } from 'react-redux';

import Categories from './Categories';

jest.mock('react-redux');
jest.mock('./services/api');

describe('Categories', () => {
  context('categories에 데이터가 있을 경우', () => {
    it('해당 정보를 가져와 화면에 표시한다', () => {
      const dispatch = jest.fn();
      useSelector.mockImplementation((selector) => selector({
        categories: [
          { id: 101, name: '한식' },
          { id: 202, name: '양식' },
          { id: 303, name: '분식' },
        ],
      }));
      useDispatch.mockImplementation(() => dispatch);

      const { getByText, getAllByRole } = render((
        <Categories />
      ));

      expect(getByText(/한식/)).not.toBeNull();
      expect(getAllByRole('button').length).toBe(3);
    });

    it('클릭할 경우 해당 category가 selectedCategory에 추가된다', () => {
      const dispatch = jest.fn();
      useSelector.mockImplementation((selector) => selector({
        categories: [
          { id: 101, name: '한식' },
        ],
        selectedCategory: null,
      }));
      useDispatch.mockImplementation(() => dispatch);

      const { container, getByText } = render((
        <Categories />
      ));

      expect(container).toHaveTextContent('한식');
      fireEvent.click(getByText('한식'));
      expect(dispatch).toBeCalled();
    });

    it('select한 값과 같은 category가 있을 경우 (V)가 붙어서 표시된다', () => {
      const dispatch = jest.fn();
      useSelector.mockImplementation((selector) => selector({
        categories: [
          { id: 101, name: '한식' },
          { id: 202, name: '분식' },
        ],
        selectedCategory: { id: 101, name: '한식' },
      }));
      useDispatch.mockImplementation(() => dispatch);

      const { container, getByText } = render((
        <Categories />
      ));

      expect(container).toHaveTextContent('(V)');
      expect(getByText('분식')).not.toHaveTextContent('(V)');
    });
  });

  context('categories에 데이터가 없을 경우', () => {
    it('목록이 없다는 문구를 표시한다', () => {
      const dispatch = jest.fn();
      useSelector.mockImplementation((selector) => selector({
        categories: [],
      }));
      useDispatch.mockImplementation(() => dispatch);

      const { container } = render((
        <Categories />
      ));

      expect(container).toHaveTextContent('목록이 없습니다');
    });
  });
});
