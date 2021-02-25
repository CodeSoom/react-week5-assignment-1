import reducer from './reducer';

import { regions, categories, restaurants } from '../fixtures';

import { setCategories, setRegions, setClicked } from './actions';

describe('reducer', () => {
  it('returns default parameter, initial state', () => {
    const state = reducer();

    expect(state.regions).toHaveLength(0);
    expect(state.categories).toHaveLength(0);
    expect(state.restaurants).toHaveLength(0);
    expect(state.clicked instanceof Object).toBe(true);
  });

  it('returns state', () => {
    const state = reducer({ restaurants });

    expect(state.restaurants[0].name).toBe('양천주가');
    expect(state.restaurants[1].name).toBe('한국식 초밥');
    expect(state.restaurants[2].name).toBe('김초밥');
  });

  it('changes regions', () => {
    const state = reducer({ regions }, setRegions(regions));

    expect(state.regions[0].name).toBe('서울');
    expect(state.regions[1].name).toBe('대전');
    expect(state.regions[2].name).toBe('대구');
  });

  it('changes categories', () => {
    const state = reducer({ categories }, setCategories(categories));

    expect(state.categories[0].name).toBe('한식');
    expect(state.categories[1].name).toBe('중식');
    expect(state.categories[2].name).toBe('일식');
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
    const state = reducer({}, setClicked(clicked));

    expect(state.clicked.region.name).toBe('서울');
    expect(state.clicked.category.name).toBe('서울');
  });
});
