import { render } from '@testing-library/react';

import { useSelector, useDispatch } from 'react-redux';

import InputContainer from './InputContainer';

jest.mock('react-redux');

describe('InputContainer test', () => {
  // 동작원리?
  const dispatch = useDispatch(() => dispatch);

  // 그냥 초기값을 보여주기 위한 용도?
  useSelector.mockImplementation((selector) => selector({
    newId: 100,
    nameValue: '',
    categoryValue: '',
    placeValue: '',
    restaurants: [
      {
        id: 1,
        name: '모토쿠라시',
        category: '일식',
        place: '서울 송파구',
      },
    ],
  }));

  const renderInputContainer = () => render(<InputContainer />);

  it('renders Input', () => {
    const { getByPlaceholderText, getByText } = renderInputContainer();

    expect(getByPlaceholderText(/이름/)).toBeInTheDocument();
    expect(getByPlaceholderText(/분류/)).toBeInTheDocument();
    expect(getByPlaceholderText(/주소/)).toBeInTheDocument();
    expect(getByText(/등록/)).toBeInTheDocument();
  });
});
