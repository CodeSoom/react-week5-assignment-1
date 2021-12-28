import { render } from '@testing-library/react';
import { useSelector } from 'react-redux';

import SearchFilterContainer from '.';

jest.mock('react-redux');

describe('SearchFilterContainer', () => {
  it('renders region options', () => {
    useSelector.mockImplementation((selector) => selector({ regions: ['서울'], categories: [] }));
    const { getByLabelText, getByRole } = render(<SearchFilterContainer />);

    expect(getByLabelText('지역')).toBeInTheDocument();
    expect(getByRole('option', { value: '서울' })).toBeInTheDocument();
  });

  it('renders category options', () => {
    useSelector.mockImplementation((selector) => selector({ regions: [], categories: ['한식'] }));
    const { getByLabelText, getByRole } = render(<SearchFilterContainer />);

    expect(getByLabelText('분류')).toBeInTheDocument();
    expect(getByRole('option', { value: '한식' })).toBeInTheDocument();
  });
});
