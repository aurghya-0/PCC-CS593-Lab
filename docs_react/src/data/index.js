export const courseInfo = {
  code: 'PCC-CS593',
  title: 'Object Oriented Programming Lab',
  university: 'Maulana Abul Kalam Azad University of Technology, West Bengal',
  branch: 'B.Tech Computer Science & Engineering',
  semester: 'V',
  language: 'Java',
  totalPrograms: 50,
};

export const labsOverview = [
  { id: 1, slug: 'lab-1', title: 'Class, Constructor, Overloading, Inheritance, Overriding', count: 10 },
  { id: 2, slug: 'lab-2', title: 'Wrapper Class and Arrays', count: 8 },
  { id: 3, slug: 'lab-3', title: 'Developing Interfaces', count: 8 },
  { id: 4, slug: 'lab-4', title: 'Creating and Accessing Packages', count: 8 },
  { id: 5, slug: 'lab-5', title: 'Multithreaded Programming', count: 8 },
  { id: 6, slug: 'lab-6', title: 'Applet Programming (Swing-based)', count: 8 },
];

export { lab1 } from './lab1';
export { lab2 } from './lab2';
export { lab3 } from './lab3';
export { lab4 } from './lab4';
export { lab5 } from './lab5';
export { lab6 } from './lab6';
export { utilities } from './utilities';

import { lab1 } from './lab1';
import { lab2 } from './lab2';
import { lab3 } from './lab3';
import { lab4 } from './lab4';
import { lab5 } from './lab5';
import { lab6 } from './lab6';

export const labs = [lab1, lab2, lab3, lab4, lab5, lab6];

export function getLabBySlug(slug) {
  return labs.find((lab) => lab.slug === slug);
}
