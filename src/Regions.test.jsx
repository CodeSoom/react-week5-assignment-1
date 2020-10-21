import React from 'react';

import { render, fireEvent } from '@testing-library/react';

import regions from '../__fixtures__/regions';

import Regions from './Regions';

jest.mock('react-redux');

describe('Regions', () => {
  const handleClickRegion = jest.fn();

  context('when the button clicked', () => {
    it('run onClick function', () => {
      const { container, getByText } = render((
        <Regions
          regions={regions}
          onClick={handleClickRegion}
        />
      ));

      regions.forEach(({ name }) => {
        expect(container).toHaveTextContent(name);
        fireEvent.click(getByText(name));
      });

      expect(handleClickRegion).toBeCalledTimes(regions.length);
    });
  });
});
