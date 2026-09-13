import React from "react";
const person = {
  firstName: "Soumik",
  lastName: "Das",
  get name() {
    return `${this.firstName} ${this.lastName}`;
  },
  role: "Full-Stack Developer & Data Science Enthusiast",
  avatar: "/images/avatar2.jpg",
  email: "soumikdas261@gmail.com",
  location: "Asia/Kolkata", // Expecting the IANA time zone identifier, e.g., 'Europe/Vienna'
  languages: ["English", "Hindi"], // optional: Leave the array empty if you don't want to display languages
};

const newsletter = {
  display: true,
  title: <>Subscribe to {person.firstName}&apos;s Newsletter</>,
  description: (
    <>
      I occasionally write about data science, machine learning, and building practical AI-powered applications.
    </>
  ),
};

const social = [
  // Links are automatically displayed.
  // Import new icons in /once-ui/icons.ts
  {
    name: "GitHub",
    icon: "github",
    link: "https://github.com/Sam124-Scorpion",
  },
  {
    name: "LinkedIn",
    icon: "linkedin",
    link: "https://www.linkedin.com/in/sam124/",
  },
  {
    name: "Email",
    icon: "email",
    link: `mailto:${person.email}`,
  },
];

const home = {
  path: "/",
  image: "/images/og/home.jpg",
  label: "Home",
  title: `${person.name}'s Portfolio`,
  description: `Portfolio website showcasing my work as a ${person.role}`,
  headline: <>Building intelligent applications with data, AI, and thoughtful engineering</>,
  featured: {
    display: true,
    title: <>Featured project: <strong className="ml-4">Resume Parser with RAG</strong></>,
    href: "/work/resume-parser-with-rag",
  },
  subline: (
    <>
      I&apos;m Soumik, a Data Science graduate and full-stack developer focused on building
      <br /> scalable web applications, machine learning pipelines, and RAG-powered tools.
    </>
  ),
  
};

const about = {
  path: "/about",
  label: "About",
  title: `About – ${person.name}`,
  description: `Discover ${person.name}, a passionate ${person.role} based in ${person.location}.`,
  tableOfContent: {
    display: true,
    subItems: false,
  },
  avatar: {
    display: true,
  },
  calendar: {
    display: false,
    link: "",
  },
  intro: {
    display: true,
    title: "Introduction",
    description: (
      <>
        I am a Data Science graduate and full-stack developer from India, focused on building scalable,
        intelligent applications. My experience spans Python, Django, FastAPI, exploratory data analysis,
        machine learning pipelines, and retrieval-augmented generation (RAG). I enjoy turning complex
        problems into practical products and am currently completing my B.Tech in Computer Science and Engineering
        at Brainware University.
      </>
    ),
  },
  certifications: {
    display: false,
    title: "Certifications",
    items: [],
  },
  work: {
    display: true,
    title: "Work Experience",
    experiences: [
      {
        company: "Euphoria GenX Pvt. Ltd. (Brainware University)",
        timeframe: "Aug 2025 - Nov 2025",
        role: "Industry Intern - Web Dev (Django + AI)",
        achievements: [
          <>
            Developed an AI-integrated expense management system using Python and Django, applying MVT architecture and 8+ REST APIs to reduce manual data entry by 85%.
          </>,
          <>
            Completed a 3-month industry internship in Python/Django web development with AI integration, earning dual certifications from the industry partner and university.
          </>,
        ],
        images: [],
      },
      {
        company: "Indus Net Technologies",
        timeframe: "Feb - Mar 2025",
        role: "Machine Learning Intern",
        achievements: [
          <>
            Developed an end-to-end sentiment analysis pipeline using Python, Pandas, and Scikit-Learn, achieving 87%+ model accuracy.
          </>,
          <>
            Improved model performance through iterative preprocessing and hyperparameter tuning, with real-time evaluation and visualized performance reporting.
          </>,
        ],
        images: [],
      },
    ],
  },
  studies: {
    display: true,
    title: "Education",
    institutions: [
      {
        name: "Brainware University",
        description: <>B.Tech in Computer Science and Engineering (Data Science), 2022 - 2026. Graduating with an 8.6/10 CGPA.</>,
      },
      {
        name: "Higher Secondary Education",
        description: <>Higher Secondary (12th), Cooch Behar Rambhola High School, WBCHSE, 2020 - 2022. Completed with 82%.</>,
      },
      {
        name: "Secondary Education",
        description: <>Secondary (10th), Maharaja Nripendra Narayan High School, WBBSE, 2018 - 2020. Completed with 84%.</>,
      },
    ],
  },
  workshops: {
    display: false,
    title: "Workshops & Training",
    events: [],
  },
  technical: {
    display: true,
    title: "Technical Skills",
    skills: [
      {
        title: "Programming & Query Languages",
        description: <>Python, SQL, C++</>,
        images: [],
      },
      {
        title: "Libraries",
        description: <>Pandas, NumPy, Scikit-learn, LangChain</>,
        images: [],
      },
      {
        title: "Frameworks",
        description: <>Django, FastAPI, React, Streamlit</>,
        images: [],
      },
      {
        title: "ML & AI",
        description: <>RAG, Machine Learning</>,
        images: [],
      },
      {
        title: "Data Analytics & Visualisation",
        description: <>Data Analysis, EDA, Excel, Tableau, Matplotlib, Seaborn</>,
        images: [],
      },
      {
        title: "Databases & Tools",
        description: <>PostgreSQL, MySQL, SQLite, Git, GitHub, Postman</>,
        images: [],
      },
    ],
  },
};

const blog = {
  path: "/blog",
  label: "Blog",
  title: "Writing about design and tech...",
  description: `Read what ${person.name} has been up to recently`,
  // Create new blog posts by adding a new .mdx file to app/blog/posts
  // All posts will be listed on the /blog route
};

const work = {
  path: "/work",
  label: "Work",
  title: `Projects – ${person.name}`,
  description: `Data science, machine learning, and full-stack projects by ${person.name}`,
  // Create new project pages by adding a new .mdx file to app/blog/posts
  // All projects will be listed on the /home and /work routes
};

const gallery = {
  path: "/gallery",
  label: "Gallery",
  title: `Photo gallery – ${person.name}`,
  description: `A photo collection by ${person.name}`,
  // Images by https://lorant.one
  // These are placeholder images, replace with your own
  images: [
    {
      src: "/images/gallery/horizontal-1.jpg",
      alt: "image",
      orientation: "horizontal",
    },
    {
      src: "/images/gallery/horizontal-2.jpg",
      alt: "image",
      orientation: "horizontal",
    },
    {
      src: "/images/gallery/horizontal-3.jpg",
      alt: "image",
      orientation: "horizontal",
    },
    {
      src: "/images/gallery/horizontal-4.jpg",
      alt: "image",
      orientation: "horizontal",
    },
    {
      src: "/images/gallery/vertical-1.jpg",
      alt: "image",
      orientation: "vertical",
    },
    {
      src: "/images/gallery/vertical-2.jpg",
      alt: "image",
      orientation: "vertical",
    },
    {
      src: "/images/gallery/vertical-3.jpg",
      alt: "image",
      orientation: "vertical",
    },
    {
      src: "/images/gallery/vertical-4.jpg",
      alt: "image",
      orientation: "vertical",
    },
  ],
};

export { person, social, newsletter, home, about, blog, work, gallery };
