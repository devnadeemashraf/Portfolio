import { useState } from "react";

const usePrepareStage = () => {
  const [processing, setProcessing] = useState(false);
  return { processing };
};

export default usePrepareStage;
