import React from 'react';

import { render } from '@testing-library/react';

import { useSelector } from 'react-redux';

import { regions, categories, restaurants } from '../fixtures';

import App from './App';

describe('App', () => {
  beforeEach(() => {
    useSelector.mockImplementation((selector) => selector({ restaurants }));
  });

  it('renders restaurants', () => {
    const { queryByText } = render(<App />);

    expect(queryByText('양천주가')).not.toBeNull();
    expect(queryByText('한국식 초밥')).not.toBeNull();
    expect(queryByText('김초밥')).not.toBeNull();
  });

  it('renders region buttons', () => {
    const { queryByText } = render(<App />);

    expect(queryByText('서울')).not.toBeNull();
    expect(queryByText('대전')).not.toBeNull();
    expect(queryByText('대구')).not.toBeNull();

    // identical assertions on the rest of the regions
    regions
      .filter((region, index) => index > 2)
      .forEach(({ name }) => {
        expect(queryByText(name)).not.toBeNull();
      });
  });

  it('renders categories buttons', () => {
    const { queryByText } = render(<App />);

    expect(queryByText('한식')).not.toBeNull();
    expect(queryByText('중식')).not.toBeNull();
    expect(queryByText('일식')).not.toBeNull();

    // identical assertions on the rest of the categories
    categories
      .filter((category, index) => index > 2)
      .forEach(({ name }) => {
        expect(queryByText(name)).not.toBeNull();
      });
  });
});
