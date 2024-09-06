import {
  Body,
  Button,
  Container,
  Head,
  Hr,
  Html,
  Img,
  Link,
  Preview,
  Section,
  Text,
} from "@react-email/components";

// interface EmailProps {
//   name: string;
//   description: string;
// }
// removed ts support as it had conflicting issues with styling

export const Email = ({ name, description }) => (
  <Html>
    <Head />
    <Preview>Discover the ultimate food truck experience</Preview>
    <Body style={main}>
      <Container style={container}>
        <Img
          src="https://roaming-kitchen.vercel.app/_next/image?url=%2Femail-logo.png&w=96&q=75"
          width="170"
          height="170"
          alt="Roaming Kitchen"
          style={logo}
        />

        <Text style={heading}>Welcome to Roaming Kitchen, {name}!</Text>
        <Text style={paragraph}>
          {description} We are thrilled to have you on board and can't wait to
          share our delicious offerings with you.
        </Text>

        <Section style={featureContainer}>
          <Img
            src="https://roaming-kitchen.vercel.app/_next/image?url=%2Ffeature1.png&w=640&q=75"
            width="200"
            height="200"
            alt="Feature 1"
            style={featureImage}
          />
          <Text style={featureHeading}>Customizable Menus</Text>
          <Text style={featureDescription}>
            Choose from a variety of cuisines and customize your menu to suit
            your preferences.
          </Text>
        </Section>

        <Section style={featureContainer}>
          <Img
            src="https://roaming-kitchen.vercel.app/_next/image?url=%2Ffeature2.png&w=640&q=75"
            width="200"
            height="200"
            alt="Feature 2"
            style={featureImage}
          />
          <Text style={featureHeading}>On-Site Cooking</Text>
          <Text style={featureDescription}>
            Experience the thrill of having your food cooked fresh on-site by
            our talented chefs.
          </Text>
        </Section>

        <Section style={featureContainer}>
          <Img
            src="https://roaming-kitchen.vercel.app/_next/image?url=%2Ffeature3.png&w=640&q=75"
            width="200"
            height="200"
            alt="Feature 3"
            style={featureImage}
          />
          <Text style={featureHeading}>Convenient Delivery</Text>
          <Text style={featureDescription}>
            Let us bring the party to you! We offer convenient delivery options
            to make your event a breeze.
          </Text>
        </Section>

        <Section style={btnContainer}>
          <Button style={button} href="https://roaming.kitchen">
            Explore Our Menu
          </Button>
        </Section>

        <Hr style={hr} />

        <Text style={paragraph}>
          Follow us on social media for updates, special offers, and
          behind-the-scenes glimpses:
        </Text>

        <Section style={socialContainer}>
          <Link
            href="https://www.facebook.com/roamingkitchen"
            style={socialLink}
          >
            <Img
              src="https://roaming-kitchen.vercel.app/_next/image?url=%2Ffacebook.png&w=32&q=75"
              width="32"
              height="32"
              alt="Facebook"
              style={socialIcon}
            />
          </Link>
          <Link
            href="https://www.instagram.com/roamingkitchen"
            style={socialLink}
          >
            <Img
              src="https://roaming-kitchen.vercel.app/_next/image?url=%2Finstagram.png&w=32&q=75"
              width="32"
              height="32"
              alt="Instagram"
              style={socialIcon}
            />
          </Link>
          <Link href="https://twitter.com/roamingkitchen" style={socialLink}>
            <Img
              src="https://roaming-kitchen.vercel.app/_next/image?url=%2Ftwitter.png&w=32&q=75"
              width="32"
              height="32"
              alt="Twitter"
              style={socialIcon}
            />
          </Link>
        </Section>

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

const heading = {
  fontSize: "32px",
  fontWeight: "bold",
  textAlign: "center",
  marginTop: "24px",
};

const paragraph = {
  fontSize: "16px",
  lineHeight: "26px",
  marginTop: "16px",
};

const featureContainer = {
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  marginTop: "32px",
};

const featureImage = {
  borderRadius: "50%",
  boxShadow: "0 4px 6px rgba(0, 0, 0, 0.1)",
};

const featureHeading = {
  fontSize: "20px",
  fontWeight: "bold",
  marginTop: "16px",
};

const featureDescription = {
  fontSize: "16px",
  lineHeight: "24px",
  textAlign: "center",
  marginTop: "8px",
};

const btnContainer = {
  textAlign: "center",
  marginTop: "32px",
};

const button = {
  backgroundColor: "#5F51E8",
  borderRadius: "3px",
  color: "#fff",
  fontSize: "16px",
  textDecoration: "none",
  textAlign: "center",
  display: "inline-block",
  padding: "12px 24px",
  marginTop: "16px",
};

const socialContainer = {
  display: "flex",
  justifyContent: "center",
  marginTop: "16px",
};

const socialLink = {
  marginRight: "16px",
};

const socialIcon = {
  borderRadius: "50%",
  boxShadow: "0 2px 4px rgba(0, 0, 0, 0.1)",
};

const hr = {
  borderColor: "#cccccc",
  margin: "32px 0",
};

const footer = {
  color: "#8898aa",
  fontSize: "14px",
  textAlign: "center",
  marginTop: "16px",
};
