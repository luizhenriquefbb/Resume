import type { ResumeData } from '../types/resume';

export const resumeData: ResumeData = {
  experiences: [
    {
      id: 'ctw',
      company: 'Critical TechWorks',
      role: 'Full Stack Developer',
      period: 'Dec 2022 - Present',
      about: "At Critical TechWorks, a joint venture between the BMW Group and Critical Software, I've been involved in the development and deployment of software solutions for the BMW group's digital transformation initiatives.",
      roleDescription: "As a Full Stack Developer, I contribute to the end-to-end development lifecycle for many features of the 'Cloud Data Hub.' This sophisticated portal is designed to empower data engineers, abstracting away complex AWS specifications and allowing them to focus purely on data manipulation and insights. My responsibilities span the frontend development process, from collaborating with designers on UI/UX, implementing robust components, ensuring seamless integration with backend services, and overseeing deployment pipelines for optimal user experience.",
      contributions: [
        {
          title: 'CDEC (Cloud Data Engineering Community)',
          description: 'Contributed to the frontend development of the CDEC feature. This module helps data engineers create complex data pipelines with a no-code, visual interface. Users can drag-and-drop various data operations, link them together, and visualize their data flow, with the orchestration handled in the background. My focus was on building an interactive and responsive user interface that simplifies complex data workflows.'
        },
        {
          title: 'Data Portal User Experience',
          description: 'Contributed to enhancing the user experience of the main data portal by implementing responsive layouts, optimizing load times, and ensuring cross-browser compatibility, making data access and organization effortless for users.'
        }
      ],
      technologies: ['React', 'TypeScript', 'Jest', 'Cypress']
    },
    {
      id: 'trimble',
      company: 'Trimble Inc.',
      role: 'Full-stack Developer',
      period: 'Jun 2021 - Nov 2022',
      about: "Trimble Inc. is a global technology company that delivers products and services connecting the physical and digital worlds. I specifically worked within their transportation branch, contributing to a product designed to collect and analyze data from thousands of delivery trucks, optimizing logistics and fleet management.",
      roleDescription: "As a Full-stack Developer, my role involved a significant focus on the frontend, collaborating closely with backend and DevOps teams. I contributed to planning and structuring new and enhancing existing features for the web application, aiming for a smooth and intuitive user experience. My responsibilities included developing interactive components and optimizing the application's performance. I also participated in task refinement sessions, providing frontend insights, and was an active member of the division's 'QA community,' where I helped maintain and improve automated tests.",
      contributions: [
        {
          title: 'Driver Login Report Frontend',
          description: 'Contributed to the frontend development for a report that identified drivers not logged into the system while driving. This involved designing an intuitive interface for filtering and visualizing datasets, aiming for data clarity and actionable insights for operations managers.'
        },
        {
          title: 'Automated Test Migration & Enhancement',
          description: 'Assisted in the migration of our end-to-end test suite from Selenium to Cypress. This helped improve test reliability, reduce execution times, and enable faster feedback for the development team. I also helped with the inclusion and training of tools that increase developers\' productivity, like debuggers, in different projects.'
        }
      ],
      technologies: ['React', 'TypeScript', 'JavaScript', 'Selenium', 'Cypress']
    },
    {
      id: 'germanicos',
      company: 'Germanicos Bespoke Tailors',
      role: 'Full Stack Developer',
      period: 'Mar 2018 - Nov 2020',
      about: "Germanicos Bespoke Tailors is a bespoke tailoring company in Australia. I contributed to enhancing their digital presence, specifically focusing on their Point of Sale (POS) system and customer-facing digital experiences.",
      roleDescription: "As a Full Stack Developer (and initially Frontend Developer), I was involved in the planning and structuring of new features, including database design and the overall system architecture, working closely with the CTO. My primary frontend contributions focused on developing customer-facing visualization tools and implementing marketing automation functionalities to drive engagement.",
      contributions: [
        {
          title: '3D Customization Visualizer',
          description: 'Developed a 3D visualization component that allowed customers to see their custom garments in real-time as they made selections. This interactive feature, built with JavaScript, HTML and CSS aimed to enhance the online shopping experience by providing an accurate preview of the final product, helping boost customer confidence and conversion rates.'
        },
        {
          title: 'Social Media Engagement Bot Frontend',
          description: 'Developed the frontend interface for a social media bot, utilizing Selenium for automation. This bot aimed to attract more customers, contributing to a 30% increase in page hits within 30 days.'
        },
        {
          title: 'iOS Application Development',
          description: 'Built a native-like iOS application using web technologies, leveraging JavaScript, HTML, CSS, and jQuery. This application provided customers with a mobile platform to interact with Germanicos\' services.'
        }
      ],
      technologies: ['JavaScript', 'HTML', 'CSS', 'KnockoutJS', 'React', 'jQuery', 'Selenium']
    }
  ],
  skills: {
    'Languages': ['JavaScript', 'TypeScript', 'Python', 'HTML', 'CSS'],
    'Frameworks & Libraries': ['React', 'Node.js', 'jQuery', 'KnockoutJS', 'Flask'],
    'Testing': ['Jest', 'Cypress', 'Selenium', 'Pytest'],
    'Tools & Platforms': ['Docker', 'AWS', 'Git', 'Terraform']
  }
};
