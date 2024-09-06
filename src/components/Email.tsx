import { Html, Button } from "@react-email/components";
import { FC } from "react";

interface EmailProps {
  name: string;
  description: string;
}
export const EmailComponent: FC<EmailProps> = ({ name, description }) => {
  return (
    <Html lang="en">
      <p>Hello {name}!</p>
      <p>{description}</p>
    </Html>
  );
};
