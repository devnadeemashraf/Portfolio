import { Mailbox } from "lucide-react";
import { Button, withIconStyles } from "../../imports";

const MailboxIconWithStyles = withIconStyles({ size: 18 }, Mailbox);

const ContactMeButton = () => {
  return (
    <Button variant="secondary">
      <span>Contact Me</span>
      <MailboxIconWithStyles />
    </Button>
  );
};

export default ContactMeButton;
