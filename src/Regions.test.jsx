import React from 'react';

import { render } from '@testing-library/react';

import Regions from './Regions';

describe('Regions', () => {
  it('renders region buttons', () => {
    const { queryByText } = render(<Regions />);

    expect(queryByText('서울')).not.toBeNull();
    expect(queryByText('대전')).not.toBeNull();
    expect(queryByText('대구')).not.toBeNull();
    expect(queryByText('부산')).not.toBeNull();
    expect(queryByText('광주')).not.toBeNull();
    expect(queryByText('강원도')).not.toBeNull();
    expect(queryByText('인천')).not.toBeNull();
  });
});
