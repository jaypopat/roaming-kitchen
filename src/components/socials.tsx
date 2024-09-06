import React from "react";
import { Button } from "@/components/ui/button";

const FacebookIcon = (props: React.SVGProps<SVGSVGElement>) => (
  <svg
    {...props}
    xmlns="http://www.w3.org/2000/svg"
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
  >
    <path
      d="M22.675 0H1.325C.594 0 0 .593 0 1.324v21.351C0 23.406.594 24 1.325 24h11.495v-9.294H9.691V11.09h3.129V8.413c0-3.1 1.894-4.788 4.66-4.788 1.325 0 2.463.099 2.794.143v3.24h-1.918c-1.505 0-1.796.715-1.796 1.762v2.31h3.587l-.467 3.615h-3.12V24h6.116C23.406 24 24 23.406 24 22.675V1.324C24 .593 23.406 0 22.675 0z"
      fill="#1877F2"
    />
    <path
      d="M16.41 24v-9.294h3.12l.467-3.615h-3.587v-2.31c0-1.047.291-1.762 1.796-1.762h1.918V4.374c-.331-.044-1.469-.143-2.794-.143-2.765 0-4.66 1.687-4.66 4.788v2.676H9.691v3.615h3.129V24h3.59z"
      fill="#FFF"
    />
  </svg>
);

const XLogo = (props: React.SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="24px"
    height="24px"
    viewBox="0 0 24 24"
  >
    <path d="M14.095479,10.316482L22.286354,1h-1.940718l-7.115352,8.087682L7.551414,1H1l8.589488,12.231093L1,23h1.940717  l7.509372-8.542861L16.448587,23H23L14.095479,10.316482z M11.436522,13.338465l-0.871624-1.218704l-6.924311-9.68815h2.981339  l5.58978,7.82155l0.867949,1.218704l7.26506,10.166271h-2.981339L11.436522,13.338465z" />
  </svg>
);

const InstagramIcon = (props: React.SVGProps<SVGSVGElement>) => (
  <svg
    {...props}
    xmlns="http://www.w3.org/2000/svg"
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
  >
    <rect x="2" y="2" width="20" height="20" rx="5" ry="5" fill="#E1306C" />
    <path
      d="M12 7.2c-2.64 0-4.8 2.16-4.8 4.8s2.16 4.8 4.8 4.8 4.8-2.16 4.8-4.8-2.16-4.8-4.8-4.8zm0 8c-1.76 0-3.2-1.44-3.2-3.2s1.44-3.2 3.2-3.2 3.2 1.44 3.2 3.2-1.44 3.2-3.2 3.2z"
      fill="#FFF"
    />
    <circle cx="17.5" cy="6.5" r="1.5" fill="#FFF" />
  </svg>
);

const WhatsappIcon = (props: React.SVGProps<SVGSVGElement>) => (
  <svg
    {...props}
    xmlns="http://www.w3.org/2000/svg"
    width="24"
    height="24"
    viewBox="0 0 32 32"
    fill="none"
  >
    <path
      fill="#25D366"
      d="M16 0C7.163 0 0 7.163 0 16c0 2.947.797 5.711 2.177 8.112L0 32l7.96-2.107A15.88 15.88 0 0016 32c8.837 0 16-7.163 16-16S24.837 0 16 0z"
    />
    <path
      fill="#FFF"
      d="M24.021 19.249c-.349-.175-2.07-1.023-2.392-1.139-.322-.116-.556-.175-.79.175-.233.35-.907 1.139-1.11 1.372-.203.233-.406.262-.755.087-.349-.175-1.476-.543-2.812-1.731-1.038-.928-1.739-2.073-1.944-2.422-.204-.349-.022-.538.153-.713.158-.158.349-.406.524-.609.175-.204.233-.349.35-.582.117-.233.059-.437-.029-.611-.087-.175-.79-1.907-1.085-2.634-.272-.66-.548-.572-.791-.583l-.673-.012c-.204 0-.528.073-.805.349-.277.277-1.053 1.033-1.053 2.518 0 1.485 1.078 2.921 1.229 3.118.15.198 2.12 3.23 5.138 4.529.718.31 1.28.496 1.717.634.722.229 1.379.198 1.896.12.578-.086 1.789-.733 2.042-1.442.252-.709.252-1.315.175-1.442-.078-.127-.292-.204-.612-.35z"
    />
  </svg>
);

const YoutubeIcon = (props: React.SVGProps<SVGSVGElement>) => (
  <svg
    {...props}
    xmlns="http://www.w3.org/2000/svg"
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
  >
    <path
      d="M21.8 8s-.2-1.6-.8-2.3c-.8-.9-1.6-1-2-1.1C16.5 4 12 4 12 4s-4.5 0-6.9.6c-.5.1-1.3.2-2 1.1C2.4 6.4 2.2 8 2.2 8s-.2 1.6-.2 3.2v1.6c0 1.6.2 3.2.2 3.2s.2 1.6.8 2.3c.8.9 1.9.9 2.4 1.1 1.8.2 7.6.6 7.6.6s4.5 0 6.9-.6c.5-.1 1.3-.2 2-1.1.6-.8.8-2.3.8-2.3s.2-1.6.2-3.2v-1.6c0-1.6-.2-3.2-.2-3.2zm-12 7.5V8.5l5.6 3.5-5.6 3.5z"
      fill="#FF0000"
    />
  </svg>
);

interface SocialLink {
  name: string;
  href: string;
  Icon: React.FC<React.SVGProps<SVGSVGElement>>;
}
const socialLinks: SocialLink[] = [
  {
    name: "Facebook",
    href: "https://www.facebook.com/roamingkitchen",
    Icon: FacebookIcon,
  },
  {
    name: "X",
    href: "https://x.com/RoamingKitchen_",
    Icon: XLogo,
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
export const Socials = () => {
  return (
    <div className="fixed top-1/2 right-0 transform -translate-y-1/2 z-50 flex flex-col items-end gap-2 px-1 py-1 bg-background shadow-lg rounded-l-lg">
      {socialLinks.map(({ name, href, Icon }) => (
        <SocialButton key={name} href={href} name={name} Icon={Icon} />
      ))}
    </div>
  );
};
export default Socials;
