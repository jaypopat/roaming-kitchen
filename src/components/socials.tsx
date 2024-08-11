"use client";
import React from "react";
import { Button } from "@/components/ui/button";

// Define the type for each social link
interface SocialLink {
  name: string;
  href: string;
  Icon: React.FC<React.SVGProps<SVGSVGElement>>;
}
const FacebookIcon = (props: React.SVGProps<SVGSVGElement>) => (
  <svg
    {...props}
    fill="currentColor"
    viewBox="0 0 24 24"
    aria-labelledby="facebookIconTitle"
    role="img"
  >
    <title id="facebookIconTitle">Facebook</title>
    <path d="M22 12.073C22 5.403 17.303 0 12 0S2 5.403 2 12.073C2 17.664 5.656 22.163 10.437 23v-7.704H7.898v-3.223h2.539V9.845c0-2.506 1.492-3.89 3.778-3.89 1.094 0 2.238.195 2.238.195v2.473h-1.261c-1.243 0-1.631.774-1.631 1.567v1.88h2.773l-.443 3.223h-2.33V23C18.344 22.163 22 17.664 22 12.073z" />
  </svg>
);

const TwitterIcon = (props: React.SVGProps<SVGSVGElement>) => (
  <svg
    {...props}
    fill="currentColor"
    viewBox="0 0 24 24"
    aria-labelledby="twitterIconTitle"
    role="img"
  >
    <title id="twitterIconTitle">Twitter</title>
    <path d="M23.954 4.569c-.885.389-1.83.654-2.825.775 1.014-.611 1.794-1.574 2.163-2.724-.949.564-2.005.974-3.127 1.195-.897-.959-2.178-1.555-3.594-1.555-2.723 0-4.927 2.208-4.927 4.928 0 .39.044.765.127 1.124C7.691 8.094 4.066 6.13 1.64 3.161c-.427.722-.666 1.561-.666 2.475 0 1.708.869 3.216 2.188 4.096-.807-.026-1.566-.248-2.228-.616v.061c0 2.385 1.693 4.374 3.946 4.827-.413.112-.849.171-1.296.171-.314 0-.615-.03-.916-.086.631 1.953 2.445 3.376 4.6 3.416-1.68 1.32-3.809 2.105-6.102 2.105-.39 0-.779-.023-1.17-.067 2.179 1.394 4.768 2.21 7.557 2.21 9.054 0 14.001-7.497 14.001-13.986 0-.21 0-.42-.015-.63.961-.69 1.8-1.56 2.46-2.548l-.047-.02z" />
  </svg>
);

const InstagramIcon = (props: React.SVGProps<SVGSVGElement>) => (
  <svg
    {...props}
    fill="currentColor"
    viewBox="0 0 24 24"
    aria-labelledby="instagramIconTitle"
    role="img"
  >
    <title id="instagramIconTitle">Instagram</title>
    <path d="M12 2.163c3.204 0 3.584.012 4.85.07 1.366.062 2.633.33 3.608 1.305.976.976 1.243 2.243 1.305 3.609.058 1.265.07 1.645.07 4.849s-.012 3.584-.07 4.85c-.062 1.366-.33 2.633-1.305 3.609-.976.976-2.243 1.243-3.609 1.305-1.265.058-1.645.07-4.849.07s-3.584-.012-4.85-.07c-1.366-.062-2.633-.33-3.608-1.305-.976-.976-1.243-2.243-1.305-3.609C2.175 15.647 2.163 15.267 2.163 12s.012-3.584.07-4.85c.062-1.366.33-2.633 1.305-3.609.976-.976 2.243-1.243 3.609-1.305C8.416 2.175 8.796 2.163 12 2.163zm0-2.163C8.736 0 8.332.013 7.052.072 5.771.131 4.663.388 3.672 1.38c-.991.991-1.248 2.099-1.307 3.38C2.013 5.66 2 6.064 2 9.327v5.346c0 3.263.013 3.667.072 4.947.059 1.281.316 2.389 1.307 3.38.991.991 2.099 1.248 3.38 1.307 1.28.059 1.684.072 4.947.072s3.667-.013 4.947-.072c1.281-.059 2.389-.316 3.38-1.307.991-.991 1.248-2.099 1.307-3.38.059-1.28.072-1.684.072-4.947V9.327c0-3.263-.013-3.667-.072-4.947-.059-1.281-.316-2.389-1.307-3.38-.991-.991-2.099-1.248-3.38-1.307C15.667.013 15.263 0 12 0z" />
    <path d="M12 5.838a6.162 6.162 0 1 0 0 12.324 6.162 6.162 0 0 0 0-12.324zm0 10.162a3.999 3.999 0 1 1 0-7.998 3.999 3.999 0 0 1 0 7.998z" />
    <circle cx="18.406" cy="5.594" r="1.44" />
  </svg>
);

const WhatsappIcon = (props: React.SVGProps<SVGSVGElement>) => (
  <svg
    {...props}
    fill="currentColor"
    viewBox="0 0 24 24"
    aria-labelledby="whatsappIconTitle"
    role="img"
  >
    <title id="whatsappIconTitle">WhatsApp</title>
    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.031-.967-.273-.099-.472-.149-.67.15-.197.297-.767.966-.94 1.164-.173.198-.347.223-.644.074-.297-.149-1.255-.462-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.173.198-.297.298-.495.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.21-.242-.579-.487-.5-.669-.51l-.57-.01c-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.064 2.875 1.213 3.074.149.198 2.095 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.872.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.617h-.001a9.87 9.87 0 0 1-5.031-1.378l-.361-.214-3.741.982 1-3.656-.235-.374a9.86 9.86 0 0 1 1.519-12.445 9.876 9.876 0 0 1 6.997-2.9c5.467 0 9.91 4.444 9.912 9.91a9.868 9.868 0 0 1-9.86 9.875m8.413-18.287A11.815 11.815 0 0 0 12.05.002C5.495.002.116 5.381.114 11.935c0 2.096.547 4.142 1.588 5.945L.057 24l6.304-1.654a11.822 11.822 0 0 0 5.684 1.448h.005c6.554 0 11.933-5.379 11.936-11.933a11.82 11.82 0 0 0-3.517-8.413" />
  </svg>
);

const YoutubeIcon = (props: React.SVGProps<SVGSVGElement>) => (
  <svg
    {...props}
    fill="currentColor"
    viewBox="0 0 24 24"
    aria-labelledby="youtubeIconTitle"
    role="img"
  >
    <title id="youtubeIconTitle">YouTube</title>
    <path d="M19.615 3.184c-1.568-.523-7.615-.523-7.615-.523s-6.047 0-7.615.523c-1.57.525-2.786 1.738-3.308 3.304C.555 8.069.555 12 .555 12s0 3.931.522 5.511c.522 1.566 1.738 2.779 3.308 3.304 1.568.523 7.615.523 7.615.523s6.047 0 7.615-.523c1.57-.525 2.786-1.738 3.308-3.304.522-1.58.522-5.511.522-5.511s0-3.931-.522-5.511c-.522-1.566-1.738-2.779-3.308-3.304zM9.955 15.568V8.432l6.273 3.568-6.273 3.568z" />
  </svg>
);

// Define the array of social links
const socialLinks: SocialLink[] = [
  {
    name: "Facebook",
    href: "https://www.facebook.com/roamingkitchen",
    Icon: FacebookIcon,
  },
  {
    name: "Twitter",
    href: "https://x.com/RoamingKitchen_",
    Icon: TwitterIcon,
  },
  {
    name: "Instagram",
    href: "https://www.instagram.com/roamingkitchen_ie",
    Icon: InstagramIcon,
  },
  {
    name: "Whatsapp",
    href: "https://wa.me/+353894387275",
    Icon: WhatsappIcon,
  },
  {
    name: "Youtube",
    href: "https://www.youtube.com/@RoamingKitchen",
    Icon: YoutubeIcon,
  },
];

// SocialButton Component
interface SocialButtonProps {
  href: string;
  name: string;
  Icon: React.FC<React.SVGProps<SVGSVGElement>>;
}

const SocialButton = ({ href, name, Icon }: SocialButtonProps) => (
  <a href={href} target="_blank" rel="noopener noreferrer">
    <Button
      variant="ghost"
      size="icon"
      className="text-muted-foreground hover:bg-muted/50 rounded-full"
    >
      <Icon className="w-5 h-5" aria-hidden="true" />
      <span className="sr-only">{name}</span>
    </Button>
  </a>
);

// Main Socials Component
const Socials = () => {
  return (
    <div className="fixed top-1/2 right-0 transform -translate-y-1/2 z-50 flex flex-col items-end gap-2 px-1 py-1 bg-background shadow-lg rounded-l-lg">
      {socialLinks.map(({ name, href, Icon }) => (
        <SocialButton key={name} href={href} name={name} Icon={Icon} />
      ))}
    </div>
  );
};

export default Socials;
