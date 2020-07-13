import React from 'react';

import { render } from '@testing-library/react';

import { useSelector } from 'react-redux';

import RegionsContainer from './RegionsContainer';

import regions from '../fixtures/regions';

describe('<RegionsContainer />', () => {
  it('render regions', () => {
    useSelector.mockImplementation((selector) => selector({
      regions,
    }));

    const { getByText } = render((
      <RegionsContainer />
    ));

    expect(getByText('서울')).not.toBeNull();
    expect(getByText('대전')).not.toBeNull();
    expect(getByText('대구')).not.toBeNull();
    expect(getByText('부산')).not.toBeNull();
    expect(getByText('광주')).not.toBeNull();
    expect(getByText('강원도')).not.toBeNull();
    expect(getByText('인천')).not.toBeNull();
    expect(getByText('제주도')).not.toBeNull();
  });
});
