import React from 'react';
import { useSelector, useDispatch } from 'react-redux';

import { render, fireEvent } from '@testing-library/react';

import Categories from './Categories';

import { categories } from '../fixtures/categories';

jest.mock('react-redux');

describe('Categories', () => {
  // GIVEN
  const dispatch = jest.fn();
  const handleClick = jest.fn();
  useDispatch.mockImplementation(() => dispatch);
  useSelector.mockImplementation((selector) => selector({ categories }));

  it('category를 보여준다.', () => {
    // WHEN
    const { getByText } = render(<Categories categories={categories} />);

    // THEN
    expect(getByText('한식')).not.toBeNull();
    expect(getByText('중식')).not.toBeNull();
    expect(getByText('일식')).not.toBeNull();
  });

  it('카테고리 버튼을 클릭하면 클릭 이벤트가 발생한다.', () => {
    // WHEN
    const { getByText } = render(
      <Categories categories={categories} onClick={handleClick} />,
    );

    // THEN
    fireEvent.click(getByText('한식'));
    expect(handleClick).toBeCalled();
  });

  it('선택된 카테고리는 V 표시가 있다.', () => {
    const { getByText } = render(
      <Categories categories={categories} selectedCategory={1} />,
    );

    expect(getByText(/(V)/)).not.toBeNull();
  });
});
