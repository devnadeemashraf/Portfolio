import { ArrowDown } from "lucide-react";
import { Button, withIconStyles } from "../../imports";

const DownloadIconWithStyles = withIconStyles({ size: 18 }, ArrowDown);

const DownloadResumeButton = () => {
  return (
    <Button>
      <span>Resume</span>
      <DownloadIconWithStyles />
    </Button>
  );
};

export default DownloadResumeButton;
