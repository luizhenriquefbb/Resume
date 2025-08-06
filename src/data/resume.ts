import type { ResumeData } from "../types/resume";

export const resumeData: ResumeData = {
  experiences: [
    {
      id: "ctw",
      company: "Critical TechWorks",
      role: "Full Stack Developer",
      period: "Dec 2022 - Present",
      about:
        "At Critical TechWorks, a joint venture between BMW Group and Critical Software, I contribute to software solutions powering the digital transformation of BMW.",
      roleDescription:
        "I help develop a data portal that centralizes data from multiple sources, organized for easy access. I’m a core contributor to CDEC (Cloud Data Engineering Community), focused on automating data ingestion into user accounts using AWS tools like Glue, Lambda, and ETL pipelines. I'm also responsible for implementing the EU Data Act, ensuring compliance and preventing BMW from incurring fines of up to €20M.",
      contributions: [
        {
          title: "CDEC (Cloud Data Engineering Community)",
          description:
            "Driving automation of data ingestion into user accounts using AWS services including Glue, Lambda, and ETL pipelines, streamlining the data engineering experience.",
        },
        {
          title: "EU Data Act Compliance",
          description:
            "Implemented processes for data accessibility and portability to comply with the EU Data Act, avoiding potential €20M in regulatory fines for BMW.",
        },
        {
          title: "Data Portal",
          description:
            "Helped build a portal organizing data from multiple sources into searchable categories for easier discovery and access by internal teams.",
        },
      ],
      technologies: [
        "React",
        "TypeScript",
        "Python",
        "Jest",
        "Pytest",
        "Terraform",
        "Docker",
        "AWS",
        "Lambda",
        "Cypress",
        "Selenium",
      ],
    },
    {
      id: "trimble",
      company: "Trimble Inc.",
      role: "Full Stack Developer",
      period: "Jun 2021 - Nov 2022",
      about:
        "Trimble Inc. is a technology company focused on connecting the physical and digital worlds. I worked in their transportation branch building web features and reports for fleet data analysis.",
      roleDescription:
        "Collaborated with backend, frontend, and DevOps teams to plan and build new features. Contributed heavily to QA processes, report generation, and frontend architecture. Helped with system design, participated in task refinement, and built frontend features using Python and React.",
      contributions: [
        {
          title: "Driver Login Report",
          description:
            "Created a report to identify drivers not logged into the system while driving. Designed a user-friendly UI for filtering and visualizing fleet data.",
        },
        {
          title: "QA and Test Automation",
          description:
            "Participated in QA initiatives and helped migrate and maintain test automation using Cypress and Selenium.",
        },
      ],
      technologies: [
        "React",
        "TypeScript",
        "Python",
        "Flask",
        "Selenium",
        "Cypress",
        "AWS",
        "Lambda",
        "Docker",
        "Pytest",
      ],
    },
    {
      id: "greenplat",
      company: "Green Plat",
      role: "Backend Developer",
      period: "Nov 2020 - Sep 2021",
      about:
        "Green Plat is a Brazilian company focused on sustainable technology solutions. I worked on backend systems and governmental process automation.",
      roleDescription:
        "Supported feature planning and helped design changes in system architecture and database. Developed a bot for integrating with Brazilian government systems.",
      contributions: [
        {
          title: "Government Bot Integration",
          description:
            "Designed and implemented a bot to automate integration with government systems, streamlining regulatory processes for the company.",
        },
      ],
      technologies: [
        "Python",
        "Flask",
        "Selenium",
        "HTML",
        "JavaScript",
        "CSS",
      ],
    },
    {
      id: "germanicos",
      company: "Germanicos Bespoke Tailors",
      role: "Full Stack Developer",
      period: "Mar 2018 - Nov 2020",
      about:
        "Germanicos is an Australian tailoring company. I enhanced their digital customer experience, internal tools, and mobile presence.",
      roleDescription:
        "Collaborated with the CTO to design and structure new digital features. Developed a social media bot and a mobile iOS-like web application. Also maintained meticulous activity logs and documentation.",
      contributions: [
        {
          title: "Social Media Engagement Bot",
          description:
            "Developed a bot to boost customer engagement on social media, leading to a 30% increase in page views within 30 days.",
        },
        {
          title: "iOS-like Mobile Application",
          description:
            "Built a mobile app using JavaScript, HTML, CSS, and jQuery to improve customer access to services.",
        },
      ],
      technologies: ["JavaScript", "HTML", "CSS", "jQuery", "Selenium"],
    },
    {
      id: "assista",
      company: "Assista Tecnologia",
      role: "Software Developer",
      period: "Mar 2017 - Oct 2017",
      about:
        "Assista Tecnologia focused on accessibility solutions. I contributed to tools aimed at improving the theater experience for people with disabilities.",
      roleDescription:
        "Led the design of accessible multimedia features using avatars in LIBRAS (Brazilian sign language), audio description, and subtitles. Conducted user testing and ensured real-time media synchronization.",
      contributions: [
        {
          title: "Accessible Theater Experience",
          description:
            "Developed an accessibility tool using avatars, audio description, and descriptive subtitles synchronized with movie playback.",
        },
      ],
      technologies: ["Python"],
    },
  ],
  skills: {
    Languages: ["JavaScript", "TypeScript", "Python", "HTML", "CSS", "SQL"],
    "Frameworks & Libraries": [
      "React",
      "Node.js",
      "jQuery",
      "KnockoutJS",
      "Flask",
    ],
    Testing: ["Jest", "Cypress", "Selenium", "Pytest"],
    "Tools & Platforms": ["Docker", "AWS", "Git", "Terraform"],
    Databases: ["MongoDB", "DynamoDB", "ElasticSearch"],
  },
};
