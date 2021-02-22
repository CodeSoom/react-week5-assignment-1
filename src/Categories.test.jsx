import React from 'react';

import { render } from '@testing-library/react';

import Categories from './Categories';

import categories from '../fixtures/categories';

describe('Categories', () => {
  it('분류를 출력합니다.', () => {
    const { queryByText } = render((<Categories />));

    categories.forEach((categorie) => {
      expect(queryByText(categorie.name)).not.toBeNull();
    });
  });
});
