"use client";
import React, { useState } from "react";

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
        setMessage("Thanks for subscribing to our newsletter!");
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
    <form
      onSubmit={handleSubmit}
      className="bg-white/10 p-6 rounded-lg shadow-lg animate-fade-in"
    >
      <h2 className="text-2xl font-bold mb-4 text-center">Stay Updated</h2>
      <div className="space-y-4">
        <input
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
          placeholder="Your Name"
          required
          className="w-full px-4 py-2 rounded bg-white/20 text-white placeholder-white/50 border border-white/30 focus:outline-none focus:border-white focus:bg-white/30 transition-colors duration-300"
        />
        <input
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="Your Email"
          required
          className="w-full px-4 py-2 rounded bg-white/20 text-white placeholder-white/50 border border-white/30 focus:outline-none focus:border-white focus:bg-white/30 transition-colors duration-300"
        />
        <button
          type="submit"
          className="w-full px-4 py-2 rounded bg-red-600 text-white font-semibold hover:bg-red-700 transition-colors duration-300"
        >
          Subscribe to Newsletter
        </button>
      </div>
      {message && (
        <p className="text-center text-sm mt-4 animate-fade-in">{message}</p>
      )}
    </form>
  );
};

export default NewsletterSignup;
