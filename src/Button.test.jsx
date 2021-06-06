import { render, fireEvent } from '@testing-library/react';

import { useDispatch } from 'react-redux';

import Button from './Button';

describe('Button', () => {
  const dispatch = jest.fn();

  beforeEach(() => {
    useDispatch.mockImplementation(() => dispatch);
  });

  it('renders button', () => {
    const item = { id: 1, name: '서울' };
    const beforeSelectedItem = { id: 0, name: '' };
    const handleClick = jest.fn();

    const { queryByText } = render(
      <Button
        item={item}
        onclick={handleClick}
        selectedButton={beforeSelectedItem}
      />,
    );

    expect(queryByText('서울')).not.toBeNull();
  });

  describe('clicks button event', () => {
    it('clicks button and dispatches selectedRegion', () => {
      const item = { id: 1, name: '서울' };
      const selectedItem = { id: 1, name: '서울' };
      const handleClick = jest.fn();

      const { queryByText } = render(
        <Button
          item={item}
          onclick={handleClick}
          selectedButton={selectedItem}
        />,
      );

      fireEvent.click(queryByText('서울(V)'));

      expect(handleClick).toBeCalledWith({ id: 1, name: '서울' });
    });

    it('clicks button and changes button name', () => {
      const item = { id: 1, name: '서울' };
      const selectedItem = { id: 1, name: '서울' };
      const handleClick = jest.fn();

      const { queryByText } = render(
        <Button
          item={item}
          onclick={handleClick}
          selectedButton={selectedItem}
        />,
      );

      fireEvent.click(queryByText('서울(V)'));

      expect(queryByText('서울(V)')).not.toBeNull();
    });
  });
});
