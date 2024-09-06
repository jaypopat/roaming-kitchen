import {
  Body,
  Button,
  Container,
  Head,
  Hr,
  Html,
  Img,
  Preview,
  Section,
  Text,
} from "@react-email/components";

interface EmailProps {
  name: string;
  description: string;
}

export const Email = ({ name, description }: EmailProps) => (
  <Html>
    <Head />
    <Preview>The food truck that comes to you</Preview>
    <Body style={main}>
      <Container style={container}>
        <Img
          src="https://roaming-kitchen.vercel.app/_next/image?url=%2Femail-logo.png&w=96&q=75"
          width="170"
          height="50"
          alt="Roaming Kitchen"
          style={logo}
        />
        <Text style={paragraph}>Hi {name},</Text>
        <Text style={paragraph}>{description}</Text>
        <Section style={btnContainer}>
          <Button style={button} href="https://roaming.kitchen">
            Learn more about us
          </Button>
        </Section>
        <Text style={paragraph}>
          Best,
          <br />
          The Roaming Kitchen Team
        </Text>
        <Hr style={hr} />
        <Text style={footer}>
          We are on wheels.. Tell us where to park or deliver
        </Text>
      </Container>
    </Body>
  </Html>
);

const main = {
  backgroundColor: "#ffffff",
  fontFamily:
    '-apple-system,BlinkMacSystemFont,"Segoe UI",Roboto,Oxygen-Sans,Ubuntu,Cantarell,"Helvetica Neue",sans-serif',
};

const container = {
  margin: "0 auto",
  padding: "20px 0 48px",
};

const logo = {
  margin: "0 auto",
};

const paragraph = {
  fontSize: "16px",
  lineHeight: "26px",
};

const btnContainer = {
  textAlign: "center" as const,
};

const button = {
  backgroundColor: "#5F51E8",
  borderRadius: "3px",
  color: "#fff",
  fontSize: "16px",
  textDecoration: "none",
  textAlign: "center" as const,
  display: "block",
  padding: "12px",
};

const hr = {
  borderColor: "#cccccc",
  margin: "20px 0",
};

const footer = {
  color: "#8898aa",
  fontSize: "12px",
};
