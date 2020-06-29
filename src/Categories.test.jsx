import React from 'react';
import { useSelector, useDispatch } from 'react-redux';

import { render, fireEvent } from '@testing-library/react';

import Categories from './Categories';

import { categories } from '../fixtures/categories';

jest.mock('react-redux');

describe('Categories', () => {
  it('props로 받은 category를 보여준다..', () => {
    const { getByText } = render(<Categories categories={categories} />);
    expect(getByText('한식')).not.toBeNull();
    expect(getByText('중식')).not.toBeNull();
    expect(getByText('일식')).not.toBeNull();
  });
});
