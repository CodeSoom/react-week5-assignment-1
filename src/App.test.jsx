import React from 'react';

import { render } from '@testing-library/react';

import App from './App';

describe('App', () => {
  it('should be there regions, categories, restaurants container', () => {
    const { container } = render(<App />);

    expect(container.querySelector('.regions-container')).not.toBeNull();
    expect(container.querySelector('.categories-container')).not.toBeNull();
    expect(container.querySelector('.restaurants-container')).not.toBeNull();
  });
});
