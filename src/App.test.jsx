import React from 'react';
import {
  render, screen, fireEvent,
} from '@testing-library/react';
import { useDispatch, useSelector } from 'react-redux';

import regionsFixture from './__fixtures__/regions';
import categoriesFixture from './__fixtures__/categories';

import App from './App';

jest.mock('react-redux');

function renderApp() {
  render(<App />);
  return {
    getButtonByName: (name) => screen.getByRole('button', { name }),
  };
}

describe('<App />', () => {
  const dispatch = jest.fn();
  useDispatch.mockImplementation(() => dispatch);
  useSelector.mockImplementation((selector) => selector({
    regions: regionsFixture,
    categories: categoriesFixture,
  }));

  beforeEach(() => {
    dispatch.mockClear();
  });

  it('renders region buttons', () => {
    // when
    const { getButtonByName } = renderApp();
    // then
    expect(getButtonByName('서울'));
    expect(getButtonByName('대전'));
  });

  it('renders category buttons', () => {
    // when
    const { getButtonByName } = renderApp();
    // then
    expect(getButtonByName('한식'));
    expect(getButtonByName('중식'));
  });

  it('check when button clicked', () => {
    // when
    const { getButtonByName } = renderApp();
    fireEvent.click(getButtonByName('서울'));
    fireEvent.click(getButtonByName('한식'));
    // then
    expect(dispatch).toBeCalledWith({
      type: 'setRegions',
      payload: { regions: [{ id: 1, name: '서울(v)' }, ...regionsFixture.slice(1)] },
    });
    expect(dispatch).toBeCalledWith({
      type: 'setCategories',
      payload: { categories: [{ id: 1, name: '한식(v)' }, ...categoriesFixture.slice(1)] },
    });
    expect(dispatch).toBeCalledWith({
      type: 'checkRegion',
      payload: { id: 1 },
    });
    expect(dispatch).toBeCalledWith({
      type: 'checkCategory',
      payload: { id: 1 },
    });
  });

  it('uncheck when another button clicked', () => {
    // when
    const { getButtonByName } = renderApp();
    fireEvent.click(getButtonByName('서울'));
    fireEvent.click(getButtonByName('부산'));
    // then
    expect(dispatch).toBeCalledWith({
      type: 'setRegions',
      payload: { regions: [{ id: 1, name: '서울' }, ...regionsFixture.slice(1)] },
    });
  });
});
