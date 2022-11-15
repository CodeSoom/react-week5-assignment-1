import { render, screen, fireEvent } from '@testing-library/react';

import { useSelector, useDispatch } from 'react-redux';

import RegionsContainer from './RegionsContainer';

import { regions } from '../fixtures/data';

import { selectRegion } from './actions';

jest.mock('react-redux');

describe('RegionsContainer', () => {
  const dispatch = jest.fn();

  useDispatch.mockImplementation(() => dispatch);

  const renderRegionContainer = () => render((
    <RegionsContainer />
  ));

  useSelector.mockImplementation((selector) => selector({
    regions,
  }));

  it('지역 목록이 랜더링된다', () => {
    renderRegionContainer(regions);

    expect(screen.getByText('서울')).not.toBeNull();
  });

  context('지역을 클릭 시', () => {
    it('dispatch가 실행된다', () => {
      const region = regions[0];
      renderRegionContainer(region);

      expect(dispatch).not.toBeCalled();

      fireEvent.click(screen.getByText(region.name));

      expect(dispatch).toBeCalledWith(selectRegion(region.name));
    });
  });
});
