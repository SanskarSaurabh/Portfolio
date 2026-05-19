import { navLinks, projects, skills, timeline } from './data/portfolioData';

test('portfolio content includes the requested core sections', () => {
  expect(navLinks.map((link) => link.label)).toEqual(['Home', 'About', 'Skills', 'Projects', 'Journey', 'Contact']);
  expect(projects).toHaveLength(5);
  expect(skills.map((group) => group.category)).toEqual(['Frontend', 'Data Analytics', 'Tools']);
  expect(timeline).toContain('Built Machine Learning Projects');
});
