import React from 'react';

import { render } from '@testing-library/react';

import { useSelector } from 'react-redux';

import CategoriesContainer from './CategoriesContainer';

import categories from '../fixtures/categories';

describe('<CategoriesContainer />', () => {
  it('render categories', () => {
    useSelector.mockImplementation((selector) => selector({
      categories,
    }));

    const { getByText } = render((
      <CategoriesContainer />
    ));

    expect(getByText('한식')).not.toBeNull();
    expect(getByText('중식')).not.toBeNull();
    expect(getByText('일식')).not.toBeNull();
    expect(getByText('양식')).not.toBeNull();
    expect(getByText('분식')).not.toBeNull();
    expect(getByText('짬뽕밥')).not.toBeNull();
  });
});
