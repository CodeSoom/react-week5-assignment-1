import { render, fireEvent } from '@testing-library/react';

import { useDispatch } from 'react-redux';

import given from 'given2';

import List from './List';

jest.mock('react-redux');
jest.mock('./services/api');

const listItems = {
  regions: [{ id: 1, name: '서울' }],
  categories: [{ id: 11, name: '한식' }],
  restaurants: [
    {
      id: 101,
      name: '마녀식당',
      type: '일식',
      address: '서울시 강남구',
    },
  ],
};

const selected = {
  name: '서울',
};

describe('List', () => {
  beforeEach(() => {
    jest.clearAllMocks();
  });

  const dispatch = jest.fn();
  useDispatch.mockImplementation(() => dispatch);

  const handleButtonClick = jest.fn();

  context('with listItems', () => {
    it('renders list through listItems', () => {
      given('regions', () => listItems.regions);
      given('buttons', () => true);
      const { getByText } = render((
        <List listItems={given.regions} hasButton={given.buttons} onClick={handleButtonClick} />
      ));

      expect(getByText('서울')).not.toBeNull();
    });
  });

  context('without listItems', () => {
    it("renders text : '리스트가 없습니다.'", () => {
      given('regions', () => []);
      const { getAllByText } = render((<List listItems={given.regions} />));

      expect(getAllByText('리스트가 없습니다.')).not.toBeNull();
    });
  });

  context('with button', () => {
    it('renders button with click event', () => {
      given('regions', () => listItems.regions);
      given('buttons', () => true);
      const { getByText } = render((
        <List listItems={given.regions} hasButton={given.buttons} onClick={handleButtonClick} />
      ));

      expect(getByText('서울')).not.toBeNull();

      fireEvent.click(getByText('서울'));

      expect(dispatch).toBeCalled();
    });

    it('renders text (V) for checking select', () => {
      given('regions', () => listItems.regions);
      given('buttons', () => true);
      given('selectedRegion', () => selected);
      const { getByText } = render((
        <List
          listItems={given.regions}
          hasButton={given.buttons}
          selected={given.selectedRegion}
          onClick={handleButtonClick}
        />
      ));

      expect(getByText('서울(V)')).not.toBeNull();
    });
  });

  context('without button', () => {
    given('restaurants', () => listItems.restaurants);
    given('buttons', () => false);
    it('renders only text', () => {
      const { getByText } = render((
        <List listItems={given.restaurants} hasButton={given.buttons} />
      ));

      expect(getByText('마녀식당|일식|서울시 강남구')).not.toBeNull();
    });
  });
});
