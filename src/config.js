const APP_ENV = process.env.REACT_APP_ENV;

// Set this to your Leetcode Username
const LEETCODE_USERNAME = "NadeemAshraf";
const DRIVE_ITEM_ID = "1OZS78dsSXIcriqPUJWwrQBSvDIOQStOb";
const RESUME_DRIVE_LINK = `https://drive.usercontent.google.com/uc?id=${DRIVE_ITEM_ID}&export=download`;

const config = {
  apis: {
    leetcode: {
      baseURL:
        APP_ENV == "development"
          ? "http://localhost:3000"
          : "https://alfa-leetcode-api.onrender.com/",
      routes: {
        profile: `/${LEETCODE_USERNAME}`,
        solved: `/${LEETCODE_USERNAME}/solved`,
        calendar: `/${LEETCODE_USERNAME}/calendar`,
      },
    },
  },
  leetcode: {
    username: LEETCODE_USERNAME,
    api: {
      baseURL:
        APP_ENV == "development"
          ? "http://localhost:3000"
          : "https://alfa-leetcode-api.onrender.com/",
      routes: {
        profile: `/${LEETCODE_USERNAME}`,
        solved: `/${LEETCODE_USERNAME}/solved`,
        calendar: `/${LEETCODE_USERNAME}/calendar`,
      },
    },
  },
  assets: {
    resumeURL: RESUME_DRIVE_LINK,
  },
  resumeInfo: {
    skills: [
      {
        id: "js",
        name: "JavaScript",
        icon: null,
        exp: 3,
      },
      {
        id: "ts",
        name: "TypeScript",
        icon: null,
        exp: 3,
      },
      {
        id: "py",
        name: "Python",
        icon: null,
        exp: 2,
      },
      {
        id: "react",
        name: "React",
        icon: null,
        exp: 3,
      },
      {
        id: "nodejs",
        name: "Node",
        icon: null,
        exp: 3,
      },
      {
        id: "express",
        name: "Express",
        icon: null,
        exp: 3,
      },
      {
        id: "flask",
        name: "Flask",
        icon: null,
        exp: 1,
      },
      {
        id: "mysql",
        name: "MySQL",
        icon: null,
        exp: 2,
      },
      {
        id: "pgsql",
        name: "PostgreSQL",
        icon: null,
        exp: 2,
      },
      {
        id: "nosql",
        name: "MongoDB",
        icon: null,
        exp: 2,
      },
      {
        id: "jest",
        name: "Jest",
        icon: null,
        exp: 2,
      },
    ],
    leetcodeStats: [
      {
        id: "easy",
        title: "Easy",
        total: 100,
        progress: 50,
      },
      {
        id: "medium",
        title: "Medium",
        total: 550,
        progress: 400,
      },
      {
        id: "hard",
        title: "Hard",
        total: 70,
        progress: 40,
      },
    ],
  },
};

export default config;
