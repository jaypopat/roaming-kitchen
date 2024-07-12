import { Button } from "@/components/ui/button";

export default function Socials() {
  return (
    <div className="fixed top-1/2 right-0 transform -translate-y-1/2 z-50 flex flex-col items-end gap-2 px-4 py-2 bg-background shadow-lg rounded-l-lg">
      <a
        href="https://www.facebook.com/roamingkitchen"
        target="_blank"
        rel="noopener noreferrer"
      >
        <Button
          variant="ghost"
          size="icon"
          className="text-muted-foreground hover:bg-muted/50 rounded-full"
        >
          <FacebookIcon className="w-5 h-5" />
          <span className="sr-only">Facebook</span>
        </Button>
      </a>
      <a
        href="https://x.com/RoamingKitchen_"
        target="_blank"
        rel="noopener noreferrer"
      >
        <Button
          variant="ghost"
          size="icon"
          className="text-muted-foreground hover:bg-muted/50 rounded-full"
        >
          <TwitterIcon className="w-5 h-5" />
          <span className="sr-only">Twitter</span>
        </Button>
      </a>
      <a
        href="https://www.instagram.com/roamingkitchen_ie"
        target="_blank"
        rel="noopener noreferrer"
      >
        <Button
          variant="ghost"
          size="icon"
          className="text-muted-foreground hover:bg-muted/50 rounded-full"
        >
          <InstagramIcon className="w-5 h-5" />
          <span className="sr-only">Instagram</span>
        </Button>
      </a>
      <a
        href="https://wa.me/+353870525564"
        target="_blank"
        rel="noopener noreferrer"
      >
        <Button
          variant="ghost"
          size="icon"
          className="text-muted-foreground hover:bg-muted/50 rounded-full"
        >
          <WhatsappIcon className="w-5 h-5" />
          <span className="sr-only">Whatsapp</span>
        </Button>
      </a>
    </div>
  );
}

function FacebookIcon(props: any) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />
    </svg>
  );
}

function InstagramIcon(props: any) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <rect width="20" height="20" x="2" y="2" rx="5" ry="5" />
      <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
      <line x1="17.5" x2="17.51" y1="6.5" y2="6.5" />
    </svg>
  );
}

function TwitterIcon(props: any) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z" />
    </svg>
  );
}

function WhatsappIcon(props: any) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" />
    </svg>
  );
}
