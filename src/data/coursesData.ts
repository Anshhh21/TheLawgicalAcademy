import { Course } from '@/types';

export interface CourseTrack {
  duration: string;
  label: string;
  description: string;
}

export interface CourseModule {
  code: string;
  title: string;
  items: string[];
}

export interface ProspectusCourse {
  id: string;
  code: string;
  targetExam: string;
  title: string;
  tagline: string;
  duration: string;
  focus: string;
  highlights: string[];
  overview: string;
  tracks?: CourseTrack[];
  modules: CourseModule[];
  whatStudentsReceive: string[];
  idealFor: string;
}

export const prospectusCourses: ProspectusCourse[] = [
  {
    id: 'civil-judge-comprehensive',
    code: 'Course 01',
    targetExam: 'State Judicial Services',
    title: 'Civil Judge Examination – Comprehensive Programme',
    tagline: 'From Foundation to Final Selection across Prelims, Mains, GK & Interview.',
    duration: '12 / 18 / 24 Months',
    focus: 'Prelims, Mains, GK & Interview',
    highlights: [
      'Substantive & Procedural Laws (Constitution, BNS, BNSS, BSA, CPC, SRA & Local Acts)',
      'Integrated Prelims MCQs & Descriptive Mains Answer Writing alongside every subject',
      'Weekly Tests, State & Legal GK, plus Mock Interview & Personality Guidance',
    ],
    overview:
      'An integrated programme for State Judicial Services aspirants combining conceptual classroom teaching, Bare Act dissection, answer writing, and interview readiness.',
    tracks: [
      {
        duration: '12 Months',
        label: 'Intensive Track',
        description: 'Faster, intensive cycle with focused revision and frequent practice.',
      },
      {
        duration: '18 Months',
        label: 'Balanced Track',
        description: 'Balanced pace for conceptual learning, revision, and exam practice.',
      },
      {
        duration: '24 Months',
        label: 'Foundation Track',
        description: 'Extended timeline for foundational learning, consolidation, and revision.',
      },
    ],
    modules: [
      {
        code: 'A',
        title: 'Substantive & Procedural Laws',
        items: [
          'Constitutional Law',
          'Bharatiya Nyaya Sanhita (BNS), BNSS & Bharatiya Sakshya Adhiniyam (BSA)',
          'Code of Civil Procedure (CPC) & Limitation Act',
          'Specific Relief Act, Indian Contract Act & Transfer of Property Act',
          'Family Laws, Negotiable Instruments Act & relevant Central/State Acts',
        ],
      },
      {
        code: 'B',
        title: 'General Knowledge & General Studies',
        items: [
          'Indian History, Geography, Polity & Economy',
          'General Science & Current Affairs',
          'Madhya Pradesh GK & State-Specific GK',
          'Legal Current Affairs & Constitutional Developments',
        ],
      },
      {
        code: 'C',
        title: 'Preliminary Examination Preparation',
        items: [
          'Concept-based objective classes & Bare Act-based MCQs',
          'Landmark judgment questions & previous-year paper analysis',
          'Regular sectional tests, full-length mocks & structured revision',
        ],
      },
      {
        code: 'D',
        title: 'Mains Preparation Alongside Every Subject',
        items: [
          'Descriptive answer writing & hypothetical problem-based questions',
          'Case laws, judicial precedents & provision-wise statutory interpretation',
          'Legal reasoning, answer presentation & time management practice',
        ],
      },
      {
        code: 'E',
        title: 'Interview Guidance',
        items: [
          'Personality development & communication practice',
          'Legal awareness, constitutional developments & situational judgment mocks',
        ],
      },
    ],
    whatStudentsReceive: [
      'Comprehensive printed and/or digital study material',
      'Subject-wise notes, Bare Act references, GK & current affairs resources',
      'Weekly test series along with Prelims and Mains practice papers',
      'Mains guidance for every legal subject, doubt-clearing & personal mentorship',
      'Interview preparation & performance feedback',
    ],
    idealFor:
      'Fresh law graduates, beginners, and repeat aspirants seeking structured preparation from fundamentals through the final interview stage.',
  },
  {
    id: 'judicial-mains-exclusive',
    code: 'Course 02',
    targetExam: 'Judicial Mains Specialised',
    title: 'Judicial Mains Exclusive Practice Programme',
    tagline: 'Express legal knowledge with precision, structure, and exam-hall confidence.',
    duration: '6 Months',
    focus: 'Answer Writing, Essays, Translation & Judgment',
    highlights: [
      'Daily & weekly descriptive legal answer writing with individual evaluation',
      'Legal & constitutional essay writing plus Hindi–English / English–Hindi translation',
      'Judgment writing, issue framing, time-bound Mains test series & mock interviews',
    ],
    overview:
      'A specialised 6-month practice programme for aspirants who have completed foundational legal studies and want intensive training for State Judicial Services Mains examinations.',
    modules: [
      {
        code: 'A',
        title: 'Legal Answer Writing',
        items: [
          'Daily & weekly conceptual, analytical, and hypothetical assignments',
          'Landmark judgment integration & statutory interpretation',
          'Model answers with personal evaluation on structure, language & presentation',
        ],
      },
      {
        code: 'B',
        title: 'Essay Writing',
        items: [
          'Legal, constitutional & contemporary socio-legal essays',
          'National & international developments',
          'Essay structure, cohesive argumentation & critical analysis',
        ],
      },
      {
        code: 'C',
        title: 'Translation Practice',
        items: [
          'Hindi-to-English & English-to-Hindi legal translation',
          'Legal terminology, vocabulary & precise sentence construction',
        ],
      },
      {
        code: 'D',
        title: 'Judgment Writing',
        items: [
          'Structure & essential components of a judicial judgment',
          'Framing issues, points for determination & appreciation of evidence',
          'Reasoning, findings, operative portions & practical hypothetical drills',
        ],
      },
      {
        code: 'E',
        title: 'General Knowledge & Test Series',
        items: [
          'State-specific GK, current affairs & constitutional developments',
          'Subject-wise & full-length time-bound Mains, essay, translation & judgment tests',
          'Individual feedback & performance analysis',
        ],
      },
      {
        code: 'F',
        title: 'Interview & Personality Development',
        items: [
          'Mock interviews covering contemporary, situational & ethical questions',
          'Communication & judicial temperament assessment',
        ],
      },
    ],
    whatStudentsReceive: [
      'Six-month structured practice schedule & Mains-oriented study material',
      'Model answers, evaluated scripts, regular assignments & actionable feedback',
      'Mock interview opportunities & one-on-one academic mentoring',
    ],
    idealFor:
      'Prelims-qualified candidates, repeat aspirants, and students aiming to strengthen descriptive answer and judgment writing skills.',
  },
  {
    id: 'mp-adpo-complete',
    code: 'Course 03',
    targetExam: 'MP Prosecution Officer',
    title: 'MP ADPO – Complete Preparation Programme',
    tagline: 'Targeted preparation for the Madhya Pradesh Assistant District Prosecution Officer exam.',
    duration: '6 Months',
    focus: 'Law Subjects, Special Acts & MP GK',
    highlights: [
      'BNS, BNSS, BSA & Constitution paired with POCSO, JJ Act, NDPS, PC Act & SC/ST Act',
      'MP History, Geography, Polity, Economy, Current Affairs & Indian GK',
      'Bare Act concept classes, topic-wise MCQ banks & weekly full-length tests',
    ],
    overview:
      'A focused 6-month programme engineered specifically for the MP ADPO syllabus, combining core criminal codes, special enactments, MP General Knowledge, and rigorous MCQ practice.',
    modules: [
      {
        code: 'A',
        title: 'Complete Law Subjects',
        items: [
          'Bharatiya Nyaya Sanhita (BNS), BNSS & Bharatiya Sakshya Adhiniyam (BSA)',
          'Constitution of India',
          'POCSO Act, Juvenile Justice Act & NDPS Act',
          'Prevention of Corruption Act, SC/ST (Prevention of Atrocities) Act & prescribed special/local laws',
        ],
      },
      {
        code: 'B',
        title: 'General Knowledge & MP GS',
        items: [
          'Madhya Pradesh History, Geography, Polity & Economy',
          'Madhya Pradesh-specific current affairs',
          'Indian History, Geography, Constitution, General Science & Current Affairs',
        ],
      },
      {
        code: 'C',
        title: 'Examination-Oriented Preparation',
        items: [
          'Conceptual classroom teaching & Bare Act-based learning',
          'Key statutory provisions, landmark rulings, PYQs & topic-wise MCQ drills',
        ],
      },
      {
        code: 'D',
        title: 'Test Series & Performance Evaluation',
        items: [
          'Weekly subject-wise, special-law, GK & MP GK tests',
          'Full-length mock examinations, performance analysis & doubt-clearing sessions',
        ],
      },
    ],
    whatStudentsReceive: [
      'Comprehensive law study material & special Acts material',
      'GK and MP GK notes with topic-wise MCQ question banks',
      'Weekly test series & full-length mock tests',
      'Dedicated revision support & doubt-clearing sessions',
    ],
    idealFor:
      'Law graduates focused on cracking the Madhya Pradesh Assistant District Prosecution Officer (MP ADPO) examination.',
  },
  {
    id: 'clat-pg-ugc-net',
    code: 'Course 04',
    targetExam: 'LL.M. & Academic Eligibility',
    title: 'CLAT PG & UGC-NET Law Preparation',
    tagline: 'Specialised guidance for LL.M. entrance and university teaching/research eligibility.',
    duration: 'As Per Batch Schedule',
    focus: 'Postgraduate & Academic Law Exams',
    highlights: [
      'CLAT PG passage-based reasoning, core subjects & recent Supreme Court judgments',
      'UGC-NET Paper I (Teaching & Research Aptitude, Reasoning, DI, ICT & Higher Ed)',
      'UGC-NET Paper II across Jurisprudence, International, Commercial, IPR & Constitutional Law',
    ],
    overview:
      'Designed for law graduates and postgraduate aspirants aiming to secure admission into premier LL.M. programmes through CLAT PG and qualify for Assistant Professor / JRF via UGC-NET Law.',
    modules: [
      {
        code: 'A',
        title: 'CLAT PG Preparation',
        items: [
          'Constitutional Law, Jurisprudence, Administrative, Contract & Criminal Law',
          'Law of Torts, Property Law, Family Law, Public International & Environmental Law',
          'Labour, Company Law, Intellectual Property Rights & contemporary legal developments',
          'Passage-based legal reasoning, recent Supreme Court rulings & mock tests',
        ],
      },
      {
        code: 'B',
        title: 'UGC-NET Paper I – Teaching & Research Aptitude',
        items: [
          'Teaching Aptitude, Research Aptitude & Communication',
          'Logical Reasoning, Mathematical Reasoning & Data Interpretation',
          'ICT, People, Development & Environment, and Higher Education System',
        ],
      },
      {
        code: 'C',
        title: 'UGC-NET Paper II – Law',
        items: [
          'Jurisprudence, Constitutional & Administrative Law, Public International Law',
          'Law of Crimes, Law of Torts, Commercial Law & Family Law',
          'Environment & Human Rights Law, IPR, Comparative Public Law & Governance',
        ],
      },
      {
        code: 'D',
        title: 'Practice & Evaluation',
        items: [
          'Topic-wise MCQ practice & previous-year question discussions',
          'Weekly sectional tests, full-length mocks, concept revision & performance review',
        ],
      },
    ],
    whatStudentsReceive: [
      'Subject-wise study material & important case-law compilations',
      'Targeted MCQ question banks & previous-year question papers',
      'Sectional & full-length mock test series with concise revision notes',
    ],
    idealFor:
      'Law graduates, LL.M. aspirants, research scholars, and candidates preparing for UGC-NET Law.',
  },
];

export const academicSupportPillars = [
  { label: 'Structured Study Material', detail: 'Systematic notes & exam resources' },
  { label: 'Regular Classroom Teaching', detail: 'Planned lectures & interaction' },
  { label: 'Continuous Testing', detail: 'Weekly tests & performance tracking' },
  { label: 'Doubt Resolution & Mentorship', detail: 'Individual academic guidance' },
  { label: 'Bilingual Learning', detail: 'Hindi & English teaching support' },
];

// Keep legacy export aligned cleanly for any external index consumers
export const coursesData: Course[] = prospectusCourses.map((c, idx) => ({
  id: c.id,
  title: c.title,
  targetExam: c.targetExam,
  category:
    idx === 0 ? 'Judiciary' : idx === 1 ? 'Specialized' : idx === 2 ? 'Prosecution' : 'Foundation',
  badge: c.code,
  duration: c.duration,
  mode: 'Classroom & Bilingual (Hindi / English)',
  description: c.overview,
  subjects: c.highlights,
  features: c.whatStudentsReceive,
  isPendingVerification: false,
}));
