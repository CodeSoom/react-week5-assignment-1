import React from 'react';

import { render } from '@testing-library/react';

import CategoriesContainer from './CategoriesContainer';

describe('CategoriesContainer', () => {
  it('renders categories buttons', () => {
    const { queryByText } = render(<CategoriesContainer />);

    expect(queryByText('한식')).not.toBeNull();
    expect(queryByText('중식')).not.toBeNull();
    expect(queryByText('일식')).not.toBeNull();
    expect(queryByText('양식')).not.toBeNull();
    expect(queryByText('분식')).not.toBeNull();
    expect(queryByText('과자')).not.toBeNull();
    expect(queryByText('치킨')).not.toBeNull();
    expect(queryByText('아시아식')).not.toBeNull();
    expect(queryByText('중동')).not.toBeNull();
    expect(queryByText('가정식')).not.toBeNull();
    expect(queryByText('3분요리')).not.toBeNull();
    expect(queryByText('냉동')).not.toBeNull();
  });
});
