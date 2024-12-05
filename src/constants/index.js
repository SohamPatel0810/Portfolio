import {
    mobile,
    backend,
    creator,
    web,
    javascript,
    html,
    css,
    reactjs,
    tailwind,
    nodejs,
    mongodb,
    git,
    python,
    mysql,
    aws,
    figma,
    docker,
    openxcell,
    fai,
    sensor,
    chatmate,
    faceauth,
    equester,
    kabata,
    alba,
  } from "../assets";
  
  export const navLinks = [
    {
      id: "about",
      title: "About",
    },
    {
      id: "work",
      title: "Work",
    },
    {
      id: "contact",
      title: "Contact",
    },
  ];
  
  const services = [
    {
      title: "Web Developer",
      icon: web,
    },
    {
      title: "Machine Learning",
      icon: mobile,
    },
    {
      title: "Backend Developer",
      icon: backend,
    },
    {
      title: "Data Science",
      icon: creator,
    },
  ];
  
  const technologies = [
    {
      name: "HTML 5",
      icon: html,
    },
    {
      name: "CSS 3",
      icon: css,
    },
    {
      name: "JavaScript",
      icon: javascript,
    },
    {
      name: "React JS",
      icon: reactjs,
    },
    {
      name: "Tailwind CSS",
      icon: tailwind,
    },
    {
      name: "Node JS",
      icon: nodejs,
    },
    {
      name: "MongoDB",
      icon: mongodb,
    },
    {
      name: "MySQL",
      icon: mysql,
    },
    {
      name: "Python",
      icon: python,
    },
    {
      name: "git",
      icon: git,
    },
    {
      name: "figma",
      icon: figma,
    },
    {
      name: "docker",
      icon: docker,
    },
    {
      name: "AWS",
      icon: aws,
    },
  ];
  
  const experiences = [
    {
      title: "Software Developer",
      company_name: "Lumenalta (formerly Clevertech)",
      iconBg: "#383E56",
      date: "September 2024 - Present",
      points: [
        "Designed and implemented features to handle queries related to company policies while streamlining routine check-ins for tracking employee moods and task progress.",
        " Built functionalities to assist the sales team by providing instant support, promoting products, and improving internal communications. Developed tools for document uploads and tailored responses to enhance team efficiency.",
        " Integrated the chatbot with Slack to facilitate real-time engagement, ensuring faster interactions and improved team collaboration.",
        "Devised multi-response generation strategies to produce accurate, user-specific answers, enhancing the chatbot's conversational quality.",
      ],
    },
    {
      title: "Freelancer",
      company_name: "Self Employed",
      iconBg: "#383E56",
      date: "February 2024 - August 2024",
      points: [
        "Integrated Square Payment gateway for a lottery based web application.",
        "Providing technical support for multiple small websites. ",
        "Implementing responsive design and ensuring cross-browser compatibility.",
      ],
    },
    {
      title: "Generative AI Module Lead",
      company_name: "Foundational AI",
      icon: fai,
      iconBg: "#383E56",
      date: "January 2024 - February 2024",
      points: [
        "Introduced a paragraph-level chunking mechanism for an application based on RAG (Retrieval Augmented Generation)."
      ],
    },
    {
      title: "Full Stack Developer",
      company_name: "Razroze Therapeutics Inc.",
      iconBg: "#383E56",
      date: "October 2023 - February 2024",
      points: [
        "Developing and maintaining web applications using React.js and other related technologies.",
        "Collaborating with designer and other developer to create high-quality product.",
        "Implementing responsive design and ensuring cross-browser compatibility.",
        "Implemented Socket for continuous communication for a chat-bot feature.",
        "Created efficient database schemas and ensured rapid API responses."
      ],
    },
    {
      title: "Full Stack Developer",
      company_name: "Openxcell Technolabs",
      icon: openxcell,
      iconBg: "#E6DEDD",
      date: "Feb 2022 - July 2023",
      points: [
        "Crafting server-side logic to ensure optimal performance and responsiveness, alongside developing APIs for seamless communication between the client and server.",
        "Designing and implementing intuitive user interfaces across mobile and web platforms, utilizing modern frameworks to achieve responsive and visually appealing applications.",
        "With an effective client communication, I have effectively translated project requirements into technical specifications, ensuring alignment with business objectives.",
        "Architecting efficient database schemas and enhancing performance through strategic indexing, query optimization, and transaction management.",
        " Performed comprehensive unit testing to detect and resolve bugs, incorporating automated testing frameworks to enhance code reliability and proper functionality.",
        "Enhancing application functionality through the integration of services like Google Maps, Twilio, and AWS, providing users with enriched features and reliable cloud infrastructure."
      ],
    },
  ];
  
  const testimonials = [
    {
      testimonial:
        "Soham possesses a deep understanding of software development principles and practices. He is capable of quickly adapting to new technologies and tools. He consistently demonstrates a strong problem-solving ability and can tackle complex technical challenges with ease. It was great having a developer like Soham in my team.",
      name: "Yashashwini Panchal",
      designation: "Sr. Project Manager",
      company: "Openxcell Technolabs",
      image: "https://randomuser.me/api/portraits/women/4.jpg",
    },
    {
      testimonial:
        "I had the pleasure of collaborating with Soham on the Doro project at Razroze Therapeutics. His dual expertise in front-end and back-end development significantly accelerated our project's progress. Soham's enthusiasm and eagerness to expand his skills not only enhanced our productivity but also raised our work standards. His positive attitude and technical prowess make him a standout developer and a valuable asset to any team.",
      name: "Rastin Rassoli",
      designation: "Co-Founder & Head of Product",
      company: "Razroze Therapeutics Inc",
      image: "https://randomuser.me/api/portraits/men/5.jpg",
    },
  ];
  
  const projects = [
    {
      name: "Sensor Fault Detection",
      description:
        "In this project, the system in focus is the Air Pressure system (APS) which generates pressurized air that are utilized in various functions in a truck, such as braking and gear changes. The datasets positive class corresponds to component failures for a specific component of the APS system. The negative class corresponds to trucks with failures for components not related to the APS system. The aim is to reduce the cost due to unnecessary repairs by minimizing the false predictions.",
      tags: [
        {
          name: "python",
          color: "blue-text-gradient",
        },
        {
          name: "kafka",
          color: "green-text-gradient",
        },
        {
          name: "machinelearning",
          color: "pink-text-gradient",
        },
      ],
      image: sensor,
      source_code_link: "https://github.com/SohamPatel0810/Sensor-Fault-Detection",
    },
    {
      name: "Chatmate",
      description:
        "Created a real-time chat application utilizing Socket.io, where users can seamlessly join groups and engage in instantaneous conversations by exchanging messages. It's like being in a virtual room where you can have live conversations with others. So, you can join a groups and have fun chatting with people in real-time. The app is designed to make it easy for everyone to talk and share messages quickly.",
      tags: [
        {
          name: "react",
          color: "blue-text-gradient",
        },
        {
          name: "nodejs",
          color: "green-text-gradient",
        },
        {
          name: "socket",
          color: "pink-text-gradient",
        },
      ],
      image: chatmate,
      source_code_link: "https://github.com/SohamPatel0810/Chatmate-Frontend",
    },
    {
      name: "Face Authenticator",
      description:
        "Created a Face Authentication System by employing the idea of Image Embeddings. This system utilizes advanced image representation techniques to verify and authenticate individuals based on their facial features. By converting facial images into embeddings, the system ensures a secure and efficient way of authenticating users, enhancing the overall reliability of the face recognition process. The integration of Image Embeddings adds a robust layer of accuracy to the authentication system.",
      tags: [
        {
          name: "python",
          color: "blue-text-gradient",
        },
        {
          name: "embedding",
          color: "green-text-gradient",
        },
        {
          name: "opencv",
          color: "pink-text-gradient",
        },
      ],
      image: faceauth,
      source_code_link: "https://github.com/SohamPatel0810/Face-Authenticator",
    },
    {
      name: "ALBA STEP-UP",
      description:
        "ALBA STEP UP is a waste collection portal utilized for waste management throughout the Singapore Region. Through this portal people can scan the waste collection bins spread out in their nearby locality and can earn Co2 points as reward which they can redeem to get various category of vouchers of different vendors. The main aim of this portal is to keep the region clean and green.",
      tags: [
        {
          name: "reactjs",
          color: "blue-text-gradient",
        },
        {
          name: "nodejs",
          color: "green-text-gradient",
        },
        {
          name: "database",
          color: "pink-text-gradient",
        },
        {
          name: "gogglemaps",
          color: "purple-text-gradient",
        }
      ],
      image: alba,
      source_code_link: "https://alba-ewaste.sg/",
    },
    {
      name: "Equester Portal",
      description:
        "Equester Portal is a dreamland for all equestrian needs. It manages all the needs for the Stable, Trainer and Rider. Online training, hacking and other service booking along with the horse management can be done with the help of this portal. Products needed for the horse as well as the other equestrian needs are also fulfilled through a Store module in this portal. The payment for various services in this application has been managed through the integration of Telr payment gateway.",
      tags: [
        {
          name: "reactjs",
          color: "blue-text-gradient",
        },
        {
          name: "nodejs",
          color: "green-text-gradient",
        },
        {
          name: "database",
          color: "pink-text-gradient",
        },
        {
          name: "paymentgateway",
          color: "purple-text-gradient",
        }
      ],
      image: equester,
      source_code_link: "https://www.equester.ae/",
    },
    {
      name: "Kabata Fitness",
      description:
        "Kabata is a fitness tracking application where a user can track the progress of the workout and programs he /she has been enrolled in. The application also suggests different types of programs according to the body requirements of the user. Integration of the smart dumbbell (an IOT based hardware device) with the help of the Bluetooth was done which sends the data from the dumbbell and the user can keep the track of his weighted movements. A leaderboard module was implemented which encourages the user to gain more experience points to be on the first position among the league.",
      tags: [
        {
          name: "reactjs",
          color: "blue-text-gradient",
        },
        {
          name: "nodejs",
          color: "green-text-gradient",
        },
        {
          name: "mongodb",
          color: "pink-text-gradient",
        },
        {
          name: "fitness",
          color: "purple-text-gradient",
        }
      ],
      image: kabata,
      source_code_link: "https://www.kabatafitness.com/",
    },
  ];
  
  export { services, technologies, experiences, testimonials, projects };