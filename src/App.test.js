import { render, screen } from '@testing-library/react';
import App from './App';

test('renders profile picture', () => {
  render(<App />);
  const profilePicture = screen.getByAltText("Kai Nakamura");
  expect(profilePicture).toBeInTheDocument();
});
