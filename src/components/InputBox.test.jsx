import React from 'react';

import { render, fireEvent } from '@testing-library/react';

import InputBox from './InputBox';

describe('<InputBox />', () => {
  const handleChangeInputValue = jest.fn();

  const renderComponent = ({ inputProperty, inputValue }) => render((
    <InputBox
      inputProperty={inputProperty}
      inputValue={inputValue}
      handleChangeInputValue={handleChangeInputValue}
    />
  ));

  // Given
  const inputProperty = 'name';
  const inputValue = '레스토랑 이름';

  it('fire change event', () => {
    const { getByRole } = renderComponent({ inputProperty, inputValue: '' });
    // When
    const inputBox = getByRole('textbox');
    fireEvent.change(inputBox, { target: { value: inputValue } });
    // Then
    expect(handleChangeInputValue).toBeCalled();
    expect(inputBox.name).toBe(inputProperty);
  });
});
