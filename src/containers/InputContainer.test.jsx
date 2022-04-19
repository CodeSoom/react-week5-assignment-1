import { fireEvent, render } from '@testing-library/react';
import { useDispatch, useSelector } from 'react-redux';

import {
  addRestaurant, updateAddress, updateCategory, updateName,
} from '../redux/actions';

import InputContainer from './InputContainer';

jest.mock('react-redux');

describe('InputContainer', () => {
  const dispatch = jest.fn();
  useDispatch.mockImplementation(() => dispatch);

  useSelector.mockImplementation((selector) => selector({
    name: '피카츄',
    category: '포켓몬',
    address: '태초마을',
  }));

  beforeEach(() => {
    jest.clearAllMocks();
  });

  function renderInputContainer() {
    return render(<InputContainer />);
  }

  it('renders 3 inputs and 1 button', () => {
    const { queryByLabelText, queryByText } = renderInputContainer();

    expect(queryByLabelText('이름').getAttribute('placeholder')).toBe('이름');
    expect(queryByLabelText('분류').getAttribute('placeholder')).toBe('분류');
    expect(queryByLabelText('주소').getAttribute('placeholder')).toBe('주소');
    expect(queryByText('등록')).not.toBeNull();
  });

  it('changes the name', () => {
    const { queryByLabelText } = renderInputContainer();

    fireEvent.change(queryByLabelText('이름'),
      { target: { value: '반가워요' } });

    expect(dispatch).toBeCalledWith(updateName({ name: '반가워요' }));
  });

  it('changes the category', () => {
    const { queryByLabelText } = renderInputContainer();

    fireEvent.change(queryByLabelText('분류'),
      { target: { value: '한식' } });

    expect(dispatch).toBeCalledWith(updateCategory({ category: '한식' }));
  });

  it('changes the address', () => {
    const { queryByLabelText } = renderInputContainer();

    fireEvent.change(queryByLabelText('주소'),
      { target: { value: '성남시 분당구' } });

    expect(dispatch).toBeCalledWith(updateAddress({ address: '성남시 분당구' }));
  });

  it('adds a new restaurant', () => {
    const { queryByText } = renderInputContainer();

    fireEvent.click(queryByText('등록'));

    expect(dispatch).toBeCalledWith(addRestaurant({
      name: '피카츄',
      category: '포켓몬',
      address: '태초마을',
    }));
  });
});
