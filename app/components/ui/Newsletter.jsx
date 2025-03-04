"use client";

import { useState } from "react";
import { Send } from "lucide-react";

export default function Newsletter() {
  const [email, setEmail] = useState("");
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    // In a real application, you would send this to your API
    console.log("Email submitted:", email);
    setSubmitted(true);
    setEmail("");

    // Reset the submitted state after 3 seconds
    setTimeout(() => {
      setSubmitted(false);
    }, 3000);
  };

  return (
    <section className="py-16 bg-gray-100">
      <div className="container mx-auto px-4 max-w-3xl text-center">
        <h2 className="text-3xl font-bold mb-4">STAY UPDATED</h2>
        <p className="text-gray-600 mb-8">
          Subscribe to our newsletter for updates on new coffee arrivals,
          special offers, and upcoming events.
        </p>

        <form
          onSubmit={handleSubmit}
          className="flex flex-col sm:flex-row gap-4 max-w-lg mx-auto"
        >
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Your email address"
            required
            className="flex-grow px-4 py-3 border border-gray-300 focus:outline-none focus:ring-2 focus:ring-black"
          />
          <button
            type="submit"
            className="bg-black text-white px-6 py-3 flex items-center justify-center hover:bg-gray-800 transition-colors"
          >
            <Send size={18} className="mr-2" />
            Subscribe
          </button>
        </form>

        {submitted && (
          <p className="mt-4 text-green-600 font-medium">
            Thank you for subscribing!
          </p>
        )}
      </div>
    </section>
  );
}
