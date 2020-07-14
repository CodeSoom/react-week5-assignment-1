import React from 'react';

import { render, fireEvent } from '@testing-library/react';

import { useSelector, useDispatch } from 'react-redux';

import RegionsContainer from './RegionsContainer';

import regions from '../fixtures/regions';

describe('<RegionsContainer />', () => {
  const dispatch = jest.fn();
  useDispatch.mockImplementation(() => dispatch);
  useSelector.mockImplementation((selector) => selector({
    regions,
  }));

  it('render regions', () => {
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

  it('click regions', () => {
    const { getByText } = render((
      <RegionsContainer />
    ));
    fireEvent.click(getByText('서울'));
    expect(dispatch).toBeCalled();
  });
});
