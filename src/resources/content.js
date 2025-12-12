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
  description: `Discover ${person.name}, a passionate ${person.role} based in ${person.location}.`,
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
        I am a web developer and UI/UX designer from India, dedicated to crafting scalable web applications. 
        My expertise lies in creating user-friendly interfaces and tackling complex technical problems, merging design with functionality.
        Currently, I am in my final year at Brainware University in West Bengal and am actively seeking work opportunities.
      </>
    ),
  },
  certifications: {
    display: true,
    title: "Certifications",
    items: [
      {
        name: "React.js Mastery",
        issuer: "Udemy",
        date: "2024",
        icon: "⭐",
        certificate: "/certificates/react-mastery.pdf",
      },
      {
        name: "Full Stack Web Development",
        issuer: "Coursera",
        date: "2023",
        icon: "🏆",
        certificate: "/certificates/full-stack-web-development.pdf",
      },
      {
        name: "UI/UX Design Fundamentals",
        issuer: "Interaction Design Foundation",
        date: "2023",
        icon: "🎨",
        certificate: "/certificates/ui-ux-design-fundamentals.pdf",
      },
      {
        name: "Machine Learning Specialization",
        issuer: "Coursera",
        date: "2024",
        icon: "🤖",
        certificate: "/certificates/machine-learning-specialization.pdf",
      },
    ],
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
            Contributed to web application development and assisted in debugging across various projects.
          </>,
          <>
            Engaged in unit testing and collaborated with senior developers to maintain code quality.
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
            Conducted data preprocessing, model training, and performance evaluation for a sentiment analysis project using Python, Pandas, and scikit-learn.
          </>,
          <>
            Delivered insights through visualizations and reports, enhancing model accuracy for real-time applications.
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
            Developed user-friendly UI/UX interfaces that increased user retention by 35% and minimized bounce rates.
          </>,
          <>
            Enhanced backend performance, cutting API response times by 40% through database optimization and caching strategies.
          </>,
        ],
        images: [],
      },
      {
        company: "Creative Sam Studio",
        timeframe: "2022 - Present",
        role: "UI/UX Developer & Graphic Designer with Branding expertise and Digital Marketing",
        achievements: [
          <>
            Designed responsive web interfaces for over 15 client projects utilizing modern frameworks and design systems.
          </>,
          <>
            Partnered with backend teams to address complex architectural challenges and improve system reliability.
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
        description: <>Pursuing a Bachelor's degree in Computer Science and Engineering, focusing on software development, data structures, algorithms, and modern web technologies.</>,
      },
      {
        name: "Higher Secondary Education",
        description: <>Completed higher secondary education at Rambhola High School in 2022, emphasizing Science and Mathematics, which sharpened my analytical and problem-solving skills.</>,
      },
      {
        name: "Secondary Education",
        description: <>Completed secondary education at Maharaja Nripendra Narayan High School in 2020 with a concentration on Mathematics and Computer Science, establishing a solid foundation in analytical thinking and problem-solving.</>,
      },
    ],
  },
  workshops: {
    display: true,
    title: "Workshops & Training",
    events: [
      {
        name: "Diploma in Software Application Programme",
        organization: "Webel Information Technology Pvt Ltd.",
        date: "2022",
        description: <>Completed a comprehensive 12-month diploma program covering core software development principles, application development, and industry-relevant technologies.</>,
      },
      {
        name: "Cybersecurity Essentials Programme",
        organization: "NetCAD Academy",
        date: "2024",
        description: <>Finished a three-week intensive cybersecurity program covering essential security concepts, threat detection, and industry best practices with professional certification.</>,
      },
      {
        name: "UI/UX Design Masterclass",
        organization: "Design Academy",
        date: "2023",
        description: <>Advanced training in user-centered design, prototyping, and design systems using Figma and Adobe XD.</>,
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
