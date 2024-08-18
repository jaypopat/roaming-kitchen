"use client";
import { useState, ChangeEvent, FormEvent } from "react";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";

interface FormData {
  name: string;
  phone: string;
  email: string;
  message: string;
}

export default function ContactFormClient() {
  const [formData, setFormData] = useState<FormData>({
    name: "",
    phone: "",
    email: "",
    message: "",
  });

  const handleChange = (
    e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();

    try {
      console.log(formData);
      const response = await fetch("/api/mail", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        alert("Thank you for your message! We will get back to you soon.");
        setFormData({ name: "", phone: "", email: "", message: "" });
      } else {
        alert("Error sending email");
      }
    } catch (error) {
      console.error("Error sending email:", error);
      alert("Error sending email");
    }
  };

  return (
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
  );
}
