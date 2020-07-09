import React from 'react';

import { render, fireEvent } from '@testing-library/react';

import AddButton from './AddButton';

describe('<AddButton />', () => {
  const handleClickButton = jest.fn();

  const renderComponent = () => render((
    <AddButton handleClickButton={handleClickButton} />
  ));

  it('fire click event', () => {
    const { getByRole } = renderComponent();
    // When
    const button = getByRole('button');
    fireEvent.click(button);
    // Then
    expect(handleClickButton).toBeCalled();
  });
});
