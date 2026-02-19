export interface TypeDetails {
  code: string;
  careers: string[];
  famousPeople: string[];
  idealPartners: string[];
  workStyle: string;
  learningStyle: string;
  communicationStyle: string;
  stressReactions: string;
  growthAreas: string[];
  funFacts: string[];
}

export const typeDetails: Record<string, TypeDetails> = {
  INTJ: {
    code: 'INTJ',
    careers: [
      'Software Developer',
      'Engineer',
      'Scientist',
      'Strategic Planner',
      'Data Analyst',
      'Architect',
      'Investment Banker',
      'University Professor',
      'Management Consultant',
      'Systems Analyst',
    ],
    famousPeople: [
      'Elon Musk',
      'Mark Zuckerberg',
      'Isaac Newton',
      'Friedrich Nietzsche',
      'Christopher Nolan',
      'Michelle Obama',
      'Arnold Schwarzenegger',
      'Nikola Tesla',
      'Stephen Hawking',
      'Hillary Clinton',
    ],
    idealPartners: ['ENFP', 'ENTP', 'INFJ', 'ENTJ'],
    workStyle:
      'Prefers independent work with clear goals. Excels at long-term strategic planning and innovative problem-solving. Values competence and efficiency above all.',
    learningStyle:
      'Self-directed learner who prefers theoretical frameworks and abstract concepts. Best learns through reading, analysis, and independent research.',
    communicationStyle:
      'Direct and concise. Values intellectual discussions and debates. May come across as blunt or dismissive of emotional concerns.',
    stressReactions:
      'Withdraws and becomes more critical. May overthink and develop elaborate contingency plans. Can become cynical and dismissive.',
    growthAreas: [
      'Developing emotional intelligence',
      'Being more patient with others',
      'Expressing appreciation more openly',
      'Being flexible when plans change',
    ],
    funFacts: [
      'Rarest personality type for women',
      "Often called 'the masterminds'",
      'Represent about 2% of the population',
      'Most likely to believe in evolution',
    ],
  },
  INTP: {
    code: 'INTP',
    careers: [
      'Mathematician',
      'Physicist',
      'Computer Programmer',
      'Research Scientist',
      'Game Developer',
      'Philosopher',
      'Technical Writer',
      'Systems Analyst',
      'Forensic Analyst',
      'College Professor',
    ],
    famousPeople: [
      'Albert Einstein',
      'Bill Gates',
      'Charles Darwin',
      'Socrates',
      'Abraham Lincoln',
      'Tina Fey',
      'Larry Page',
      'Marie Curie',
      'Rene Descartes',
      'Kristen Stewart',
    ],
    idealPartners: ['ENTJ', 'ESTJ', 'INFJ', 'ENFJ'],
    workStyle:
      'Thrives in flexible environments with minimal supervision. Loves solving complex theoretical problems. Needs time for deep thinking and analysis.',
    learningStyle:
      'Conceptual learner who enjoys understanding theories and systems. Learns best through exploration, experimentation, and logical analysis.',
    communicationStyle:
      'Analytical and precise. Enjoys intellectual debates and discussing abstract ideas. May struggle with small talk and emotional expression.',
    stressReactions:
      'Becomes scattered and withdrawn. May experience analysis paralysis. Can become critical of themselves and others.',
    growthAreas: [
      'Following through on projects',
      'Organizing daily tasks',
      "Considering others' feelings",
      'Practical application of ideas',
    ],
    funFacts: [
      "Often called 'the logicians'",
      'Make up about 3% of the population',
      'Most likely to study philosophy',
      'Often forgetful about practical matters',
    ],
  },
  ENTJ: {
    code: 'ENTJ',
    careers: [
      'CEO/Executive',
      'Entrepreneur',
      'Investment Banker',
      'Judge',
      'Business Consultant',
      'Lawyer',
      'Project Manager',
      'Financial Advisor',
      'Marketing Manager',
      'Sales Manager',
    ],
    famousPeople: [
      'Steve Jobs',
      'Margaret Thatcher',
      'Napoleon Bonaparte',
      'Franklin D. Roosevelt',
      'Gordon Ramsay',
      'Adele',
      'Harrison Ford',
      'Malcolm X',
      'Whoopi Goldberg',
      'Jim Carrey',
    ],
    idealPartners: ['INTP', 'INFP', 'ENFP', 'INTJ'],
    workStyle:
      'Natural leader who takes charge and drives results. Excels at strategic planning and organizing people toward goals. Thrives in challenging, fast-paced environments.',
    learningStyle:
      'Goal-oriented learner who prefers structured education with clear outcomes. Learns through leadership opportunities and practical application.',
    communicationStyle:
      'Direct, assertive, and commanding. Values efficiency in communication. Can be blunt and may intimidate others unintentionally.',
    stressReactions:
      'Becomes controlling and aggressive. May overwork and push others too hard. Can become impatient and dismissive of incompetence.',
    growthAreas: [
      'Being more patient and understanding',
      'Delegating without micromanaging',
      "Listening to others' perspectives",
      'Recognizing emotional needs',
    ],
    funFacts: [
      "Often called 'the commanders'",
      'Represent about 3% of the population',
      'Most likely to become executives',
      'Highest income of all types',
    ],
  },
  ENTP: {
    code: 'ENTP',
    careers: [
      'Entrepreneur',
      'Marketing Specialist',
      'Consultant',
      'Inventor',
      'Journalist',
      'Attorney',
      'Public Relations Manager',
      'Creative Director',
      'Life Coach',
      'Sales Representative',
    ],
    famousPeople: [
      'Mark Twain',
      'Thomas Edison',
      'Leonardo da Vinci',
      'Walt Disney',
      'Benjamin Franklin',
      'Sarah Silverman',
      'Adam Savage',
      'Neil Patrick Harris',
      'Barack Obama',
      'Sacha Baron Cohen',
    ],
    idealPartners: ['INFJ', 'INTJ', 'ENFJ', 'INFP'],
    workStyle:
      'Innovative and entrepreneurial. Loves brainstorming and starting new projects. Thrives in dynamic environments with intellectual challenges and variety.',
    learningStyle:
      'Curious learner who loves debating ideas and exploring possibilities. Learns best through discussion, experimentation, and challenging conventional wisdom.',
    communicationStyle:
      "Witty, charming, and argumentative. Loves playing devil's advocate. May debate for sport without considering emotional impact.",
    stressReactions:
      'Becomes scattered and argumentative. May start many projects but finish none. Can become cynical and overly critical.',
    growthAreas: [
      'Following through on commitments',
      'Being more tactful in debates',
      'Focusing on one thing at a time',
      "Considering others' feelings",
    ],
    funFacts: [
      "Often called 'the debaters'",
      'Make up about 3% of the population',
      'Most likely to challenge authority',
      'Often have eclectic interests',
    ],
  },
  INFJ: {
    code: 'INFJ',
    careers: [
      'Counselor/Therapist',
      'Psychologist',
      'Writer',
      'Social Worker',
      'Human Resources',
      'Teacher',
      'Life Coach',
      'Nonprofit Director',
      'Nutritionist',
      'Designer',
    ],
    famousPeople: [
      'Martin Luther King Jr.',
      'Nelson Mandela',
      'Mother Teresa',
      'Carl Jung',
      'Plato',
      'Nicole Kidman',
      'Lady Gaga',
      'Oprah Winfrey',
      'Mahatma Gandhi',
      'Cate Blanchett',
    ],
    idealPartners: ['ENTP', 'ENFP', 'INFP', 'INTJ'],
    workStyle:
      'Mission-driven and idealistic. Excels at understanding people and creating meaningful change. Needs work that aligns with personal values and helps others.',
    learningStyle:
      "Reflective learner who seeks meaning and connections. Learns best through personal reflection, metaphors, and understanding the 'why' behind concepts.",
    communicationStyle:
      'Insightful and empathetic. Communicates in depth and seeks authentic connections. May struggle with superficial conversations.',
    stressReactions:
      'Withdraws and becomes perfectionistic. May experience emotional overwhelm. Can become overly critical of themselves and burn out.',
    growthAreas: [
      'Setting healthy boundaries',
      'Accepting imperfection',
      'Sharing feelings more openly',
      'Taking care of practical needs',
    ],
    funFacts: [
      'Rarest personality type overall',
      'Only 1-2% of the population',
      "Often called 'the advocates'",
      'Strong sense of intuition',
    ],
  },
  INFP: {
    code: 'INFP',
    careers: [
      'Writer/Author',
      'Artist',
      'Counselor',
      'Graphic Designer',
      'Musician',
      'Psychologist',
      'Social Worker',
      'Teacher',
      'Librarian',
      'Editor',
    ],
    famousPeople: [
      'William Shakespeare',
      'J.R.R. Tolkien',
      'Vincent van Gogh',
      'Princess Diana',
      'Audrey Hepburn',
      'Johnny Depp',
      'Tom Hiddleston',
      'John Lennon',
      'Kurt Cobain',
      'Björk',
    ],
    idealPartners: ['ENFJ', 'ENTJ', 'INFJ', 'ENFP'],
    workStyle:
      'Values-driven and creative. Works best in flexible, autonomous environments. Needs work that feels meaningful and allows for self-expression.',
    learningStyle:
      'Personal and values-based learner. Learns best through storytelling, personal connection to material, and creative expression.',
    communicationStyle:
      'Gentle and idealistic. Communicates through stories and metaphors. May avoid conflict and struggle with directness.',
    stressReactions:
      'Becomes withdrawn and oversensitive. May catastrophize situations. Can become passive-aggressive or overly emotional.',
    growthAreas: [
      'Being more assertive',
      'Handling criticism better',
      'Making practical decisions',
      'Finishing what they start',
    ],
    funFacts: [
      "Often called 'the mediators'",
      'Make up about 4% of the population',
      'Highly creative and artistic',
      'Strong personal values',
    ],
  },
  ENFJ: {
    code: 'ENFJ',
    careers: [
      'Teacher',
      'Counselor',
      'HR Manager',
      'Public Relations',
      'Social Worker',
      'Event Coordinator',
      'Life Coach',
      'Motivational Speaker',
      'Nonprofit Manager',
      'Training Developer',
    ],
    famousPeople: [
      'Barack Obama',
      'Oprah Winfrey',
      'Maya Angelou',
      'Ben Affleck',
      'Jennifer Lawrence',
      'Matthew McConaughey',
      'Reese Witherspoon',
      'Martin Luther King Jr.',
      'Abraham Maslow',
      'Emma Stone',
    ],
    idealPartners: ['INFP', 'ISFP', 'INTP', 'INFJ'],
    workStyle:
      'People-oriented leader who excels at motivating teams. Thrives in collaborative environments. Needs work that helps others and creates positive change.',
    learningStyle:
      'Social learner who prefers group discussions and collaborative projects. Learns through teaching others and real-world application.',
    communicationStyle:
      'Warm, charismatic, and persuasive. Excellent at reading people and adapting communication style. May over-accommodate others.',
    stressReactions:
      'Becomes overextended and people-pleasing. May neglect own needs. Can become controlling or manipulative when stressed.',
    growthAreas: [
      'Setting personal boundaries',
      'Accepting that not everyone will like them',
      'Making objective decisions',
      'Taking time for self-care',
    ],
    funFacts: [
      "Often called 'the protagonists'",
      'Make up about 3% of the population',
      'Natural teachers and mentors',
      'Strong emotional intelligence',
    ],
  },
  ENFP: {
    code: 'ENFP',
    careers: [
      'Journalist',
      'Actor',
      'Marketing Manager',
      'Teacher',
      'Counselor',
      'Writer',
      'Entrepreneur',
      'Public Relations',
      'Photographer',
      'Event Planner',
    ],
    famousPeople: [
      'Robin Williams',
      'Ellen DeGeneres',
      'Will Smith',
      'Robert Downey Jr.',
      'Meg Ryan',
      'Mark Twain',
      'Salvador Dalí',
      'Dr. Seuss',
      'Quentin Tarantino',
      'Ricky Gervais',
    ],
    idealPartners: ['INTJ', 'INFJ', 'ENTJ', 'INFP'],
    workStyle:
      'Enthusiastic and creative. Thrives in dynamic environments with variety. Needs work that allows for creativity, human connection, and making a difference.',
    learningStyle:
      'Experiential learner who loves exploring new ideas. Learns best through hands-on activities, group work, and creative projects.',
    communicationStyle:
      'Enthusiastic, expressive, and inspirational. Loves brainstorming and exploring possibilities. May jump between topics quickly.',
    stressReactions:
      'Becomes scattered and overwhelmed. May overcommit and struggle to focus. Can become emotionally volatile.',
    growthAreas: [
      'Following through on commitments',
      'Staying focused on one project',
      'Handling routine tasks',
      'Being more realistic about time',
    ],
    funFacts: [
      "Often called 'the campaigners'",
      'Make up about 7% of the population',
      'Most likely to believe in ghosts',
      'Often have many hobbies',
    ],
  },
  ISTJ: {
    code: 'ISTJ',
    careers: [
      'Accountant',
      'Auditor',
      'Financial Manager',
      'Computer Programmer',
      'Military Officer',
      'Police Officer',
      'Dentist',
      'Judge',
      'Project Manager',
      'Civil Engineer',
    ],
    famousPeople: [
      'George Washington',
      'Warren Buffett',
      'Queen Elizabeth II',
      'Angela Merkel',
      'Jeff Bezos',
      'Natalie Portman',
      'Denzel Washington',
      'Matt Damon',
      'Sean Connery',
      'Anthony Hopkins',
    ],
    idealPartners: ['ESFP', 'ESTP', 'ISFJ', 'ESTJ'],
    workStyle:
      'Dependable and methodical. Excels at organizing systems and following procedures. Values tradition, stability, and getting things done correctly.',
    learningStyle:
      'Sequential learner who prefers clear instructions and proven methods. Learns best through practical examples and hands-on experience.',
    communicationStyle:
      'Straightforward and factual. Values clarity and accuracy. May come across as too serious or rigid.',
    stressReactions:
      'Becomes rigid and inflexible. May work excessively and ignore health. Can become judgmental and critical.',
    growthAreas: [
      'Being more flexible with change',
      "Considering others' emotions",
      'Trying new approaches',
      'Expressing feelings more openly',
    ],
    funFacts: [
      "Often called 'the logisticians'",
      'Most common type (13% of population)',
      'Most likely to follow rules',
      'Value duty and responsibility',
    ],
  },
  ISFJ: {
    code: 'ISFJ',
    careers: [
      'Nurse',
      'Teacher',
      'Social Worker',
      'Librarian',
      'Administrative Assistant',
      'Interior Designer',
      'Counselor',
      'Nutritionist',
      'Physical Therapist',
      'Office Manager',
    ],
    famousPeople: [
      'Mother Teresa',
      'Kate Middleton',
      'Rosa Parks',
      'Anne Hathaway',
      'Beyoncé',
      'Vin Diesel',
      'Halle Berry',
      'Selena Gomez',
      'Kendrick Lamar',
      'Ed Sheeran',
    ],
    idealPartners: ['ESFP', 'ESTP', 'ISTJ', 'ESFJ'],
    workStyle:
      'Loyal and dedicated. Excels at supporting others and maintaining harmony. Values tradition and prefers structured, stable environments.',
    learningStyle:
      'Practical learner who prefers concrete examples and step-by-step instructions. Learns best through personal experience and helping others.',
    communicationStyle:
      'Warm and supportive. Prefers one-on-one conversations. May avoid conflict and struggle to say no.',
    stressReactions:
      'Becomes overworked and resentful. May bottle up feelings. Can become passive-aggressive when overwhelmed.',
    growthAreas: [
      'Setting boundaries with others',
      'Expressing needs directly',
      'Accepting change more easily',
      'Taking time for self',
    ],
    funFacts: [
      "Often called 'the defenders'",
      'Make up about 13% of the population',
      'Most likely to volunteer',
      'Strong sense of duty',
    ],
  },
  ESTJ: {
    code: 'ESTJ',
    careers: [
      'Business Manager',
      'Military Officer',
      'Police Officer',
      'Judge',
      'Financial Officer',
      'Hotel Manager',
      'Real Estate Agent',
      'Sales Manager',
      'Auditor',
      'Government Worker',
    ],
    famousPeople: [
      'Henry Ford',
      'Judge Judy',
      'Vince Lombardi',
      'John D. Rockefeller',
      'Sonia Sotomayor',
      'Lyndon B. Johnson',
      'Frank Sinatra',
      'Billy Graham',
      'Michelle Obama',
      'Uma Thurman',
    ],
    idealPartners: ['ISFP', 'ISTP', 'ISTJ', 'ESFJ'],
    workStyle:
      'Organized and efficient leader. Excels at implementing systems and managing people. Values tradition, order, and getting results.',
    learningStyle:
      'Practical learner who prefers structured curricula and clear expectations. Learns best through hands-on application and real-world examples.',
    communicationStyle:
      'Direct and authoritative. Values efficiency and clarity. Can be blunt and dismissive of feelings.',
    stressReactions:
      'Becomes rigid and controlling. May become workaholic. Can be overly critical and inflexible.',
    growthAreas: [
      'Being more open to new ideas',
      'Considering emotions in decisions',
      'Being more patient with others',
      'Relaxing control',
    ],
    funFacts: [
      "Often called 'the executives'",
      'Make up about 11% of the population',
      'Natural organizers',
      'Strong sense of civic duty',
    ],
  },
  ESFJ: {
    code: 'ESFJ',
    careers: [
      'Teacher',
      'Nurse',
      'Social Worker',
      'Event Planner',
      'HR Manager',
      'Office Manager',
      'Counselor',
      'Receptionist',
      'Retail Manager',
      'Childcare Provider',
    ],
    famousPeople: [
      'Taylor Swift',
      'Jennifer Garner',
      'Steve Harvey',
      'Sally Field',
      'Whitney Houston',
      'Jessica Alba',
      'Bill Clinton',
      'Danny Glover',
      'Martha Stewart',
      'Larry King',
    ],
    idealPartners: ['ISFP', 'ISTP', 'ISTJ', 'ESTJ'],
    workStyle:
      'People-oriented and organized. Excels at creating harmony and supporting others. Values cooperation, tradition, and helping teams succeed.',
    learningStyle:
      'Social learner who prefers structured group activities. Learns best through discussion, practical application, and helping others.',
    communicationStyle:
      'Warm and supportive. Excels at reading social cues. May struggle with giving negative feedback.',
    stressReactions:
      "Becomes overwhelmed by others' needs. May become controlling or gossipy. Can take criticism very personally.",
    growthAreas: [
      "Being less concerned with others' opinions",
      'Setting personal boundaries',
      'Accepting criticism constructively',
      'Being more flexible',
    ],
    funFacts: [
      "Often called 'the consuls'",
      'Make up about 12% of the population',
      'Most sociable type',
      'Strong sense of duty to others',
    ],
  },
  ISTP: {
    code: 'ISTP',
    careers: [
      'Mechanic',
      'Engineer',
      'Pilot',
      'Carpenter',
      'Computer Programmer',
      'Forensic Scientist',
      'Electrician',
      'Chef',
      'Photographer',
      'Athletic Coach',
    ],
    famousPeople: [
      'Clint Eastwood',
      'Bruce Lee',
      'Tom Cruise',
      'Eminem',
      'Snoop Dogg',
      'Bear Grylls',
      'Steve Jobs',
      'Michael Jordan',
      'Scarlett Johansson',
      'Daniel Craig',
    ],
    idealPartners: ['ESFJ', 'ESTJ', 'ESTP', 'ISFP'],
    workStyle:
      'Independent and hands-on. Excels at troubleshooting and practical problem-solving. Values autonomy and working with tools or technical systems.',
    learningStyle:
      'Kinesthetic learner who prefers hands-on experience. Learns best through experimentation, taking things apart, and practical application.',
    communicationStyle:
      'Reserved and straightforward. Prefers action over words. May struggle with expressing emotions.',
    stressReactions:
      'Withdraws and becomes more reckless. May engage in risky behavior. Can become cynical and detached.',
    growthAreas: [
      'Planning ahead instead of winging it',
      'Expressing feelings more openly',
      'Committing to long-term goals',
      'Being more considerate of others',
    ],
    funFacts: [
      "Often called 'the virtuosos'",
      'Make up about 5% of the population',
      'Love working with their hands',
      'Natural troubleshooters',
    ],
  },
  ISFP: {
    code: 'ISFP',
    careers: [
      'Artist',
      'Designer',
      'Musician',
      'Chef',
      'Photographer',
      'Physical Therapist',
      'Veterinarian',
      'Fashion Designer',
      'Florist',
      'Massage Therapist',
    ],
    famousPeople: [
      'Michael Jackson',
      'Prince',
      'Marilyn Monroe',
      'Rihanna',
      'Britney Spears',
      'Lana Del Rey',
      'Kevin Costner',
      'John Travolta',
      'Jimi Hendrix',
      'Bob Dylan',
    ],
    idealPartners: ['ESFJ', 'ESTJ', 'ENFJ', 'ISTP'],
    workStyle:
      'Creative and flexible. Excels at hands-on, aesthetic work. Values autonomy and working at own pace in supportive environments.',
    learningStyle:
      'Experiential learner who prefers hands-on activities. Learns best through doing, creating, and personal expression.',
    communicationStyle:
      'Gentle and supportive. Prefers showing rather than telling. May struggle with confrontation.',
    stressReactions:
      'Becomes withdrawn and depressed. May become overly sensitive. Can act impulsively to escape stress.',
    growthAreas: [
      'Planning for the future',
      'Being more assertive',
      'Handling criticism better',
      'Thinking long-term',
    ],
    funFacts: [
      "Often called 'the adventurers'",
      'Make up about 9% of the population',
      'Live in the present moment',
      'Strong aesthetic sense',
    ],
  },
  ESTP: {
    code: 'ESTP',
    careers: [
      'Entrepreneur',
      'Sales Representative',
      'Paramedic',
      'Detective',
      'Real Estate Agent',
      'Sports Coach',
      'Stockbroker',
      'Marketer',
      'Firefighter',
      'Construction Manager',
    ],
    famousPeople: [
      'Donald Trump',
      'Ernest Hemingway',
      'Madonna',
      'Eddie Murphy',
      'Bruce Willis',
      "Dwayne 'The Rock' Johnson",
      'Jack Nicholson',
      'Samuel L. Jackson',
      'Theodore Roosevelt',
      'George S. Patton',
    ],
    idealPartners: ['ISFJ', 'ISTJ', 'ISTP', 'ESFP'],
    workStyle:
      'Action-oriented and energetic. Excels in fast-paced, competitive environments. Values flexibility and immediate results over long-term planning.',
    learningStyle:
      'Hands-on learner who prefers action over theory. Learns best through real-world experience, competition, and immediate application.',
    communicationStyle:
      'Bold and direct. Excellent at reading situations and adapting quickly. May be tactless or insensitive.',
    stressReactions:
      'Becomes reckless and impulsive. May seek thrills to escape. Can become confrontational and aggressive.',
    growthAreas: [
      'Thinking before acting',
      'Considering long-term consequences',
      'Being more sensitive to others',
      'Following through on commitments',
    ],
    funFacts: [
      "Often called 'the entrepreneurs'",
      'Make up about 4% of the population',
      'Love living on the edge',
      'Natural risk-takers',
    ],
  },
  ESFP: {
    code: 'ESFP',
    careers: [
      'Actor',
      'Event Planner',
      'Flight Attendant',
      'Social Worker',
      'Teacher',
      'Tour Guide',
      'Fitness Trainer',
      'Musician',
      'Sales Representative',
      'Public Relations',
    ],
    famousPeople: [
      'Elvis Presley',
      'Marilyn Monroe',
      'Jamie Oliver',
      'Dolly Parton',
      'Justin Bieber',
      'Miley Cyrus',
      'Serena Williams',
      'Magic Johnson',
      'Leonardo DiCaprio',
      'Adele',
    ],
    idealPartners: ['ISFJ', 'ISTJ', 'ISTP', 'ESTP'],
    workStyle:
      'Energetic and people-oriented. Excels in social, fast-paced environments. Values fun, variety, and working with others.',
    learningStyle:
      'Social and experiential learner. Learns best through group activities, hands-on experience, and making learning fun.',
    communicationStyle:
      'Enthusiastic and entertaining. Loves connecting with people and making them feel good. May struggle with serious topics.',
    stressReactions:
      'Becomes scattered and avoids problems. May overindulge in pleasures. Can become overly emotional.',
    growthAreas: [
      'Planning ahead',
      'Handling conflict directly',
      'Focusing on long-term goals',
      'Being more disciplined',
    ],
    funFacts: [
      "Often called 'the entertainers'",
      'Make up about 9% of the population',
      'Life of the party',
      'Natural performers',
    ],
  },
};

export function getTypeDetails(code: string): TypeDetails | undefined {
  return typeDetails[code];
}
