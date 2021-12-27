import { render, fireEvent } from '@testing-library/react';

import Input from './Input';

// Input test
// ToDo: "등록" 버튼 클릭 후 value 공란으로

describe('Input test', () => {
  const handleChange = jest.fn();
  const handleClick = jest.fn();

  const renderInput = (value) => render(
    <Input
      value={value}
      onChange={handleChange}
      onClick={handleClick}
    />,
  );

  beforeEach(() => {
    jest.clearAllMocks();
  });

  it('renders Input', () => {
    const value = '';
    const { getByPlaceholderText, getByText } = renderInput(value);

    expect(getByPlaceholderText('이름').value).toBe(value);
    expect(getByPlaceholderText('분류').value).toBe(value);
    expect(getByPlaceholderText('주소').value).toBe(value);
    expect(getByText('등록')).toBeInTheDocument();
  });

  context('when changes value of Input', () => {
    it('calls onChange handler', () => {
      const value = '';
      const { getByPlaceholderText } = renderInput(value);

      fireEvent.change(getByPlaceholderText('이름'), {
        target: { value: '마녀식당' },
      });
      fireEvent.change(getByPlaceholderText('분류'), {
        target: { value: '양식' },
      });
      fireEvent.change(getByPlaceholderText('주소'), {
        target: { value: '서울시 강남구' },
      });

      expect(handleChange).toBeCalled();
    });
  });

  context('when keeps value of Input', () => {
    it('not call onChange handler', () => {
      const value = '';
      const { getByPlaceholderText } = renderInput(value);

      fireEvent.change(getByPlaceholderText('이름'), {
        target: { value: '' },
      });
      fireEvent.change(getByPlaceholderText('분류'), {
        target: { value: '' },
      });
      fireEvent.change(getByPlaceholderText('주소'), {
        target: { value: '' },
      });

      expect(handleChange).not.toBeCalled();
    });
  });

  context('when click "등록" button', () => {
    it('calls onClick handler', () => {
      const { getByText } = renderInput();

      fireEvent.click(getByText('등록'));

      expect(handleClick).toBeCalled();
    });
  });
});
