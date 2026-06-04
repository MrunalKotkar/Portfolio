// ============================================================
// TODO: Replace ALL placeholder content below with your own.
// Each field has a // TODO comment explaining what to change.
// ============================================================

// --------------- PERSONAL INFO ---------------
export const personalInfo = {
  // TODO: Replace with your full name
  name: 'Mrunal Kotkar',
  // TODO: Replace with your one-line tagline
  tagline: 'Software Engineer | M.S. Computer Science',
  // TODO: Replace with your email address
  email: 'kotkarmrunal@email.com',
  // TODO: Replace with your LinkedIn profile URL
  linkedin: 'https://www.linkedin.com/in/mrunalkotkar/',
  // TODO: Replace with your GitHub profile URL
  github: 'https://github.com/MrunalKotkar',
  // TODO: Replace with your location
  location: 'San Francisco Bay Area',
  // TODO: Set to false if not currently looking
  available: true,
  // TODO: Update your availability text
  availabilityText: 'Open to full time opportunities',
  // TODO: Write your bio paragraph(s)
  bio: "I'm a CS grad student at SJSU finishing my master's, with three years of prior industry experience at UBS and Credit Suisse building distributed backend systems. My current work sits at the intersection of ML and security, covering things like agentic LLMs, RAG pipelines, and deep learning. I'm looking for software engineering or ML roles where I can build things that actually ship.",
  // TODO: Update stats to reflect your own numbers
  stats: [
    { label: 'Years Experience', value: '3+' },
    { label: 'Projects Shipped', value: '15+' },
    { label: 'Technologies', value: '20+' },
    { label: 'Publications', value: '2' },
  ],
}

// --------------- WORK EXPERIENCE ---------------
export const experience = [
  {
    company: 'UBS',
    companyInitials: 'UBS',
    companyColor: 'bg-red-600',
    role: 'Senior Software Engineer',
    team: 'Risk Analytics',
    startDate: 'Dec 2023',
    endDate: 'Jul 2025',
    location: 'Pune, India',
    borderColor: 'border-red-600',
    bullets: [
      'Designed multi-threaded risk analytics services in Spring Boot, improving system throughput by 30% via REST APIs and async data pipelines',
      'Architected distributed approval path modules handling 1,000+ transactions/min across multi-region (APAC, EMEA) clusters with Kubernetes',
      'Integrated Elasticsearch and GitLab CI/CD, achieving 25% faster query performance and seamless versioned deployments',
      'Delivered secure, scalable microservices in Dockerized Agile environments across multi-region infrastructure',
    ],
  },
  {
    company: 'Credit Suisse',
    companyInitials: 'CS',
    companyColor: 'bg-sky-600',
    role: 'Technology Analyst',
    team: 'Backend Infrastructure',
    startDate: 'Jun 2022',
    endDate: 'Dec 2023',
    location: 'Pune, India',
    borderColor: 'border-sky-600',
    bullets: [
      'Built Grafana dashboards and Python alert systems, boosting observability and reducing manual monitoring work by 30%',
      'Optimized Django/C++ backend services, decreasing system latency by 15%',
    ],
  },
]

// --------------- PROJECTS ---------------
// TODO: Replace each project with your own. Add or remove entries as needed.
export const projects = [
  {
    id: 1,
    name: 'Generative Evolution',
    description:
      'Benchmarked VAE, GAN, and Diffusion models across 1,000+ generated images, quantifying differences in quality, stability, and reconstruction accuracy with an interactive Streamlit app.',
    techStack: ['Python', 'PyTorch', 'Diffusion Models', 'GAN', 'VAE', 'Streamlit'],
    github: 'https://github.com/MrunalKotkar/GenerativeEvolution',
    demo:   'https://generativeevolution.streamlit.app/',
    color:  'violet',
    deepDive: {
      problem:
        'Generative model selection is often intuition-driven with little empirical comparison. VAEs, GANs, and Diffusion models each have different tradeoffs in quality, training stability, and reconstruction fidelity that are rarely benchmarked side by side.',
      approach:
        'Built a unified pipeline to train and evaluate VAE, GAN, and Diffusion models on the same dataset. Used KID and FID metrics to quantitatively compare 1,000+ generated images across architectures and surfaced results in an interactive Streamlit interface.',
      outcome:
        'Produced a reproducible benchmark showing measurable differences in image quality and stability across all three model families. Deployed as a live Streamlit app for interactive exploration.',
    },
  },
  {
    id: 2,
    name: 'Fall Detection',
    description:
      'ML pipeline on MobiFall v2.0 dataset achieving 99.35% accuracy in fall detection and activity classification using a 1D CNN with 100 Hz resampling and multi-size windowing.',
    techStack: ['Python', 'TensorFlow', 'Keras', 'scikit-learn', 'Pandas', 'NumPy', 'Streamlit'],
    github: 'https://github.com/MrunalKotkar/FallDetection',
    demo:   'https://falldetection1.streamlit.app/',
    color:  'cyan',
    deepDive: {
      problem:
        'Fall detection from smartphone sensors requires distinguishing subtle motion patterns from normal daily activity. Noisy, high-frequency IMU data and class imbalance across activity types make accurate classification difficult.',
      approach:
        'Built an end-to-end ML pipeline on MobiFall v2.0 with 100 Hz resampling and multi-size sliding window segmentation. Compared multiple deep learning architectures and selected a 1D CNN for its ability to capture temporal patterns directly from raw sensor signals.',
      outcome:
        'Achieved 99.35% accuracy on fall detection and activity classification. Deployed as an interactive Streamlit app for real-time inference demonstration.',
    },
  },
  {
    id: 3,
    name: 'RediSprint',
    description:
      'AI-powered Sprint Planning Assistant that automates Jira ticket creation by integrating Google Sheets and codebase context — winner of the AI Tinkerers Hackathon 2025.',
    techStack: ['Python', 'Redis', 'Composio', 'Jira API', 'Google Sheets API', 'LLMs'],
    github: 'https://github.com/MrunalKotkar/RediSprint',
    demo:   'https://youtu.be/uPKb2A4ZwCU',
    color:  'emerald',
    deepDive: {
      problem:
        'Sprint planning is repetitive and time-consuming — engineers manually translate feature specs and codebase context into Jira tickets, a process prone to inconsistency and missed details.',
      approach:
        'Built an agentic pipeline that reads sprint goals from Google Sheets and relevant codebase context, then uses an LLM via Composio to auto-generate and create structured Jira tickets. Redis handles state and caching across the workflow.',
      outcome:
        'Won the AI Tinkerers Hackathon 2025. Demonstrated end-to-end automated ticket creation from raw planning inputs with no manual Jira entry required.',
    },
  },
  {
    id: 4,
    name: 'Thanos',
    description:
      'Automated AWS misconfiguration detection system that reduced manual audit time by 70% by scanning misconfigurations across multiple resources using Terraform and MCP.',
    techStack: ['Python', 'Terraform', 'AWS', 'TypeScript', 'MCP'],
    github: 'https://github.com/manuvikash/Thanos',
    demo:   'https://www.youtube.com/watch?v=rp8iVYyoh4s',
    color:  'indigo',
    deepDive: {
      problem:
        'AWS environments accumulate misconfigurations silently — overly permissive IAM roles, open S3 buckets, and exposed security groups often go undetected until a manual audit, which is slow and inconsistent.',
      approach:
        'Built an automated scanner using Terraform to provision and inspect AWS resources, with Python-based detection logic targeting misconfigurations across IAM, S3, security groups, and more. Integrated MCP server configuration to standardize service communication across checks.',
      outcome:
        'Reduced manual AWS audit time by 70%. Provided a repeatable, infrastructure-as-code-driven security scanning workflow deployable across accounts.',
    },
  },
  {
    id: 5,
    name: 'Land Registration on Blockchain',
    description:
      'Decentralized land registration system using blockchain to eliminate fraud, ensure tamper-proof ownership records, and streamline property transfer workflows.',
    techStack: ['Solidity', 'Ethereum', 'Web3.js', 'React', 'IPFS'],
    github: 'https://github.com/vrii14/Land-Registration-with-Blockchain',
    demo:   'https://youtu.be/6VLaAa8GNDc',
    color:  'amber',
    deepDive: {
      problem:
        'Traditional land registration systems are centralized, paper-heavy, and vulnerable to fraud and data manipulation. Property disputes often arise from inconsistent or tampered records across jurisdictions.',
      approach:
        'Built a smart contract-based system on Ethereum where ownership records are stored immutably on-chain. Used IPFS for document storage and a React frontend for registration and transfer workflows, with Web3.js handling wallet and contract interactions.',
      outcome:
        'Delivered a working decentralized prototype with tamper-proof ownership records and auditable transfer history. Published as a research paper in June 2024.',
    },
  },
  {
    id: 6,
    name: 'WeatherWise',
    description:
      'Real-time weather application with location-based forecasts, dynamic UI updates, and a clean interface built with live weather API integration.',
    techStack: ['JavaScript', 'HTML', 'CSS', 'Weather API', 'REST APIs'],
    github: 'https://github.com/MrunalKotkar/Weather-App',
    demo:   'https://youtu.be/9Hey6-Yh9sM',
    color:  'sky',
    deepDive: {
      problem:
        'Most weather apps present data in a static, one-size-fits-all layout that does not adapt to current conditions or give users a sense of the live data powering the UI.',
      approach:
        'Built a vanilla JS app consuming a live Weather REST API, with dynamic UI elements that update based on fetched conditions. Focused on clean layout, readable typography, and responsive design without heavy frameworks.',
      outcome:
        'Delivered a fully functional weather app with real-time data, location search, and a dynamic interface. Demonstrated strong fundamentals in API integration and frontend design.',
    },
  },
]

// --------------- SKILLS ---------------
// TODO: Update skill lists to reflect your actual skill set
export const skills = [
  {
    category: 'Languages',
    colorClass: 'bg-blue-50 text-blue-700 border-blue-200 dark:bg-blue-900/30 dark:text-blue-300 dark:border-blue-800',
    headerColor: 'text-blue-600 dark:text-blue-400',
    dotColor: 'bg-blue-500',
    items: ['Python', 'Java', 'C', 'C++', 'TypeScript', 'JavaScript', 'SQL', 'Bash', 'HTML/CSS'],
  },
  {
    category: 'Frameworks & Libraries',
    colorClass: 'bg-violet-50 text-violet-700 border-violet-200 dark:bg-violet-900/30 dark:text-violet-300 dark:border-violet-800',
    headerColor: 'text-violet-600 dark:text-violet-400',
    dotColor: 'bg-violet-500',
    items: ['Spring Boot', 'Django', 'Node.js', 'React', 'REST APIs', 'LangChain', 'LangGraph'],
  },
  {
    category: 'Infrastructure & DevOps',
    colorClass: 'bg-orange-50 text-orange-700 border-orange-200 dark:bg-orange-900/30 dark:text-orange-300 dark:border-orange-800',
    headerColor: 'text-orange-600 dark:text-orange-400',
    dotColor: 'bg-orange-500',
    items: ['Docker', 'Kubernetes', 'Terraform', 'Ansible', 'GitLab CI/CD', 'Jenkins', 'Linux', 'Elasticsearch'],
  },
  {
    category: 'Cloud Platforms',
    colorClass: 'bg-cyan-50 text-cyan-700 border-cyan-200 dark:bg-cyan-900/30 dark:text-cyan-300 dark:border-cyan-800',
    headerColor: 'text-cyan-600 dark:text-cyan-400',
    dotColor: 'bg-cyan-500',
    items: ['AWS (EC2, S3, Lambda, IAM)', 'Microservices', 'Distributed Systems', 'Cloud Infrastructure'],
  },
  {
    category: 'Data Engineering',
    colorClass: 'bg-amber-50 text-amber-700 border-amber-200 dark:bg-amber-900/30 dark:text-amber-300 dark:border-amber-800',
    headerColor: 'text-amber-600 dark:text-amber-400',
    dotColor: 'bg-amber-500',
    items: ['Apache Airflow', 'PostgreSQL', 'Redis', 'Pandas', 'NumPy', 'Grafana'],
  },
  {
    category: 'ML & AI',
    colorClass: 'bg-emerald-50 text-emerald-700 border-emerald-200 dark:bg-emerald-900/30 dark:text-emerald-300 dark:border-emerald-800',
    headerColor: 'text-emerald-600 dark:text-emerald-400',
    dotColor: 'bg-emerald-500',
    items: ['TensorFlow', 'PyTorch', 'Keras', 'scikit-learn', 'RAG Systems', 'LLMs', 'Generative AI', 'CUDA / GPU Acceleration'],
  },
]

// --------------- EDUCATION ---------------
// TODO: Replace with your actual education history
export const education = [
  {
    institution: 'San Jose State University',        // TODO
    institutionInitials: 'SJSU',
    institutionColor: 'bg-blue-600',
    borderColor: 'border-t-blue-500',
    degree: 'Master of Science in Computer Science',  // TODO
    startDate: 'Aug 2025',                           // TODO
    endDate: 'Dec 2026',                             // TODO: or 'Present'
    location: 'San Jose, CA',                        // TODO
    gpa: '3.95 / 4.0',                               // TODO: set to null to hide
    highlights: [
      // TODO: Replace with your actual focus areas, thesis, relevant coursework
      'Focus: Software Engineering, Machine Learning, and Cloud Computing',
      'Research: Agentic LLMs, RAG pipeline optimization, and deep learning applications',
      'Relevant coursework: ML/AI Systems, Cloud Computing, Deep Learning, Distributed Systems, Data Mining',
    ],
  },
  {
    institution: 'COEP Technological University', // TODO
    institutionInitials: 'COEP',
    institutionColor: 'bg-violet-600',
    borderColor: 'border-t-violet-500',
    degree: 'Bachelor of Engineering in Computer Engineering', // TODO
    startDate: 'Aug 2018',   // TODO e.g. 'Aug 2018'
    endDate: 'May 2022',     // TODO e.g. 'May 2022'
    location: 'Pune, Maharashtra, India',                // TODO
    gpa: '3.93 / 4.0',                                       // TODO: add GPA string or keep null
    highlights: [
      // TODO: Replace with your actual thesis, coursework, achievements, GPA, awards
      'Relevant coursework: Data Structures and Algorithms, Operating Systems, Computer Networks, Database Management Systems, Software Engineering',
    ],
  },
]

// --------------- ACHIEVEMENTS ---------------
// TODO: Fill in your actual achievements. Add event photos to public/assets/ and update the image paths.
export const achievements = [
  {
    // TODO: Confirm event name, award, and date
    title: 'AI Tinkerers Hackathon 2025',
    award: '1st Place Winner',
    type: 'Hackathon',
    organization: 'AI Tinkerers',
    date: 'October 2025',
    // TODO: Copy your event photo to public/assets/hackathon-ai-tinkerers.jpg, then change null → '/assets/hackathon-ai-tinkerers.jpg'
    image: '/assets/AITinkerers.jpeg',
    description: 'Built RediSprint — an AI-powered sprint planning assistant that auto-generates Jira tickets from Google Sheets and codebase context using LLMs, Redis, and Composio.',
    link: 'https://youtu.be/uPKb2A4ZwCU',   // TODO: update or set to null
    color: 'amber',
  },
  {
    // TODO: Replace with your second hackathon details
    title: 'Cloudathon',
    award: '2nd Place winner in Cloud Track',
    type: 'Hackathon',
    organization: 'Amazon Web Services',
    date: 'April 2026',
    // TODO: Copy your event photo to public/assets/hackathon2.jpg, then change null → '/assets/hackathon2.jpg'
    image: '/assets/Cloudathon.jpeg',
    description: 'Solved real-world cloud challenges that engineers face daily at their workplace, competing against 300+ peers in a hackathon organized by AWS at San Jose State University.',
    link: null,   // TODO: add a link or set to null
    color: 'indigo',
  },
  {
    // TODO: Replace with your scholarship details
    title: 'Computer Science Department Scholarship',
    award: 'Department Scholarship',
    type: 'Scholarship',
    organization: 'San Jose State University',
    date: 'May 2026',
    // TODO: Copy your award/ceremony photo to public/assets/scholarship.jpg, then change null → '/assets/scholarship.jpg'
    image: '/assets/Scholarship.jpeg',
    description: 'In recognition of excellent merit, academic achievement, leadership, and community involvement (2026-2027).',
    link: null,
    color: 'emerald',
  },
]

// --------------- PUBLICATIONS ---------------
// TODO: Replace with your actual publications; set link to null if unavailable
export const publications = [
  {
    title: 'Reflection Based Distributed Denial of Service Attack Detection System',
    venue: 'International Conference on Computing Communication Control and Automation (ICCUBEA)',
    year:  2023,
    link:  'https://ieeexplore.ieee.org/document/10011055',
    type:  'Research Paper',
  },
  {
    title: 'Land Registration System Using Blockchain',
    venue: 'International Conference on Advances in Electronics, Computers and Communications (ICAECC)',
    year:  2024,
    link:  'https://ieeexplore.ieee.org/document/10560138',
    type:  'Research Paper',
  },
]
