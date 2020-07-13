import React from 'react';

import { render, fireEvent } from '@testing-library/react';

import Regions from './Regions';

import regions from '../fixtures/regions';

describe('<Regions />', () => {
  it('render regions', () => {
    const { getByText } = render((
      <Regions regions={regions} />
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

  it('click region', () => {
    const handleClick = jest.fn();
    const { getByText } = render((
      <Regions regions={regions} onClick={handleClick} />
    ));

    fireEvent.click(getByText('서울'));
    expect(handleClick).toBeCalledWith({
      name: '서울',
    });
  });
});
