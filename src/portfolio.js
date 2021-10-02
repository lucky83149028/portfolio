/* Change this file to get your personal Portfolio */

// To change portfolio colors globally go to the  _globalColor.scss file

import emoji from "react-easy-emoji";

// Summary And Greeting Section

const illustration = {
  animated: true // Set to false to use static SVG
};

const greeting = {
  username: "ZhengWin Wang",
  title: "Hi all, I'm ZhengWin Wang.",
  subTitle: emoji(
    "Senior solidity developer with web3.js, node.js, and react.js experience."
  ),
  resumeLink:
    "https://drive.google.com/file/d/1KdSFKihNVki12k11__O3jaEYj3LIbvzc/view?usp=sharing", // Set to empty to hide the button
  displayGreeting: true // Set false to hide this section, defaults to true
};

// Social Media Links

const socialMediaLinks = {
  github: "https://github.com/luckyCoco3418",
  linkedin: "https://www.linkedin.com/in/zhengwin-wang-18702516b/",
  gmail: "zhengyun50511@gmail.com",
  // gitlab: "https://gitlab.com/saadpasta",
  // facebook: "https://www.facebook.com/saad.pasta7",
  // medium: "https://medium.com/@saadpasta",
  stackoverflow: "https://stackoverflow.com/users/10599391/zhengyun-wang",
  // Instagram, Twitter and Kaggle are also supported in the links!
  // To customize icons and social links, tweak src/components/SocialMedia
  display: true // Set true to display this section, defaults to false
};

// Skills Section

const skillsSection = {
  title: "What I do",
  subTitle: "I enjoy software development for over 10 years, especially 4 years for blockchain projects.",
  skills: [
    emoji("⚡ Develop smart contracts with Solidity"),
    emoji("⚡ Integrate smart contracts into frontend/backend with web3.js"),
    emoji("⚡ Develop backend with Node.js, Go, and Java")
  ],

  /* Make Sure to include correct Font Awesome Classname to view your icon
https://fontawesome.com/icons?d=gallery */

  softwareSkills: [
    {
      skillName: "Solidity",
      icon: "https://cdn.worldvectorlogo.com/logos/solidity.svg"
    },
    {
      skillName: "Web3.js",
      icon: "https://raw.githubusercontent.com/ChainSafe/web3.js/1.x/assets/logo/web3js.jpg"
    },
    {
      skillName: "Node.js",
      fontAwesomeClassname: "fab fa-node"
    },
    {
      skillName: "React",
      fontAwesomeClassname: "fab fa-react"
    },
    {
      skillName: "Go",
      icon: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQZmqrhxucXIP4ppbUNTR97cxe5-_DP81i6Kkp3HJFd8G9bNXkqb4P_a38NbiSJ1_Tgezg&usqp=CAU"
    },
    {
      skillName: "C++",
      icon: "https://user-images.githubusercontent.com/42747200/46140125-da084900-c26d-11e8-8ea7-c45ae6306309.png"
    },
    {
      skillName: "Java",
      fontAwesomeClassname: "fab fa-java"
    },
    {
      skillName: "python",
      fontAwesomeClassname: "fab fa-python"
    },
  ],
  display: true // Set false to hide this section, defaults to true
};

// Education Section

const educationInfo = {
  display: true, // Set false to hide this section, defaults to true
  schools: [
    {
      schoolName: "Dalian University of Technology",
      logo: require("./assets/images/DUT.jpg"),
      subHeader: "Computer science and Technology",
      duration: "2007 - 2011",
      desc: "Bachelor's degree",
      descBullets: [
        // "Lorem ipsum dolor sit amet, consectetur adipiscing elit",
        // "Lorem ipsum dolor sit amet, consectetur adipiscing elit"
      ]
    },
  ]
};

// Your top 3 proficient stacks/tech experience

const techStack = {
  viewSkillBars: true, //Set it to true to show Proficiency Section
  experience: [
    {
      Stack: "Solidity", //Insert stack or technology you have experience in
      progressPercentage: "90%" //Insert relative proficiency in percentage
    },
    {
      Stack: "Web3.js",
      progressPercentage: "90%"
    },
    {
      Stack: "Node.js",
      progressPercentage: "70%"
    },
    {
      Stack: "Go",
      progressPercentage: "80%"
    },
  ],
  displayCodersrank: false // Set true to display codersrank badges section need to changes your username in src/containers/skillProgress/skillProgress.js:17:62, defaults to false
};

// Work experience section

const workExperiences = {
  display: true, //Set it to true to show workExperiences Section
  experience: [
    {
      role: "Solidity developer",
      company: "DAOventures",
      companylogo: require("./assets/images/DAOventures.jpg"),
      date: "April 2021 – Present",
      desc: "DAOventures is a Multichain DeFi fund manager with borrowing and lending for decentralized finance (DeFi).",
      descBullets: [
        "Automated DeFi investing",
        "Cross-chain swapping",
      ]
    },
    {
      role: "Blockchain & Full Stack developer",
      company: "SonicX Blockchain",
      companylogo: require("./assets/images/SonicX.png"),
      date: "October 2019 – Jun 2020",
      desc: "SonicX is a blockchain based on fork of TRON. I developed a DEX running on SonicX with teammates.",
      descBullets: [
        "Decentralized Exchange",
        "DeFi",
        "TRON core",
      ]
    },
    {
      role: "Blockchain & Full Stack developer",
      company: "Freelance",
      companylogo: require("./assets/images/Freelance.png"),
      date: "December 2011 – March 2021",
      desc: "My first step in the Blockchain industry was to develop a hybrid mobile wallet.",
      descBullets: [
        "Governance",
        "NFT",
        "Mobile and Web wallet",
        "Centralized Exchanges",
        "Web scraping",
        "Network programming",
      ]
    },
  ]
};

/* Your Open Source Section to View Your Github Pinned Projects
To know how to get github key look at readme.md */

const openSource = {
  showGithubProfile: "true", // Set true or false to show Contact profile using Github, defaults to true
  display: false // Set false to hide this section, defaults to true
};

// Some big projects you have worked on

const bigProjects = {
  title: "Big Projects",
  // subtitle: "SOME STARTUPS AND COMPANIES THAT I HELPED TO CREATE THEIR TECH",
  projects: [
    {
      image: require("./assets/images/DAOventures_app.png"),
      projectName: "DAOventures",
      projectDesc: "DAOventures is a multi-chain DeFi investing platform for fund managers and crypto investors.",
      footerLink: [
        {
          name: "Visit Website",
          url: "https://app.daoventures.co/invest"
        }
        //  you can add extra buttons here.
      ]
    },
    {
      image: require("./assets/images/GridZone.png"),
      projectName: "GridZone",
      projectDesc: "GridZone is a next-gen art-focused metaverse on Ethereum with unique digital identities, 3D VR world, and interactive 3D NFTs.",
      footerLink: [
        {
          name: "Visit Website",
          url: "https://gridzone.io/"
        }
      ]
    },
    {
      image: require("./assets/images/SonicEX.png"),
      projectName: "SonicEX",
      projectDesc: "SonicEX is a decentralized exchange. It also supports DeFi forked from Uniswap v2.",
      footerLink: [
        {
          name: "Visit Website",
          url: "https://sonicex.org/"
        }
      ]
    },
    {
      image: require("./assets/images/Blockbank.webp"),
      projectName: "Blockbank",
      projectDesc: "BlockBank is a non-custodial utility wallet that combines the power of decentralized and centralized technology in a simple & secure mobile application.",
      footerLink: [
        {
          name: "Visit Website",
          url: "https://play.google.com/store/apps/details?id=com.aibb.wallet"
        }
      ]
    },
  ],
  display: true // Set false to hide this section, defaults to true
};

// Achievement Section
// Include certificates, talks etc

const achievementSection = {
  title: emoji("Achievements And Certifications 🏆 "),
  subtitle:
    "Achievements, Certifications, Award Letters and Some Cool Stuff that I have done !",

  achievementsCards: [
    {
      title: "Google Code-In Finalist",
      subtitle:
        "First Pakistani to be selected as Google Code-in Finalist from 4000 students from 77 different countries.",
      image: require("./assets/images/codeInLogo.webp"),
      footerLink: [
        {
          name: "Certification",
          url: "https://drive.google.com/file/d/0B7kazrtMwm5dYkVvNjdNWjNybWJrbndFSHpNY2NFV1p4YmU0/view?usp=sharing"
        },
        {
          name: "Award Letter",
          url: "https://drive.google.com/file/d/0B7kazrtMwm5dekxBTW5hQkg2WXUyR3QzQmR0VERiLXlGRVdF/view?usp=sharing"
        },
        {
          name: "Google Code-in Blog",
          url: "https://opensource.googleblog.com/2019/01/google-code-in-2018-winners.html"
        }
      ]
    },
    {
      title: "Google Assistant Action",
      subtitle:
        "Developed a Google Assistant Action JavaScript Guru that is available on 2 Billion devices world wide.",
      image: require("./assets/images/googleAssistantLogo.webp"),
      footerLink: [
        {
          name: "View Google Assistant Action",
          url: "https://assistant.google.com/services/a/uid/000000100ee688ee?hl=en"
        }
      ]
    },

    {
      title: "PWA Web App Developer",
      subtitle: "Completed Certifcation from SMIT for PWA Web App Development",
      image: require("./assets/images/pwaLogo.webp"),
      footerLink: [
        {name: "Certification", url: ""},
        { 
          name: "Final Project",
          url: "https://pakistan-olx-1.firebaseapp.com/"
        }
      ]
    }
  ],
  display: false // Set false to hide this section, defaults to true
};

// Blogs Section

const blogSection = {
  title: "Blogs",
  subtitle:
    "With Love for Developing cool stuff, I love to write and teach others what I have learnt.",

  blogs: [
    {
      url: "https://blog.usejournal.com/create-a-google-assistant-action-and-win-a-google-t-shirt-and-cloud-credits-4a8d86d76eae",
      title: "Win a Google Assistant Tshirt and $200 in Google Cloud Credits",
      description:
        "Do you want to win $200 and Google Assistant Tshirt by creating a Google Assistant Action in less then 30 min?"
    },
    {
      url: "https://medium.com/@saadpasta/why-react-is-the-best-5a97563f423e",
      title: "Why REACT is The Best?",
      description:
        "React is a JavaScript library for building User Interface. It is maintained by Facebook and a community of individual developers and companies."
    }
  ],
  display: false // Set false to hide this section, defaults to true
};

// Talks Sections

const talkSection = {
  title: "TALKS",
  subtitle: emoji(
    "I LOVE TO SHARE MY LIMITED KNOWLEDGE AND GET A SPEAKER BADGE 😅"
  ),

  talks: [
    {
      title: "Build Actions For Google Assistant",
      subtitle: "Codelab at GDG DevFest Karachi 2019",
      slides_url: "https://bit.ly/saadpasta-slides",
      event_url: "https://www.facebook.com/events/2339906106275053/"
    }
  ],
  display: false // Set false to hide this section, defaults to true
};

// Podcast Section

const podcastSection = {
  title: emoji("Podcast 🎙️"),
  subtitle: "I LOVE TO TALK ABOUT MYSELF AND TECHNOLOGY",

  // Please Provide with Your Podcast embeded Link
  podcast: [
    "https://anchor.fm/codevcast/embed/episodes/DevStory---Saad-Pasta-from-Karachi--Pakistan-e9givv/a-a15itvo"
  ],
  display: false // Set false to hide this section, defaults to true
};

const contactInfo = {
  title: emoji("Contact Me ☎️"),
  subtitle: "Discuss a project or just want to say hi? My Inbox is open for all.",
  number: "+86-18242513963",
  email_address: "zhengyun50511@gmail.com"
};

// Twitter Section

const twitterDetails = {
  userName: "W1ThpUHcVyaGF9g", //Replace "twitter" with your twitter username without @
  display: false // Set true to display this section, defaults to false
};

export {
  illustration,
  greeting,
  socialMediaLinks,
  skillsSection,
  educationInfo,
  techStack,
  workExperiences,
  openSource,
  bigProjects,
  achievementSection,
  blogSection,
  talkSection,
  podcastSection,
  contactInfo,
  twitterDetails
};
