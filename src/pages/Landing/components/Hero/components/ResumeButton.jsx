import { ArrowDown } from "lucide-react";

import Button from "~/src/components/ui/Button";
import withIconStyles from "~/src/hoc/withIconStyles";

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
