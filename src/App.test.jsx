import React from 'react';

import { render } from '@testing-library/react';

import { useDispatch } from 'react-redux';

import App from './App';

jest.mock('react-redux');

describe('App', () => {
  it('should be there regions, categories, restaurants container', () => {
    const dispatch = jest.fn();
    useDispatch.mockImplementationOnce(() => dispatch);

    const { container } = render(<App />);

    expect(container.querySelector('.regions-container')).not.toBeNull();
    expect(container.querySelector('.categories-container')).not.toBeNull();
    expect(container.querySelector('.restaurants-container')).not.toBeNull();
  });
});
