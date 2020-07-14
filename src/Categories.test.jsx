import React from 'react';

import { render, fireEvent } from '@testing-library/react';

import Categories from './Categories';

import categories from '../fixtures/categories';

describe('<Categories />', () => {
  it('render Categories', () => {
    const { getByText } = render((
      <Categories categories={categories} />
    ));

    expect(getByText('한식')).not.toBeNull();
    expect(getByText('중식')).not.toBeNull();
    expect(getByText('일식')).not.toBeNull();
    expect(getByText('양식')).not.toBeNull();
    expect(getByText('분식')).not.toBeNull();
    expect(getByText('짬뽕밥')).not.toBeNull();
  });

  it('click Category', () => {
    const handleClick = jest.fn();
    const { getByText } = render((
      <Categories categories={categories} onClick={handleClick} />
    ));

    fireEvent.click(getByText('한식'));
    expect(handleClick).toBeCalledWith(1);
  });
});
