export interface Position {
  id: string;
  role: string;
  organization: string;
  employmentType: string;
  dates: string;
  duration: string;
  location: string;
  locationType: string;
  category: "enterprise" | "research" | "leadership" | "mentorship" | "academics";
  headlineMetric?: string;
  dateline: string;
  descriptionBullets: string[];
  skills: string[];
  link?: string;
}

export interface Project {
  id: string;
  title: string;
  category: "cv-neuro" | "llm-agents" | "data-systems" | "predictive" | "genai";
  categoryLabel: string;
  dates: string;
  dateline: string;
  summary: string;
  headlineMetric: string;
  bullets: string[];
  techStack: string[];
  awardOrPaper?: string;
  featured?: boolean;
}

export interface MetricHighlight {
  label: string;
  value: string;
  subtext: string;
  tag: string;
}

export const PERSONAL_INFO = {
  name: "Mihir Tirumalasetti",
  editionTitle: "The Tirumalasetti Chronicle",
  latinMotto: "Omnia Data Quae Docent • All The Data Fit To Compute",
  volume: "Vol. XXIV, No. 42",
  city: "Richardson, Texas",
  headline: "Data Science Student & ML Engineer Unifying Enterprise Decisioning and 3D Neuroanatomical Connectomes",
  deck: "Specializing in scalable machine learning pipelines, 3D computer vision, and autonomous agent architectures across enterprise finance, academic neuroscience, and campus leadership.",
  bio: `I am a Data Science student at the University of Texas at Dallas with a minor in Cognitive Science, specializing in machine learning engineering, computer vision, and advanced data analytics. I am passionate about architecting scalable ML pipelines and enterprise software to solve complex, real-world challenges.

My professional experience spans engineering automated decisioning architectures for enterprise auto loan originations at Ally Financial, leading 3D computer vision pipelines for neuroanatomical mapping at UT Dallas's Neurobiology of Basal Ganglia Lab in collaboration with the Allen Institute and Columbia University, and building IoT telemetry networks for UT Southwestern Medical Center.

Beyond research and engineering, I actively serve the technology ecosystem as former Director of Operations for the Artificial Intelligence Society (directing HackAI for 300+ hackers) and Board Member on the Student Organization Funding Advisory Board (SOFAB), co-managing student service fund allocations.`,
  links: {
    linkedin: "https://www.linkedin.com/in/mihir-tirumalasetti/",
    github: "https://github.com/c3rry",
    email: "mihir.tirumalasetti@utdallas.edu",
    labWebsite: "https://labs.utdallas.edu/ganglia-guardian-lab/",
    sofab: "https://soc.utdallas.edu/for-organizations/",
    epics: "https://epics.utdallas.edu/",
  },
  education: {
    institution: "The University of Texas at Dallas",
    degree: "Bachelor of Science in Data Science",
    minor: "Cognitive Science",
    expectedGraduation: "May 2026",
    location: "Richardson, TX",
  },
};

export const METRIC_HIGHLIGHTS: MetricHighlight[] = [
  {
    label: "Projected Origination Lift",
    value: "$1.0B+",
    subtext: "160 FICO variables analyzed across historical credit datasets at Ally",
    tag: "Enterprise ML",
  },
  {
    label: "Multimodal AI Extraction",
    value: "98.8%",
    subtext: "Gemma 2 4-bit QLoRA & Llama 3.2 Vision OCR for sports scouting",
    tag: "LLMs & Vision",
  },
  {
    label: "Microscopy Volume Processed",
    value: "500GB+",
    subtext: "Automated PyTorch 3D segmentation at Ganglia Guardian Lab",
    tag: "Neuroscience",
  },
  {
    label: "Simulation Speedup",
    value: "22.5x",
    subtext: "Reduced tournament Monte Carlo runtimes from 15 min to <40 sec",
    tag: "Algorithms",
  },
  {
    label: "Low-ROE Risk Isolated",
    value: "$150M",
    subtext: "XGBoost & Spark MLlib SHAP value optimization for auto loans",
    tag: "Risk Strategy",
  },
  {
    label: "Hackathon Attendance Scaled",
    value: "300+",
    subtext: "HackAI 2025 & 2026 operations directed with $5k corporate sponsorships",
    tag: "Leadership",
  },
];

export const POSITIONS: Position[] = [
  {
    id: "sports-analytics-r-and-d",
    role: "Research and Development Officer",
    organization: "The Sports Analytics Club at UTD",
    employmentType: "Apprenticeship",
    dates: "Sep 2026 - Present",
    duration: "2 mos",
    location: "Richardson, Texas, United States",
    locationType: "On-site",
    category: "enterprise",
    headlineMetric: "98.8% AI Extraction Accuracy",
    dateline: "RICHARDSON, Tex.",
    link: "https://github.com/c3rry",
    descriptionBullets: [
      "Engineered a multimodal AI platform to normalize unstructured basketball scouting evaluations, achieving 98.8% extraction accuracy, by fine-tuning a Gemma 2 model with 4-bit QLoRA and integrating Llama 3.2 Vision OCR.",
      "Developed a game-theoretic March Madness prediction framework validated across 20 historical seasons, producing optimized bracket portfolios, by building a combinatorial ensemble engine to evaluate 247 permutations across 13 machine learning models.",
      "Reduced tournament simulation execution time from 15 minutes to under 40 seconds, by implementing in-memory seasonal caching and a Monte Carlo binary elimination simulator capable of 10,000 stochastic traversals.",
    ],
    skills: ["Gemma 2", "4-bit QLoRA", "Llama 3.2 Vision", "Monte Carlo Simulator", "Ensemble Models", "Python", "Sports Analytics"],
  },
  {
    id: "ally-data-analytics-intern",
    role: "Data & Analytics Intern",
    organization: "Ally Financial",
    employmentType: "Internship",
    dates: "May 2026 - Present",
    duration: "6 mos",
    location: "Lewisville, Texas, United States",
    locationType: "On-site",
    category: "enterprise",
    headlineMetric: "$1B+ Projected Origination Increase",
    dateline: "LEWISVILLE, Tex.",
    descriptionBullets: [
      "Engineered a multi-variable search algorithm using Snowflake SQL, Python, TensorFlow, and Scikit-learn to process historical credit datasets; analyzed 160 FICO variables to uncover over 1,000 market expansion and curtailment opportunities, projecting a $1 billion increase in enterprise loan originations.",
      "Increased enterprise auto-approval rate by 2% with zero credit risk by developing an optimized decision tree classifier to isolate high-performing customer segments and transition them directly to auto approval.",
      "Optimized auto loan origination strategy to minimize portfolio risk by fine-tuning XGBoost models and deploying Spark MLlib to analyze Shapley Values (SHAP), successfully isolating low Return on Equity (ROE) customer segments worth nearly $150 million.",
    ],
    skills: ["Snowflake SQL", "Python", "TensorFlow", "Scikit-learn", "XGBoost", "Apache Spark MLlib", "SHAP", "Credit Risk Modeling"],
  },
  {
    id: "tutoring-center",
    role: "Academic Tutor",
    organization: "The Tutoring Center",
    employmentType: "Part-time",
    dates: "Feb 2026 - May 2026",
    duration: "4 mos",
    location: "Plano, Texas, United States",
    locationType: "On-site",
    category: "academics",
    headlineMetric: "K-12 STEM Mastery",
    dateline: "PLANO, Tex.",
    descriptionBullets: [
      "Delivered individualized instruction in Mathematics, English, and SAT preparation to a diverse range of K-12 students, adapting teaching methodologies to accommodate varying learning styles and proficiency levels.",
    ],
    skills: ["Mathematics Instruction", "SAT Prep", "Differentiated Pedagogy", "Mentorship"],
  },
  {
    id: "utsw-data-analyst-intern",
    role: "Data Analyst Intern",
    organization: "UT Southwestern Medical Center",
    employmentType: "Internship",
    dates: "Jan 2026 - May 2026",
    duration: "5 mos",
    location: "Dallas, Texas, United States",
    locationType: "On-site",
    category: "research",
    headlineMetric: "Zero-Latency Anomaly Alerting",
    dateline: "DALLAS, Tex.",
    link: "https://epics.utdallas.edu/",
    descriptionBullets: [
      "Architected an automated 3-tier IoT telemetry pipeline using Python and LoRa protocols for high-precision environmental monitoring in medical imaging labs.",
      "Developed fault-tolerant automation routing real-time telemetry to Prometheus DB and Grafana Cloud for time-series analytics and event-driven anomaly alerting via the Twilio API.",
      "Optimized data ingestion workflows through SQL querying to ensure zero-latency monitoring of critical laboratory infrastructure and research-grade refrigeration systems.",
    ],
    skills: ["Python", "LoRa Protocols", "Prometheus DB", "Grafana Cloud", "Twilio API", "Time-Series Telemetry", "SQL"],
  },
  {
    id: "sofab-board-member",
    role: "SOFAB Board Member",
    organization: "The University of Texas at Dallas",
    employmentType: "Governance / Part-time",
    dates: "Aug 2025 - May 2026",
    duration: "10 mos",
    location: "Richardson, Texas, United States",
    locationType: "On-site",
    category: "leadership",
    headlineMetric: "300+ Student Budgets Evaluated",
    dateline: "RICHARDSON, Tex.",
    link: "https://soc.utdallas.edu/for-organizations/",
    descriptionBullets: [
      "Conducted rigorous financial analysis and due diligence on budget proposals from over 300 student organizations to inform data-driven funding allocation decisions.",
      "Collaborated with board members to manage and recommend the allocation of the university's Student Service Fee fund, ensuring equitable and impactful distribution.",
    ],
    skills: ["Financial Analysis", "Fund Allocation", "Budget Due Diligence", "University Governance"],
  },
  {
    id: "bbs-undergraduate-research-assistant",
    role: "Undergraduate Research Assistant (Volumetric Data Analysis Lead)",
    organization: "UTD School of Behavioral and Brain Sciences",
    employmentType: "Part-time / Research",
    dates: "Jun 2024 - May 2026",
    duration: "2 yrs",
    location: "Richardson, Texas, United States",
    locationType: "On-site",
    category: "research",
    headlineMetric: "Jindal School Award Winner & Paper Co-Author",
    dateline: "RICHARDSON, Tex.",
    link: "https://labs.utdallas.edu/ganglia-guardian-lab/",
    descriptionBullets: [
      "Led the volumetric data analysis team in designing scalable computer vision pipelines using Python, Nextflow, and Docker, automating PyTorch segmentation models for 500GB+ of microscopy data.",
      "Engineered a behavioral analytics framework using scikit-learn and MATLAB for semi-supervised pose estimation and unsupervised clustering; won the Jindal School of Management Award.",
      "Co-authoring a visual connectome research publication on ego-centric neural pathway mapping in collaboration with researchers from the Allen Institute for Neural Dynamics and Columbia University.",
    ],
    skills: ["Python", "Nextflow", "Docker", "PyTorch", "scikit-learn", "MATLAB", "3D Connectomics", "Pose Estimation"],
  },
  {
    id: "ais-director-of-operations",
    role: "Director of Operations",
    organization: "Artificial Intelligence Society at UTD",
    employmentType: "Leadership / Part-time",
    dates: "Apr 2025 - Apr 2026",
    duration: "1 yr 1 mo",
    location: "Richardson, Texas, United States",
    locationType: "On-site",
    category: "leadership",
    headlineMetric: "300+ Hackers & $5k Sponsorships",
    dateline: "RICHARDSON, Tex.",
    descriptionBullets: [
      "Directed operations for HackAI 2025 and 2026, scaling attendance to 300+ participants and executing data-driven outreach to secure $5k in corporate sponsorships.",
      "Led an 8-person cross-functional team managing logistics and budgets for 10+ annual technical workshops.",
      "Streamlined operational workflows to effectively support a growing chapter of 200+ members, facilitating high-impact speaker events and technical development programs.",
    ],
    skills: ["Event Operations", "Corporate Sponsorship Outreach", "Team Leadership", "Budgeting", "HackAI"],
  },
  {
    id: "ais-logistics-officer",
    role: "Logistics Officer",
    organization: "Artificial Intelligence Society at UTD",
    employmentType: "Part-time",
    dates: "Sep 2024 - Apr 2025",
    duration: "8 mos",
    location: "Richardson, Texas, United States",
    locationType: "On-site",
    category: "leadership",
    headlineMetric: "End-to-End Event Pipeline",
    dateline: "RICHARDSON, Tex.",
    descriptionBullets: [
      "Saw AIS events through from beginning to end, working closely with other AIS teams to capture all information needed to run an event.",
      "Formulated event concepts and scheduling in collaboration with Marketing, negotiated event logistics with Industry partners, managed food and swag procurement with Finance, and monitored live on-site execution.",
    ],
    skills: ["Project Planning", "Cross-Functional Coordination", "Procurement", "On-Site Management"],
  },
  {
    id: "ais-mentee-cohort-2",
    role: "Artificial Intelligence Mentee (Cohort 2: Denoising & GANs)",
    organization: "AIS UTD",
    employmentType: "Apprenticeship",
    dates: "Jan 2024 - May 2024",
    duration: "5 mos",
    location: "Richardson, Texas, United States",
    locationType: "On-site",
    category: "mentorship",
    headlineMetric: "Dual Underwater Denoising Models",
    dateline: "RICHARDSON, Tex.",
    descriptionBullets: [
      "Developed two underwater image denoising models in PyTorch: one combination of a rule-based denoiser and a CNN, and a Conditional GAN (CGAN) built atop a U-Net architecture.",
      "Constructed an automated data standardization and augmentation pipeline using Pandas and Torchvision.",
      "Architected the generator and discriminator components for the CGAN from scratch.",
    ],
    skills: ["PyTorch", "Conditional GAN (CGAN)", "U-Net", "Torchvision", "Underwater Vision", "Image Denoising"],
  },
  {
    id: "ais-mentee-cohort-1",
    role: "Artificial Intelligence Mentee (Cohort 1: GenAI & 3D Gaussian Splatting)",
    organization: "AIS UTD",
    employmentType: "Apprenticeship",
    dates: "Sep 2023 - Dec 2023",
    duration: "4 mos",
    location: "Richardson, Texas, United States",
    locationType: "On-site",
    category: "mentorship",
    headlineMetric: "Text-to-GIF Generative Suite",
    dateline: "RICHARDSON, Tex.",
    descriptionBullets: [
      "Collaborated with a team of 4 other mentees and a mentor to create a web application allowing users to generate AI animations using newly developed Stable Diffusion technologies.",
      "Developed the front end using React.js and orchestrated cloud backend services deployed through AWS.",
      "Implemented a 3D U-Net structure and Gaussian Splatting algorithms to convert text prompts into high-fidelity animated GIFs.",
    ],
    skills: ["React.js", "AWS", "Stable Diffusion", "3D U-Net", "Gaussian Splatting", "Generative AI"],
  },
];

export const PROJECTS: Project[] = [
  {
    id: "axon-atlas-2",
    title: "AxonAtlas2: 3D Light-Sheet Microscopy Pipeline for Neurodegeneration",
    category: "cv-neuro",
    categoryLabel: "Neurobiology & 3D Computer Vision",
    dates: "Jun 2024 – Present",
    dateline: "RICHARDSON, Tex.",
    headlineMetric: "500GB+ Volumetric Neural Connectome",
    awardOrPaper: "Allen Institute & Columbia University Collaboration",
    featured: true,
    summary:
      "A scalable machine learning pipeline designed to quantify neurodegeneration in Parkinson's disease models using massive 3D light-sheet microscopy datasets.",
    bullets: [
      "Utilizes a pretrained UNET model to generate precise axon segmentation masks across 500GB+ optical slice stacks.",
      "Implements a customized 3D-CNN for high-resolution somatic cell detection and neural density profiling.",
      "Integrates affine and b-spline atlas registration to align microstructural scans to standardized anatomical templates.",
      "Applies K-means and DBSCAN clustering algorithms to extract, categorize, and visualize spatial projection patterns in a comprehensive 2D connectome.",
    ],
    techStack: ["PyTorch", "3D-CNN", "U-Net", "DBSCAN", "Affine & B-Spline Registration", "Nextflow", "Docker", "Python"],
  },
  {
    id: "parkinsons-behavior-clusters",
    title: "Vulnerable Behavior Clusters During Parkinson's Progression",
    category: "cv-neuro",
    categoryLabel: "Behavioral Analytics & Unsupervised ML",
    dates: "May 2025 – Aug 2025",
    dateline: "RICHARDSON, Tex.",
    headlineMetric: "Jindal School of Management Award Winner",
    awardOrPaper: "Jindal School of Management Award Winner",
    featured: true,
    summary:
      "A dual-pipeline ML framework combining semi-supervised pose tracking and unsupervised high-dimensional clustering to isolate early behavioral signatures of neurodegeneration in murine models.",
    bullets: [
      "Combined Lightning Pose (a semi-supervised convolutional neural network) with MotionMapperpy for unsupervised video clustering.",
      "Engineered t-SNE segmentation routines to map continuous kinematic movements into discrete behavioral regimes.",
      "Concurrently deployed AccelCluster to process and categorize high-frequency accelerometer telemetry.",
      "Identified sub-second behavioral deficits preceding overt motor symptoms, earning our team the prestigious Jindal School of Management Award.",
    ],
    techStack: ["Lightning Pose", "MotionMapperpy", "t-SNE", "MATLAB", "Scikit-Learn", "AccelCluster", "Python"],
  },
  {
    id: "utsw-biodesign-monitoring",
    title: "UT Southwestern BioDesign Laboratory IoT Monitoring Framework",
    category: "data-systems",
    categoryLabel: "IoT Infrastructure & Time-Series Telemetry",
    dates: "Jan 2026 – May 2026",
    dateline: "DALLAS, Tex.",
    headlineMetric: "Zero-Latency Sub-GHz Telemetry Network",
    summary:
      "A scalable IoT network engineered for the UT Southwestern BioDesign Center to automate laboratory equipment telemetry and safeguard research-grade refrigeration infrastructure.",
    bullets: [
      "Engineered edge sensor nodes using Adafruit Feather RP2040 microcontrollers and RFM95 LoRa radios to record ambient metrics, refrigeration temperatures, and door state.",
      "Constructed a resilient 3-tier architecture relaying telemetry from sub-GHz field transceivers through an on-premise local gateway to Prometheus DB and Grafana Cloud.",
      "Configured automated alerting through the Twilio API to broadcast emergency SMS and email dispatches upon thermal anomalies or hardware failures.",
      "Optimized SQL data ingestion pipelines to ensure zero-latency monitoring for critical medical imaging assays.",
    ],
    techStack: ["RP2040", "LoRa RFM95", "Prometheus DB", "Grafana Cloud", "Twilio API", "Python", "SQL", "C++"],
  },
  {
    id: "ais-sponsor-agent",
    title: "AIS-sponsor: Autonomous Sponsorship Acquisition Agent",
    category: "llm-agents",
    categoryLabel: "Autonomous LLM Agents & Semantic RAG",
    dates: "Dec 2025 – Jan 2026",
    dateline: "RICHARDSON, Tex.",
    headlineMetric: "95% Reduction in Manual Lead Curation",
    summary:
      "An autonomous multi-stage agent system leveraging LangChain and Google Gemini to automate web scraping, corporate lead qualification, and tailored prospectus generation.",
    bullets: [
      "Engineered web scrapers coupled with retrieval-augmented generation (RAG) to digest corporate CSR filings and event PDFs for semantic sponsorship matching.",
      "Built a stateful memory system that cross-references historical donation patterns to generate bespoke outreach copy and tier recommendations.",
      "Devised dynamic JSON deduplication and ranking algorithms to autonomously vet hundreds of commercial targets.",
      "Reduced manual corporate lead qualification time by 95% while improving sponsor alignment.",
    ],
    techStack: ["Google Gemini", "LangChain", "Python", "RAG", "Vector Embeddings", "JSON Schemas", "Web Scraping"],
  },
  {
    id: "magenta-monitor",
    title: "MagentaMonitor: Real-Time Customer Sentiment & Churn Forecaster",
    category: "predictive",
    categoryLabel: "Deep Learning & FinTech Sentiment",
    dates: "Nov 2025",
    dateline: "DALLAS, Tex.",
    headlineMetric: "10+ Years Historical Telecommunications Forecast",
    awardOrPaper: "Built for HackUTD 2025",
    summary:
      "A real-time customer sentiment dashboard engineered for HackUTD to forecast T-Mobile's Customer Happiness Index and proactively assess churn risk.",
    bullets: [
      "Constructed an LSTM recurrent neural network in TensorFlow to forecast consumer satisfaction trajectories trained on a decade of network reliability and service metrics.",
      "Integrated Python Reddit API Wrapper (PRAW) and Flask backend services to stream and parse unfiltered customer sentiment in real time.",
      "Built a responsive React.js dashboard to visualize live predictive KPIs, outage heatmaps, and automated reputational risk alerts.",
    ],
    techStack: ["TensorFlow", "LSTM", "Python", "Flask", "PRAW", "React.js", "Tailwind CSS"],
  },
  {
    id: "guardian-vision-2",
    title: "GuardianVision2: Real-Time Surveillance & Behavior Analytics",
    category: "cv-neuro",
    categoryLabel: "Computer Vision & Threat Detection",
    dates: "Nov 2024",
    dateline: "RICHARDSON, Tex.",
    headlineMetric: "Real-Time SPHAR Human Action Profiling",
    summary:
      "A real-time edge computer vision platform engineered during a hackathon to detect and analyze anomalous human behaviors for proactive facility security.",
    bullets: [
      "Engineered an optimized video processing pipeline in Python, OpenCV, and PyTorch integrating YOLOv3 for rapid multi-target detection.",
      "Trained custom action recognition heads on the SPHAR (Surveillance-based Pose and Human Action Recognition) dataset using supervised transfer learning.",
      "Engineered dynamic TOML configuration management allowing hot-reloading of sensitivity thresholds and zone masks.",
      "Designed a streaming CSV-backed tracking index for high-throughput spatial telemetry extraction.",
    ],
    techStack: ["OpenCV", "PyTorch", "YOLOv3", "SPHAR Dataset", "TOML", "Python"],
  },
  {
    id: "deep-clean",
    title: "DeepClean: Dual-Architecture Underwater Image Restoration",
    category: "cv-neuro",
    categoryLabel: "Generative Adversarial Networks & Vision",
    dates: "Feb 2024 – May 2024",
    dateline: "RICHARDSON, Tex.",
    headlineMetric: "Dual-Engine Rule + CGAN Restoration",
    summary:
      "An advanced deep learning framework designed to eliminate underwater turbidity, chromatic attenuation, and backscatter in oceanic photography.",
    bullets: [
      "Developed two complementary restoration pipelines: a hybrid rule-based optical denoiser coupled with a CNN, and an end-to-end Conditional GAN (CGAN) atop a U-Net backbone.",
      "Built custom generator and discriminator networks from scratch in PyTorch, penalizing chromatic distortion via perceptual loss functions.",
      "Formulated a robust data standardization and augmentation pipeline utilizing Pandas and Torchvision to simulate varied aquatic conditions.",
    ],
    techStack: ["PyTorch", "Conditional GAN", "U-Net", "Torchvision", "Pandas", "Computer Vision"],
  },
  {
    id: "scene-fusion",
    title: "SceneFusion: Text-to-3D Consistent Scene Synthesis",
    category: "genai",
    categoryLabel: "Generative AI & 3D Gaussian Splatting",
    dates: "Aug 2023 – Dec 2023",
    dateline: "RICHARDSON, Tex.",
    headlineMetric: "Text-to-3D Gaussian Prior Pipeline",
    summary:
      "A generative AI pipeline synthesizing coherent 3D environments from open-ended natural language prompts through video diffusion and 3D Gaussian splatting.",
    bullets: [
      "Integrated AnimateDiff video diffusion models with DreamGaussian's 3D Gaussian splatting engine to create geometrically consistent 3D priors.",
      "Formulated multi-view optimization passes eliminating multi-face Janus artifacts during 3D texturing.",
      "Built and deployed an interactive web application allowing users to rotate, inspect, and edit synthesized 3D scenes in real time.",
    ],
    techStack: ["AnimateDiff", "DreamGaussian", "3D Gaussian Splatting", "React.js", "PyTorch", "AWS"],
  },
];

export const TECHNICAL_ARSENAL = [
  {
    category: "Machine Learning & Deep Learning",
    badgeColor: "border-purple-600 text-purple-700 dark:border-purple-400 dark:text-purple-300 bg-purple-50 dark:bg-purple-950/40",
    skills: [
      "PyTorch",
      "TensorFlow",
      "XGBoost",
      "Scikit-learn",
      "U-Net / 3D-CNN",
      "Gemma 2 QLoRA",
      "Llama 3.2 Vision",
      "Conditional GANs",
      "AnimateDiff",
      "3D Gaussian Splatting",
      "SHAP Analysis",
      "LangChain",
    ],
  },
  {
    category: "Computer Vision & Connectomics",
    badgeColor: "border-emerald-600 text-emerald-700 dark:border-emerald-400 dark:text-emerald-300 bg-emerald-50 dark:bg-emerald-950/40",
    skills: [
      "OpenCV",
      "Torchvision",
      "3D Light-Sheet Microscopy",
      "Affine & B-Spline Registration",
      "DBSCAN & K-Means",
      "Lightning Pose",
      "MotionMapperpy",
      "YOLOv3",
      "Pose Estimation",
    ],
  },
  {
    category: "Data Systems, Cloud & IoT",
    badgeColor: "border-amber-600 text-amber-700 dark:border-amber-400 dark:text-amber-300 bg-amber-50 dark:bg-amber-950/40",
    skills: [
      "Snowflake SQL",
      "Apache Spark MLlib",
      "Prometheus DB",
      "Grafana Cloud",
      "Docker",
      "Nextflow",
      "Adafruit RP2040",
      "LoRa RFM95 Protocol",
      "AWS",
      "Twilio API",
    ],
  },
  {
    category: "Languages & Frameworks",
    badgeColor: "border-blue-600 text-blue-700 dark:border-blue-400 dark:text-blue-300 bg-blue-50 dark:bg-blue-950/40",
    skills: [
      "Python",
      "SQL",
      "MATLAB",
      "C++",
      "TypeScript",
      "React.js",
      "Next.js",
      "Tailwind CSS",
      "Flask",
      "Git / GitHub",
    ],
  },
];

export const EDITORIAL_QUOTES = [
  {
    quote: "Building scalable machine learning pipelines is an exercise in rigorous due diligence: whether evaluating 160 FICO parameters at enterprise scale or tracking sub-micron axon pathways across 500 gigabytes of brain tissue, clarity and reproducible engineering are paramount.",
    attribution: "Mihir Tirumalasetti",
    context: "On Machine Learning Engineering & Neurobiology",
  },
  {
    quote: "Autonomous agent systems and multi-modal models are transforming raw, unstructured real-world signals into actionable, automated decisions.",
    attribution: "Mihir Tirumalasetti",
    context: "On Multimodal AI & Autonomous Agents",
  },
];
