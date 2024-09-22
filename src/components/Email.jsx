import React from "react";
import {
  Body,
  Container,
  Head,
  Heading,
  Html,
  Img,
  Link,
  Section,
  Text,
  Preview,
  Button,
  Hr,
} from "@react-email/components";

// Enhanced color palette
const colors = {
  primary: "#FF6B35",
  secondary: "#FFD166",
  accent1: "#4ECDC4",
  accent2: "#45B7D1",
  background: "#FFF9F0",
  text: "#333333",
  muted: "#666666",
};

const RoamingKitchenWelcomeEmail = ({ name, description }) => {
  return (
    <Html>
      <Head />
      <Preview>
        🚚✨ Welcome to Roaming Kitchen - Your Culinary Adventure Begins!
      </Preview>
      <Body style={styles.main}>
        <Container style={styles.container}>
          <Img
            src="https://roaming-kitchen.vercel.app/_next/image?url=%2Femail-logo.png&w=96&q=75"
            width="150"
            height="150"
            alt="Roaming Kitchen Logo"
            style={styles.logo}
          />

          <Heading style={styles.heading}>
            Welcome to Roaming Kitchen, {name}!
          </Heading>
          <Text style={styles.paragraph}>
            We're thrilled to announce the launch of Roaming Kitchen, your new
            favorite food truck experience! Get ready for a mouthwatering
            adventure that brings gourmet flavors right to your neighborhood.
          </Text>

          <Section style={styles.highlightSection}>
            <Text style={styles.highlightText}>
              🎉 Grand Opening Special: 20% off your first order
            </Text>
          </Section>

          <Section style={styles.featuresGrid}>
            <div style={styles.feature}>
              <Img
                src="https://roaming-kitchen.vercel.app/_next/image?url=%2Ffeature1.png&w=640&q=75"
                width="100"
                height="100"
                alt="Customizable Menus"
                style={styles.featureImage}
              />
              <Text style={styles.featureHeading}>Customizable Menus</Text>
              <Text style={styles.featureText}>
                Enjoy a diverse range of cuisines tailored to your taste.
              </Text>
            </div>
            <div style={styles.feature}>
              <Img
                src="https://roaming-kitchen.vercel.app/_next/image?url=%2Ffeature2.png&w=640&q=75"
                width="100"
                height="100"
                alt="On-Site Cooking"
                style={styles.featureImage}
              />
              <Text style={styles.featureHeading}>Live Cooking Shows</Text>
              <Text style={styles.featureText}>
                Watch our chefs create culinary magic before your eyes!
              </Text>
            </div>
            <div style={styles.feature}>
              <Img
                src="https://roaming-kitchen.vercel.app/_next/image?url=%2Ffeature3.png&w=640&q=75"
                width="100"
                height="100"
                alt="Convenient Delivery"
                style={styles.featureImage}
              />
              <Text style={styles.featureHeading}>Swift Delivery</Text>
              <Text style={styles.featureText}>
                Hot, fresh, and fast – right to your doorstep!
              </Text>
            </div>
          </Section>

          <Section style={styles.ctaSection}>
            <Text style={styles.ctaText}>
              Ready to embark on a culinary journey? Explore our menu and find
              out where we'll be parking next!
            </Text>
            <Button
              href="https://roamingkitchen.com/menu"
              style={styles.button}
            >
              Explore Our Menu
            </Button>
          </Section>

          <Hr style={styles.hr} />

          <Text style={styles.footerText}>
            Stay connected for exclusive deals and foodie updates!
          </Text>

          <Section style={styles.socialLinks}>
            <Link href="https://www.facebook.com/roamingkitchen">
              <Img
                src="https://roaming-kitchen.vercel.app/_next/image?url=%2Ffacebook.png&w=32&q=75"
                width="32"
                height="32"
                alt="Facebook"
                style={styles.socialIcon}
              />
            </Link>
            <Link href="https://www.instagram.com/roamingkitchen">
              <Img
                src="https://roaming-kitchen.vercel.app/_next/image?url=%2Finstagram.png&w=32&q=75"
                width="32"
                height="32"
                alt="Instagram"
                style={styles.socialIcon}
              />
            </Link>
            <Link href="https://twitter.com/roamingkitchen">
              <Img
                src="https://roaming-kitchen.vercel.app/_next/image?url=%2Ftwitter.png&w=32&q=75"
                width="32"
                height="32"
                alt="Twitter"
                style={styles.socialIcon}
              />
            </Link>
          </Section>

          <Text style={styles.footer}>
            Roaming Kitchen: Bringing gourmet flavors to your neighborhood!
          </Text>
        </Container>
      </Body>
    </Html>
  );
};

// Enhanced styles
const styles = {
  main: {
    backgroundColor: colors.background,
    fontFamily:
      '-apple-system,BlinkMacSystemFont,"Segoe UI",Roboto,Oxygen-Sans,Ubuntu,Cantarell,"Helvetica Neue",sans-serif',
    color: colors.text,
  },
  container: {
    margin: "0 auto",
    padding: "20px 0 48px",
    width: "580px",
  },
  logo: {
    margin: "0 auto 20px",
    display: "block",
  },
  heading: {
    fontSize: "32px",
    lineHeight: "1.3",
    fontWeight: "700",
    color: colors.primary,
    textAlign: "center",
  },
  paragraph: {
    fontSize: "18px",
    lineHeight: "1.4",
    color: colors.text,
    textAlign: "center",
  },
  highlightSection: {
    backgroundColor: colors.secondary,
    borderRadius: "4px",
    padding: "24px",
    marginTop: "24px",
    marginBottom: "24px",
  },
  highlightText: {
    fontSize: "18px",
    lineHeight: "1.4",
    color: colors.text,
    textAlign: "center",
    margin: 0,
  },
  featuresGrid: {
    display: "flex",
    justifyContent: "space-between",
    marginBottom: "48px",
  },
  feature: {
    width: "30%",
    textAlign: "center",
  },
  featureImage: {
    width: "80px",
    height: "80px",
    margin: "0 auto 16px",
  },
  featureHeading: {
    fontSize: "18px",
    lineHeight: "1.4",
    fontWeight: "600",
    color: colors.accent1,
  },
  featureText: {
    fontSize: "14px",
    lineHeight: "1.4",
    color: colors.text,
  },
  ctaSection: {
    textAlign: "center",
    marginBottom: "32px",
  },
  ctaText: {
    fontSize: "18px",
    lineHeight: "1.4",
    color: colors.text,
    marginBottom: "16px",
  },
  button: {
    backgroundColor: colors.primary,
    borderRadius: "3px",
    color: "#fff",
    fontSize: "16px",
    textDecoration: "none",
    textAlign: "center",
    display: "block",
    padding: "12px",
  },
  hr: {
    borderColor: "#e6ebf1",
    margin: "20px 0",
  },
  footerText: {
    fontSize: "16px",
    lineHeight: "1.4",
    color: colors.muted,
    textAlign: "center",
    marginBottom: "8px",
  },
  socialLinks: {
    display: "flex",
    justifyContent: "center",
    margin: "0 0 16px",
  },
  socialIcon: {
    display: "block",
    margin: "0 8px",
  },
  footer: {
    fontSize: "12px",
    lineHeight: "1.5",
    color: colors.muted,
    textAlign: "center",
  },
};

export default RoamingKitchenWelcomeEmail;
