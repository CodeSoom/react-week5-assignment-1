import React from 'react';

import { useDispatch, useSelector } from 'react-redux';

import { render, fireEvent } from '@testing-library/react';

import ButtonContainer from './ButtonContainer';

import regions from '../fixtures/regions';
import categories from '../fixtures/categories';
import restaurants from '../fixtures/restaurants';

const { click } = fireEvent;

describe('ButtonContainer', () => {
  const dispatch = jest.fn();

  beforeEach(() => {
    jest.clearAllMocks();

    useDispatch.mockReturnValue(dispatch);

    useSelector.mockImplementation((selector) => selector({
      filter: {
        regionName: '',
        categoryId: 0,
      },
      regions,
      categories,
      restaurants,
    }));
  });

  function renderButtonContainer() {
    const { container, getByText } = render(
      <ButtonContainer
        name="서울"
        id={null}
        filterName="regionName"
      />,
    );

    return {
      container,
      button: getByText('서울'),
    };
  }
  it('renders', () => {
    const { container } = renderButtonContainer();

    expect(container).not.toBeNull();
  });

  it('handles click', () => {
    const { button } = renderButtonContainer();

    click(button);

    expect(dispatch).toBeCalledWith(
      {
        type: 'updateFilter',
        payload: { filter: { regionName: '서울' } },
      },
    );
  });
});
