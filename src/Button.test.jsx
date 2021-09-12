import { render, fireEvent } from '@testing-library/react';

import Button from './Button';

describe('Button', () => {
  const handleChange = jest.fn();

  context('that is chosen', () => {
    it('add checked mark(V) on a label', () => {
      const { getByText } = render((
        <Button
          label="서울"
          isChosen
          onClick={handleChange}
        />
      ));

      expect(getByText('서울(V)')).not.toBeNull();

      fireEvent.click(getByText('서울(V)'));

      expect(handleChange).toHaveBeenCalled();
    });
  });

  context('that is not chosen', () => {
    it('shows only label', () => {
      const { getByText } = render((
        <Button
          label="서울"
          isChosen={false}
          onClick={handleChange}
        />
      ));

      expect(getByText('서울')).not.toBeNull();

      fireEvent.click(getByText('서울'));

      expect(handleChange).toHaveBeenCalled();
    });
  });
});
