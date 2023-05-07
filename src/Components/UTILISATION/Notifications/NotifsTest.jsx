import React from 'react';
import { render } from '@testing-library/react';
import MesNotifs from './MesNotifs';

test('renders learn react link', () => {
  const { getByText } = render(<MesNotifs />);
  const linkElement = getByText(/learn react/i);
  expect(linkElement).toBeInTheDocument();
});