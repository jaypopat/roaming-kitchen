"use client";
import React, { useState } from "react";
import { Mail, User, Send } from "lucide-react";

const NewsletterSignup: React.FC = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      const response = await fetch("/api/waitlist", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ name, email }),
      });
      if (response.ok) {
        setMessage("Thanks for joining our waitlist!");
        setName("");
        setEmail("");
      } else if (response.status === 400) {
        setMessage("You're already subscribed!");
      } else {
        setMessage("Error subscribing. Please try again.");
      }
    } catch (error) {
      setMessage("An error occurred. Please try again later.");
    }
  };

  return (
    <div className="bg-white/10 p-4 md:p-6 rounded-lg shadow-lg backdrop-blur-sm">
      <h2 className="text-xl md:text-2xl font-bold mb-4 md:mb-6 text-center text-white">
        Join Our Waitlist
      </h2>
      <form onSubmit={handleSubmit} className="space-y-3 md:space-y-4">
        <div className="relative">
          <label htmlFor="name" className="sr-only">
            Your Name
          </label>
          <User
            className="absolute left-3 top-1/2 transform -translate-y-1/2 text-white/50"
            size={16}
          />
          <input
            id="name"
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
            placeholder="Your Name"
            required
            className="w-full pl-9 pr-4 py-2 text-sm md:text-base rounded-full bg-white/20 text-white placeholder-white/50 border border-white/30 focus:outline-none focus:border-red-400 focus:ring-2 focus:ring-red-400 focus:bg-white/30 transition-all duration-300"
          />
        </div>
        <div className="relative">
          <label htmlFor="email" className="sr-only">
            Your Email
          </label>
          <Mail
            className="absolute left-3 top-1/2 transform -translate-y-1/2 text-white/50"
            size={16}
          />
          <input
            id="email"
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Your Email"
            required
            className="w-full pl-9 pr-4 py-2 text-sm md:text-base rounded-full bg-white/20 text-white placeholder-white/50 border border-white/30 focus:outline-none focus:border-red-400 focus:ring-2 focus:ring-red-400 focus:bg-white/30 transition-all duration-300"
          />
        </div>
        <button
          type="submit"
          className="w-full px-4 py-2 rounded-full bg-red-600 text-white text-sm md:text-base font-semibold hover:bg-red-700 focus:outline-none focus:ring-2 focus:ring-red-400 focus:ring-offset-2 focus:ring-offset-black transition-all duration-300 flex items-center justify-center group"
        >
          <span>Join Waitlist</span>
          <Send
            className="ml-2 group-hover:translate-x-1 transition-transform duration-300"
            size={16}
          />
        </button>
      </form>
      {message && (
        <p className="text-center text-xs md:text-sm mt-3 md:mt-4 animate-fade-in text-white">
          {message}
        </p>
      )}
    </div>
  );
};

export default NewsletterSignup;
