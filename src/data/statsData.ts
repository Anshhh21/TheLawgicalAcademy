import { StatItem } from '@/types';

export const statsData: StatItem[] = [
  {
    id: 'students-mentored',
    label: 'Aspirants Mentored',
    numericValue: 500, // Displayed for visual animation benchmark, annotated with placeholder note
    suffix: '+',
    placeholderNote: '[STUDENTS TAUGHT — OFFICIAL DATA REQUIRED]',
    isPending: true,
  },
  {
    id: 'rank-holders',
    label: 'Judicial & ADPO Selections',
    numericValue: 45,
    suffix: '+',
    placeholderNote: '[NUMBER OF SELECTIONS — OFFICIAL DATA REQUIRED]',
    isPending: true,
  },
  {
    id: 'teaching-experience',
    label: 'Years of Teaching Experience',
    numericValue: 10,
    suffix: '+ Yrs',
    placeholderNote: '[FACULTY EXPERIENCE YEARS — DATA REQUIRED]',
    isPending: true,
  },
  {
    id: 'mock-tests-administered',
    label: 'Simulated Mock Exams Evaluated',
    numericValue: 250,
    suffix: '+',
    placeholderNote: '[MOCK PAPERS EVALUATED — DATA REQUIRED]',
    isPending: true,
  },
];

