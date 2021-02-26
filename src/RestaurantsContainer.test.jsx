import React from 'react';

import { render } from '@testing-library/react';

import { useSelector } from 'react-redux';

import given from 'given2';

import { restaurants } from '../fixtures';

import RestaurantsContainer from './RestaurantsContainer';

describe('RestaurantsContainer', () => {
  given('restaurants', () => restaurants);

  given('selected', () => ({
    region: '',
    category: '',
  }));

  beforeEach(() => {
    useSelector.mockImplementation((selector) => selector({
      restaurants: given.restaurants,
      selected: given.selected,
    }));
  });
  context('with selected values', () => {
    context('without selected category', () => {
      it('renders a message to let user click category button', () => {
        given('selected', () => ({
          region: {
            id: 1,
            name: '서울',
          },
          category: {
            name: '',
            id: '',
          },
        }));

        const { queryByText } = render(<RestaurantsContainer />);

        expect(queryByText('카테고리 버튼도 클릭 해주세요')).not.toBeNull();
      });
    });

    context('without selected region', () => {
      it('renders a message to let user click region button', () => {
        given('selected', () => ({
          region: {
            id: '',
            name: '',
          },
          category: {
            id: '1',
            name: '한식',
          },
        }));

        const { queryByText } = render(<RestaurantsContainer />);

        expect(queryByText('지역 버튼도 클릭 해주세요')).not.toBeNull();
      });
    });
  });

  context('without restaurants', () => {
    it('renders the message that user has to click region and category buttons.', () => {
      given('restaurants', () => ([]));

      const { queryByText } = render(<RestaurantsContainer />);

      expect(queryByText('지역과 카테고리를 클릭해주세요.')).not.toBeNull();
    });
  });

  context('with restaurants', () => {
    it('renders restaurants', () => {
      given('restaurants', () => restaurants);
      const { queryByText } = render(<RestaurantsContainer />);

      expect(queryByText('양천주가')).not.toBeNull();
      expect(queryByText('한국식 초밥')).not.toBeNull();
      expect(queryByText('김초밥')).not.toBeNull();
    });
  });
});
