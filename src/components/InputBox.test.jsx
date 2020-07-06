import React from 'react';

import { render, fireEvent } from '@testing-library/react';

import InputBox from './InputBox';

describe('<InputBox />', () => {
  const handleChangeInput = jest.fn();

  const renderComponent = ({ property, value }) => render((
    <InputBox
      property={property}
      value={value}
      handleChangeInput={handleChangeInput}
    />
  ));

  // Given
  const property = 'name';
  const value = '레스토랑 이름';

  it('fire change event', () => {
    const { getByRole } = renderComponent({ property, value: '' });
    // When
    const inputBox = getByRole('textbox');
    fireEvent.change(inputBox, { target: { value } });
    // Then
    expect(handleChangeInput).toBeCalled();
    expect(inputBox.name).toBe(property);
  });
});
