import { render, screen, fireEvent } from '@testing-library/react';

import { useSelector, useDispatch } from 'react-redux';

import RegionsContainer from './RegionsContainer';

import { regions } from '../fixtures/data';

import { selectRegion } from './actions';

jest.mock('react-redux');

describe('RegionsContainer', () => {
  const dispatch = jest.fn();

  useDispatch.mockImplementation(() => dispatch);

  const renderCategoriesContainer = () => render((
    <RegionsContainer />
  ));

  useSelector.mockImplementation((selector) => selector({
    regions,
  }));

  it('지역 목록이 랜더링된다', () => {
    renderCategoriesContainer(regions);

    expect(screen.getByText('서울')).not.toBeNull();
  });

  context('지역을 클릭 시', () => {
    it('dispatch가 실행된다', () => {
      const category = regions[0];
      renderCategoriesContainer(category);

      expect(dispatch).not.toBeCalled();

      fireEvent.click(screen.getByText(category.name));

      expect(dispatch).toBeCalledWith(selectRegion(category.id));
    });
  });
});
