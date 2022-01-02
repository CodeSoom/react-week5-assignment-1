import { fireEvent, render } from '@testing-library/react';
import { useDispatch, useSelector } from 'react-redux';

import Categories from './Categories';

jest.mock('react-redux');
jest.mock('./services/api');

describe('Categories', () => {
  it('Api의 정보가 있을 경우 해당 정보를 가져와 화면에 표시한다', () => {
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

  it('Api의 정보가 없으면 아무런 정보도 화면에 표시하지 않는다', () => {
    const dispatch = jest.fn();
    useSelector.mockImplementation((selector) => selector({
      categories: [],
    }));
    useDispatch.mockImplementation(() => dispatch);

    const { getAllByRole } = render((
      <Categories />
    ));

    expect(getAllByRole('list')[0].innerText).toBeUndefined();
  });

  it('select한 값이 있을 경우 selectedCategory에 추가된다', () => {
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
});
