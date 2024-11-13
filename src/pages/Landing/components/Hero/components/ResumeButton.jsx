import { ArrowDown } from "lucide-react";
import { Button, withIconStyles } from "../../imports";

const DownloadIconWithStyles = withIconStyles({ size: 18 }, ArrowDown);

const ResumeButton = ({ onClick }) => {
  return (
    <Button onClick={onClick}>
      <span>Resume</span>
      <DownloadIconWithStyles />
    </Button>
  );
};

export default ResumeButton;
