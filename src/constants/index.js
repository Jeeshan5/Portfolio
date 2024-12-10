import {
    mobile,
    backend,
    creator,
    web,
    javascript,
    typescript,
    html,
    css,
    reactjs,
    redux,
    tailwind,
    nodejs,
    mongodb,
    leetcode,
    git,
    figma,
    docker,
    meta,
    dsa,
    weather,
    react,
    starbucks,
    tesla,
    shopify,
    carrent,
    jobit,
    tripguide,
    threejs,
    youtube,
    weatherApp,
    notes,
    TicTacToe,
    RockPaperScissor,

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
      title: "DSA Analyst",
      icon: mobile,
    },
    {
      title: "Backend Developer",
      icon: backend,
    },
    {
      title: "Student",
      icon: creator,
    },
  ];
  
  const technologies = [
    {
      name: "HTML ",
      icon: html,
    },
    
    {
      name: "CSS ",
      icon: css,
    },
    {
      name: "JavaScript",
      icon: javascript,
    },
    // {
    //   name: "TypeScript",
    //   icon: typescript,
    // },
    {
      name: "React JS",
      icon: reactjs,
    },
    // {
    //   name: "Redux Toolkit",
    //   icon: redux,
    // },
    {
      name: "Tailwind CSS",
      icon: tailwind,
    },
    {
      name: "LEETCODE ",
      icon: leetcode,
    },
    {
      name: "Node JS",
      icon: nodejs,
    },
    {
      name: "MongoDB",
      icon: mongodb,
    },
    // {
    //   name: "Three JS",
    //   icon: threejs,
    // },
    {
      name: "git",
      icon: git,
    },
    // {
    //   name: "figma",
    //   icon: figma,
    // },
    {
      name: "docker",
      icon: docker,
    },
  ];
  
  const experiences = [
    {
      title: "React.js Developer",
      site_name: "ReactJs",
      icon: react,
      iconBg: "#383E56",
      date: "Nov 2024 - Till Date",
      points: [
        "I have started learning react.js recently and  i have buitlt as and weather app using it  ",
        " My aim is Developing and maintaining web applications using React.js and other related technologies.",
        ,
       ,
      ],
    },
    {
      title: "DSA",
     site_name: "LeetCode",
      icon: dsa,
      iconBg: "#E6DEDD",
      date: "june 2024 - Till Date",
      points: [
        " I have been practising DSA problems ever since my 3rd semester.",
        "I have id on LeetCode and HackerRank",
      ],
    },
    {
      title: "Web Developer",
      site_name: "Weather-App",
      icon: weather,
      iconBg: "#383E56",
      date: "June 2024 - Till",
      points: [
        "Developing and maintaining web applications using React.js and other related technologies.",
        "I have used weather app api in it ",
      ],
    },
    // {
    //   title: "Full stack Developer",
    //   company_name: "Meta",
    //   icon: meta,
    //   iconBg: "#E6DEDD",
    //   date: "Jan 2023 - Present",
    //   points: [
    //     "Developing and maintaining web applications using React.js and other related technologies.",
    //     "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
    //     "Implementing responsive design and ensuring cross-browser compatibility.",
    //     "Participating in code reviews and providing constructive feedback to other developers.",
    //   ],
    // },
  ];
  
  const testimonials = [
    {
      testimonial:
        "I thought it was impossible to make a website as beautiful as our product, but Rick proved me wrong.",
      name: "Sara Lee",
      designation: "CFO",
      company: "Acme Co",
      image: "https://randomuser.me/api/portraits/women/4.jpg",
    },
    {
      testimonial:
        "I've never met a web developer who truly cares about their clients' success like Rick does.",
      name: "Chris Brown",
      designation: "COO",
      company: "DEF Corp",
      image: "https://randomuser.me/api/portraits/men/5.jpg",
    },
    {
      testimonial:
        "After Rick optimized our website, our traffic increased by 50%. We can't thank them enough!",
      name: "Lisa Wang",
      designation: "CTO",
      company: "456 Enterprises",
      image: "https://randomuser.me/api/portraits/women/6.jpg",
    },
  ];
  
  const projects = [
    {
      name: "Youtube-Clone",
      description:
        "This was my very first project as a beginner",
      tags: [
        {
          name: "HTML",
          color: "blue-text-gradient",
        },
        {
          name: "CSS",
          color: "green-text-gradient",
        },
        // {
        //   name: "tailwind",
        //   color: "pink-text-gradient",
        // },
      ],
      image: youtube,
      source_code_link: "https://github.com/Jeeshan5/youtube-clone.git",
    },
    {
      name: "TicTacToe",
      description:
        "It is a simple game of Tic Tac Toe in which javaScript has been implemented ",
      tags: [
        {
          name: "Html",
          color: "green-text-gradient",
        },
        {
          name: "javaScript",
          color: "blue-text-gradient",
        },
       
        {
          name: "css",
          color: "pink-text-gradient",
        },
      ],
      image: TicTacToe,
      source_code_link: "https://github.com/",
    },
    {
      name: "Targets",
      description:
        "this a notes app in which we can store our day to day task .It also have cloud data storage (your notes will be safe even after you refresh the page.)  ",
      tags: [
        {
          name: "HTML",
          color: "blue-text-gradient",
        },
        {
          name: "CSS",
          color: "green-text-gradient",
        },
        {
          name: "JavaScript",
          color: "pink-text-gradient",
        },
      ],
      image:notes,
      source_code_link: "https://github.com/Jeeshan5/notes-app.git",
    },
    {
      name: "MyWeather",
      description:
        "It fetches weather conditions based on their current location.Easy layout have been used for easier usage .I have used Myweather API for fetching weather conditions ",
      tags: [
        {
          name: "react",
          color: "blue-text-gradient",
        },
        {
          name: "OpenWeatherMap",
          color: "green-text-gradient",
        },
        {
          name: "css",
          color: "pink-text-gradient",
        },
      ],
      image:weatherApp,
      source_code_link: "https://github.com/Jeeshan5/weather-app.git",
    },
    
    
  ];
  
  export { services, technologies, experiences, testimonials, projects };