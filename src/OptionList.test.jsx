import { fireEvent, render } from '@testing-library/react';
import OptionList from './OptionList';

describe('OptionList', () => {
  it('renders option that listens to click event', () => {
    const options = ['a', 'b', 'c', 'd', 'e'];

    const { getByRole, queryByRole } = render(<OptionList options={options} />);

    fireEvent.click(getByRole('button', { name: 'a' }));
    expect(getByRole('button', { name: 'a(V)' })).toBeInTheDocument();

    fireEvent.click(getByRole('button', { name: 'b' }));
    expect(queryByRole('button', { name: 'a(V)' })).not.toBeInTheDocument();
    expect(getByRole('button', { name: 'b(V)' })).toBeInTheDocument();
  });
});
