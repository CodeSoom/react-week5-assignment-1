import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { render, screen, fireEvent } from '@testing-library/react';

import LocaleContainer from './LocaleContainer';
import locales from '../../fixtures/locales';

jest.mock('react-redux');

test('LocaleContainer', () => {
  const dispatch = jest.fn();

  useDispatch.mockImplementation(() => dispatch);
  useSelector.mockImplementation((selector) => selector({
    locales,
  }));

  render(<LocaleContainer />);

  expect(screen.getByText('서울')).toBeInTheDocument();

  fireEvent.click(screen.getByRole('button', { name: '서울' }));

  expect(dispatch).toBeCalledWith({
    type: 'updateLocation',
  });
});
