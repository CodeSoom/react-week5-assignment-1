import { fireEvent, render } from '@testing-library/react';
import { useDispatch, useSelector } from 'react-redux';

import CategoriesContainer from './CategoriesContainer';
import { setCategory } from '../../reducer/actions';

jest.mock('react-redux');
jest.mock('../../services/api');

describe('CategoriesContainer', () => {
  const dispatch = jest.fn();

  beforeEach(() => {
    dispatch.mockRestore();
    useDispatch.mockImplementation(() => dispatch);
  });

  // TODO: fetch -> 불러온다 명칭변경
  it('컴포넌트 mount시, 음식종류들을 fetch한다.', async () => {
    useSelector.mockImplementation((selector) => selector({
      categories: [],
    }));

    render(<CategoriesContainer />);
    expect(dispatch).toBeCalled();
  });

  it('지역을 클릭하면 dispatch를 실행한다.', () => {
    useSelector.mockImplementation((selector) => selector({
      categories: [
        { id: 1, name: '한식' },
      ],
    }));

    const { getByText } = render(<CategoriesContainer />);

    fireEvent.click(getByText('한식'));

    expect(dispatch).toBeCalledWith(setCategory({ id: 1, name: '한식' }));
  });
});
