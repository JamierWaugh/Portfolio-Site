import { render, screen } from '@testing-library/react';
import Home from './HomeFolder/Home.js';

test('renders learn react link', () => {
  render(<App />);
  const linkElement = screen.getByText(/learn react/i);
  expect(linkElement).toBeInTheDocument();
});
