import React from 'react';

import { useSelector } from 'react-redux';

import { render } from '@testing-library/react';

import RegionsContainer from './RegionsContainer';

jest.mock('react-redux');

describe('RegionsContainer', () => {
  beforeEach(() => {
    jest.clearAllMocks();

    useSelector.mockImplementation((selector) => selector({
      regions: [
        { id: 1, name: '서울' },
        { id: 2, name: '대전' },
        { id: 3, name: '대구' },
        { id: 4, name: '부산' },
        { id: 5, name: '광주' },
        { id: 6, name: '강원도' },
        { id: 7, name: '인천' },
        { id: 1214, name: '제주' },
        { id: 1219, name: '전주' },
        { id: 1230, name: '순천' },
      ],
    }));
  });

  it('button들을 보여준다.', () => {
    const regions = [
      { id: 1, name: '서울' },
      { id: 2, name: '대전' },
      { id: 3, name: '대구' },
      { id: 4, name: '부산' },
      { id: 5, name: '광주' },
      { id: 6, name: '강원도' },
      { id: 7, name: '인천' },
      { id: 1214, name: '제주' },
      { id: 1219, name: '전주' },
      { id: 1230, name: '순천' },
    ];

    const { queryByText } = render(<RegionsContainer />);

    regions.forEach((region) => {
      const { name } = region;

      expect(queryByText(name)).not.toBeNull();
    });
  });
});
