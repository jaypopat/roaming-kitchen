"use client";
import { useState } from "react";
import axios from "axios";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
export default function ContactForm() {
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
    message: "",
  });

  const handleChange = (e: any) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = async (e: any) => {
    e.preventDefault(); // Prevent default form submission

    try {
      console.log(formData);
      const response = await axios.post("/api/mail", formData);
      if (response.status === 200) {
        alert("Thank you for your message! We will get back to you soon.");
        setFormData({ name: "", phone: "", email: "", message: "" }); // Reset form
      }
    } catch (error) {
      console.error("Error sending email:", error);
      alert("Error sending email");
    }
  };

  return (
    <section id="contact" className="w-full py-24 md:py-48 lg:py-64 bg-muted">
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
              <div className="flex items-center gap-4">
                <LocateIcon className="h-6 w-6 text-muted-foreground" />
                <p className="text-muted-foreground">
                  We are on wheels.. Tell us where to park or deliver
                </p>
              </div>
              <div className="flex items-center gap-4">
                <ClockIcon className="h-6 w-6 text-muted-foreground" />
                <p className="text-muted-foreground">Weekdays & Weekends</p>
              </div>
            </div>
            <form className="flex flex-col gap-8" onSubmit={handleSubmit}>
              <Input
                type="text"
                name="name"
                placeholder="Name"
                className="max-w-lg flex-1"
                value={formData.name}
                onChange={handleChange}
              />
              <Input
                type="tel"
                name="phone"
                placeholder="Phone Number"
                value={formData.phone}
                onChange={handleChange}
              />
              <Input
                type="email"
                name="email"
                placeholder="Email"
                className="max-w-lg flex-1"
                value={formData.email}
                onChange={handleChange}
              />
              <Textarea
                name="message"
                placeholder="Message"
                className="max-w-lg flex-1"
                value={formData.message}
                onChange={handleChange}
              />
              <Button type="submit" className="py-4 px-8 text-lg">
                Submit
              </Button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}

function ClockIcon(props: any) {
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

function LocateIcon(props: any) {
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
