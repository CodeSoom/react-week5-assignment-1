import { fireEvent, render } from '@testing-library/react';

import { useDispatch } from 'react-redux';

import ButtonContainer from '.';

describe('ButtonContainer', () => {
  const region = '부산';

  const dispatch = jest.fn();

  beforeEach(() => {
    useDispatch.mockImplementation(() => dispatch);
  });

  context('when not click region button', () => {
    it('renders region button', () => {
      const { getByRole } = render(<ButtonContainer region={region} />);

      expect(getByRole('button', { name: region })).toBeInTheDocument();
    });
  });

  context('when click region button', () => {
    it('passes "changeRegion" action when click region button', () => {
      const { getByRole } = render(<ButtonContainer region={region} />);

      fireEvent.click(getByRole('button', { name: region }));

      expect(dispatch).toBeCalledWith({
        type: 'changeRegion',
        payload: { region },
      });
    });

    it('changes button content when click region button', () => {
      const { getByRole } = render(<ButtonContainer region={region} />);

      fireEvent.click(getByRole('button'));

      expect(getByRole('button', { name: `${region}(V)` })).toBeInTheDocument();
    });
  });
});
