import React from 'react';

import { render, fireEvent } from '@testing-library/react';

import regions from '../__fixtures__/regions';

import Regions from './Regions';

jest.mock('react-redux');

describe('Regions Component', () => {
  const handleClick = jest.fn();

  it('Page render without selected', () => {
    const selected = '';

    const { container } = render((
      <Regions
        regions={regions}
        selected={selected}
        onClick={handleClick}
      />
    ));

    regions.forEach(({ name }) => {
      expect(container).toHaveTextContent(name);
    });
  });

  it('Page render with selected', () => {
    const selected = '서울';

    const { getByText } = render((
      <Regions
        regions={regions}
        selected={selected}
        onClick={handleClick}
      />
    ));

    expect(getByText('서울 (V)')).not.toBeNull();
  });

  it('Click region', () => {
    const selected = '';

    const { container, getByText } = render((
      <Regions
        regions={regions}
        selected={selected}
        onClick={handleClick}
      />
    ));

    regions.forEach(({ name }) => {
      expect(container).toHaveTextContent(name);
      fireEvent.click(getByText(name));
    });

    expect(handleClick).toBeCalledTimes(regions.length);
  });
});
