import React from 'react';

import { fireEvent, render } from '@testing-library/react';

import { useDispatch, useSelector } from 'react-redux';

import RegionsContainer from './RegionsContainer';

jest.mock('react-redux');

describe('RegionsContainer', () => {
  it('show all regions', () => {
    useSelector.mockImplementation((selector) => selector({
      regions: [
        { id: 1, name: '서울' },
      ],
      selectedRegionId: 0,
    }));
    const { getByText } = render((
      <RegionsContainer />
    ));

    expect(getByText('서울')).not.toBeNull();
  });
  describe('if click unselected region', () => {
    it('append (v) after region name', () => {
      const dispatch = jest.fn();
      useDispatch.mockImplementation(() => dispatch);
      useSelector.mockImplementation((selector) => selector({
        regions: [
          { id: 1, name: '서울' },
          { id: 2, name: '경기도' },
        ],
        selectedRegionId: 0,
      }));
      const { getByText } = render((
        <RegionsContainer />
      ));
      fireEvent.click(getByText('경기도'));

      expect(dispatch).toBeCalledWith({
        type: 'setSelectedRegionId',
        payload: {
          id: 2,
        },
      });
    });
  });
});
