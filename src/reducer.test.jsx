import reducer from './reducer';

import { regions, categories, restaurants } from '../fixtures';

import {
  setCategories, setRegions, setClicked, setRestaurnats,
} from './actions';

describe('reducer', () => {
  it('returns default parameter, initial state', () => {
    const state = reducer();

    expect(state.regions).toHaveLength(0);
    expect(state.categories).toHaveLength(0);
    expect(state.restaurants).toHaveLength(0);
    expect(state.clicked.region).toBe('');
    expect(state.clicked.category).toBe('');
  });

  it('returns state', () => {
    const state = reducer({ restaurants });

    expect(state.restaurants[0].name).toBe('양천주가');
    expect(state.restaurants[1].name).toBe('한국식 초밥');
    expect(state.restaurants[2].name).toBe('김초밥');
  });

  it('changes regions', () => {
    const state = reducer({}, setRegions(regions));

    expect(state.regions[0].name).toBe('서울');
    expect(state.regions[1].name).toBe('대전');
    expect(state.regions[2].name).toBe('대구');
  });

  it('changes categories', () => {
    const state = reducer({}, setCategories(categories));

    expect(state.categories[0].id).toBe(1);
    expect(state.categories[1].id).toBe(2);
    expect(state.categories[2].id).toBe(3);
  });

  it('changes restaurants', () => {
    const state = reducer({}, setRestaurnats(restaurants));

    expect(state.restaurants[0].name).toBe('양천주가');
    expect(state.restaurants[1].name).toBe('한국식 초밥');
    expect(state.restaurants[2].name).toBe('김초밥');
  });

  it('changes clicked', () => {
    const clicked = {
      region: {
        id: 1,
        name: '서울',
      },
      category: {
        id: 1,
        name: '한식',
      },
    };
    const state = reducer({
      clicked: {
        region: '',
        category: '',
      },
    }, setClicked(clicked));

    expect(state.clicked.region.name).toBe('서울');
    expect(state.clicked.category.name).toBe('한식');
  });
});
