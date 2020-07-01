import React from 'react';

import { render, fireEvent } from '@testing-library/react';

import { useDispatch, useSelector } from 'react-redux';

import RegionContainer from './RegionContainer';

jest.mock('react-redux');

const region = {
  id: 1,
  name: '부산',
};

function renderMockRegion() {
  return render((
    <RegionContainer region={region} />
  ));
}

describe('RegionContainer', () => {
  context('when not selected', () => {
    it('can see normal button', () => {
      const { getByText } = renderMockRegion();

      expect(getByText('부산')).not.toBeNull();
    });
  });

  context('when selected', () => {
    it('can see selected button', () => {
      useSelector.mockImplementation((selector) => selector({
        selectedRegion: 1,
      }));

      const { queryByText } = renderMockRegion();

      expect(queryByText('부산')).toBeNull();
      expect(queryByText('부산(v)')).not.toBeNull();
    });
  });

  describe('click button', () => {
    it('can select region', () => {
      const dispatch = jest.fn();

      useDispatch.mockImplementation(() => dispatch);

      const { getByText } = renderMockRegion();

      expect(getByText('부산')).not.toBeNull();

      fireEvent.click(getByText('부산'));
      expect(dispatch).toBeCalledWith({
        type: 'setSelectedRegion',
        payload: {
          id: 1,
        },
      });
    });
  });
});
