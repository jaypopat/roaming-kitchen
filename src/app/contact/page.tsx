import ContactFormClient from "@/components/Contact";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Contact us",
  description:
    "Get in touch with us for catering, event bookings, or any other inquiries.",
};

export default function ContactPage() {
  return (
    <section
      id="contact"
      className="w-full min-h-screen py-24 md:py-48 lg:py-64 bg-muted"
    >
      <div className="container px-8 md:px-12 lg:px-16">
        <div className="flex flex-col items-center justify-center space-y-8 text-center">
          <div className="space-y-4">
            <h2 className="text-4xl font-bold tracking-tighter sm:text-6xl">
              Contact Us
            </h2>
            <p className="max-w-[900px] text-muted-foreground md:text-2xl lg:text-xl xl:text-2xl">
              Get in touch with us for catering, event bookings, or any other
              inquiries.
            </p>
          </div>
          <div className="mx-auto w-full max-w-lg space-y-4">
            <div className="grid gap-4">
              <div className="flex items-left gap-4">
                <LocateIcon className="h-6 w-6 text-muted-foreground" />
                <p className="text-muted-foreground whitespace-nowrap">
                  We are on wheels.. Tell us where to park or deliver
                </p>
              </div>
              <div className="flex items-left gap-4">
                <ClockIcon className="h-6 w-6 text-muted-foreground" />
                <p className="text-muted-foreground">Weekdays & Weekends</p>
              </div>
            </div>
            <ContactFormClient />
          </div>
        </div>
      </div>
    </section>
  );
}

function ClockIcon(props: React.SVGProps<SVGSVGElement>) {
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
      <circle cx="12" cy="12" r="10" />
      <polyline points="12 6 12 12 16 14" />
    </svg>
  );
}

function LocateIcon(props: React.SVGProps<SVGSVGElement>) {
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
      <line x1="2" x2="5" y1="12" y2="12" />
      <line x1="19" x2="22" y1="12" y2="12" />
      <line x1="12" x2="12" y1="2" y2="5" />
      <line x1="12" x2="12" y1="19" y2="22" />
      <circle cx="12" cy="12" r="7" />
    </svg>
  );
}
