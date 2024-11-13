const APP_ENV = process.env.REACT_APP_ENV;

const config = {
  apis: {
    leetcode: {
      baseURL:
        APP_ENV == "development"
          ? "http://localhost:3000"
          : "https://alfa-leetcode-api.onrender.com/",
      routes: {
        profile: "/NadeemAshraf",
        solved: "/NadeemAshraf/solved",
        calendar: "/NadeemAshraf/calendar",
      },
    },
  },
};

export default config;
