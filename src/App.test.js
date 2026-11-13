import { render, screen } from '@testing-library/react';
import App from './App';
import projects from './data/projects';

test('renders a tile for every project in the data file', () => {
  render(<App />);
  projects.forEach((project) => {
    expect(screen.getByRole('heading', { name: project.title })).toBeInTheDocument();
  });
});

test('only shows Visit and Code buttons where a link exists', () => {
  render(<App />);
  const visitLinks = screen.getAllByRole('link', { name: /^Visit / });
  const codeLinks = screen.getAllByRole('link', { name: /^View the source code/ });
  expect(visitLinks).toHaveLength(projects.filter((p) => p.live).length);
  expect(codeLinks).toHaveLength(projects.filter((p) => p.code).length);
});
