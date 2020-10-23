import React from 'react';

import { render } from '@testing-library/react';

import { useSelector } from 'react-redux';

import CategoriesContainer from './CategoriesContainer';

jest.mock('react-redux');

describe('CategoriesContainer', () => {
  useSelector.mockImplementation((selector) => selector({
    categories: [
      { id: 1, name: '한식' },
    ],
  }));

  const renderCategoriesContainer = () => render(
    <CategoriesContainer />,
  );

  it('renders categories', () => {
    const { getByText } = renderCategoriesContainer();

    expect(getByText('한식')).not.toBeNull();
  });
});
