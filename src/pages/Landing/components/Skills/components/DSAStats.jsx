import * as classes from "../Skills.module.css";

import { useEffect, useState } from "react";

import Card from "~/src/components/shared/Card";

import LCProgressChart from "./LCProgressChart";
import LCBreakdown from "./LCBreakdown";

// Hooks
import useAxios from "~/src/hooks/useAxios";

// API Instances
import leetcode from "~/src/apis/leetcode";

// Config
import config from "~/src/config";

// TODO: REMOVE AFTER API INTEGRATION
const stats = config["resumeInfo"]["leetcodeStats"];

// useAxios config object
const apiConfig = {
  axiosInstance: leetcode,
  method: "GET",
  url: config["leetcode"]["api"]["routes"]["profile"],
  requestConfig: undefined,
  fetchOnMount: false,
  cacheExpiry: 1 * 60 * 1000, // Cache expiration time (1 minutes)
};

const DSAStats = () => {
  const [leetcodeStats, setLeetcodeStats] = useState([]);
  const [response, error, loading, fetchData] = useAxios(apiConfig);

  return (
    <a
      href={`https://leetcode.com/u/${config["leetcode"]["username"]}/`}
      target="_blank"
    >
      <Card className={classes["skills--dsa-stats"]}>
        <div>
          <LCProgressChart stats={stats} />
        </div>
        <LCBreakdown stats={stats} />
      </Card>
    </a>
  );
};

export default DSAStats;
