import React from "react";
const person = {
  firstName: "Soumik",
  lastName: "Das",
  get name() {
    return `${this.firstName} ${this.lastName}`;
  },
  role: "Full Stack Web Developer & UI/UX Designer ast Creative Sam Studio",
  avatar: "/images/avatar2.jpg",
  email: "soumikdas261@gmail.com",
  location: "Asia/Kolkata", // Expecting the IANA time zone identifier, e.g., 'Europe/Vienna'
  languages: ["English", "Bengali" , "Hindi"], // optional: Leave the array empty if you don't want to display languages
};

const newsletter = {
  display: true,
  title: <>Subscribe to {person.firstName}'s Newsletter</>,
  description: (
    <>
      I occasionally write about design, technology, and share thoughts on the intersection of
      creativity and engineering.
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
    link: "https://www.linkedin.com/in/soumik-das-945465309/",
  },
  {
    name: "Threads",
    icon: "threads",
    link: "https://www.threads.com/@once_ui",
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
  headline: <>Building bridges between Modern graphical creativity and Full fledged software development</>,
  featured: {
    display: true,
    title: <>Recent project: <strong className="ml-4">Drawaky</strong></>,
    href: "/work/building-once-ui-a-customizable-design-system",
  },
  subline: (
    <>
      I'm soumik, a designer engineer at Creative Sam Studio, where I craft intuitive
      <br /> user experiences. After hours, I build my own projects.
    </>
  ),
  
};

const about = {
  path: "/about",
  label: "About",
  title: `About – ${person.name}`,
  description: `Meet ${person.name}, ${person.role} from ${person.location}`,
  tableOfContent: {
    display: true,
    subItems: false,
  },
  avatar: {
    display: true,
  },
  calendar: {
    display: true,
    link: "https://cal.com",
  },
  intro: {
    display: true,
    title: "Introduction",
    description: (
      <>
        Soumik is an India-based web developer, UI/UX designer, and backend solver with a passion for building scalable web applications. 
        Specializing in creating intuitive user interfaces and solving complex technical challenges, Soumik bridges the gap between design and functionality.
        Currently, he is a final year student at Brainware University in West Bengal and is open to work opportunities.
      </>
    ),
  },
  work: {
    display: true,
    title: "Work Experience",
    experiences: [
      {
        company: "WebTek Labs Solutions Pvt. Ltd",
        timeframe: "Jan - Feb 2025",
        role: "Web Development Intern",
        achievements: [
          <>
            Assisted in web application development and debugged code across multiple projects.
          </>,
          <>
            Performed unit testing and collaborated with senior developers to ensure code quality.
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
            Completed data preprocessing, model training, and performance evaluation for sentiment analysis project using Python, Pandas, and scikit-learn.
          </>,
          <>
            Presented insights through visualizations and reports, optimizing model accuracy for real-time applications.
          </>,
        ],
        images: [],
      },
      {
        company: "Tech Solutions India",
        timeframe: "2022 - Present",
        role: "Full Stack Web Developer",
        achievements: [
          <>
            Developed and maintained 10+ web applications using React and Node.js, serving 100k+ users across India.
          </>,
          <>
            Designed intuitive UI/UX interfaces that improved user retention by 35% and reduced bounce rates.
          </>,
          <>
            Optimized backend performance, reducing API response times by 40% through database optimization and caching strategies.
          </>,
        ],
        images: [],
      },
      {
        company: "Creative Sam Studio",
        timeframe: "2022 - still ongoing",
        role: "UI/UX Developer & core Graphic Designer with Branding expertise and Digital Marketing",
        achievements: [
          <>
            Created responsive web interfaces for 15+ client projects using modern frameworks and design systems.
          </>,
          <>
            Collaborated with backend teams to solve complex architectural challenges and improve system reliability.
          </>,
        ],
        images: [],
      },
    ],
  },
  studies: {
    display: true,
    title: "Studies",
    institutions: [
      {
        name: "Web Development Certification",
        description: <>Completed comprehensive training in full-stack web development.</>,
      },
      {
        name: "UI/UX Design Course",
        description: <>Specialized in modern UI frameworks and design principles.</>,
      },
    ],
  },
  technical: {
    display: true,
    title: "Technical Skills",
    skills: [
      {
        title: "Programming Languages",
        description: <>C, C++, Java, Python3</>,
        images: [],
      },
      {
        title: "Frontend Development",
        description: <>HTML5, CSS3, JavaScript (ES6+), React.js, Next.js, Vue.js</>,
        images: [],
      },
      {
        title: "Backend Development",
        description: <>Node.js, Python with Django, Nest.js</>,
        images: [],
      },
      {
        title: "Databases",
        description: <>SQL (MySQL), NoSQL (MongoDB)</>,
        images: [],
      },
      {
        title: "Machine Learning & Deep Learning",
        description: <>Scikit-Learn, Mlxtend, TensorFlow, NLP, HuggingFace, Computer Vision</>,
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
  description: `Design and dev projects by ${person.name}`,
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
