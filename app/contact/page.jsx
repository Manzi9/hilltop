"use client";

import { useState } from "react";
import Image from "next/image";
import { MapPin, Phone, Mail, Clock, Send } from "lucide-react";

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // In a real application, you would send this to your API
    console.log("Form submitted:", formData);
    setSubmitted(true);

    // Reset form after submission
    setFormData({
      name: "",
      email: "",
      subject: "",
      message: "",
    });

    // Reset the submitted state after 3 seconds
    setTimeout(() => {
      setSubmitted(false);
    }, 3000);
  };

  return (
    <div className="pt-24 pb-16">
      {/* Hero Section */}
      <div className="relative h-64 w-full mb-12">
        <Image
          src="https://picsum.photos/id/1060/1920/600"
          alt="Contact Hilltop Coffee"
          fill
          className="object-cover"
        />
        <div className="absolute inset-0 bg-black/60 flex items-center justify-center">
          <h1 className="text-4xl font-bold text-white">CONTACT US</h1>
        </div>
      </div>

      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Contact Information */}
          <div>
            <h2 className="text-2xl font-bold mb-6">GET IN TOUCH</h2>
            <p className="text-gray-600 mb-8">
              We'd love to hear from you! Whether you have a question about our
              products, want to book an event, or just want to say hello, we're
              here to help.
            </p>

            <div className="space-y-6">
              <div className="flex items-start">
                <div className="bg-black text-white p-3 rounded-full mr-4">
                  <MapPin size={20} />
                </div>
                <div>
                  <h3 className="font-bold mb-1">Address</h3>
                  <p className="text-gray-600">
                    71 Shelton Street, Covent Garden, London, WC2H 9JQ
                  </p>
                </div>
              </div>

              <div className="flex items-start">
                <div className="bg-black text-white p-3 rounded-full mr-4">
                  <Phone size={20} />
                </div>
                <div>
                  <h3 className="font-bold mb-1">Phone</h3>
                  <p className="text-gray-600">+44 208 949 3389</p>
                </div>
              </div>

              <div className="flex items-start">
                <div className="bg-black text-white p-3 rounded-full mr-4">
                  <Mail size={20} />
                </div>
                <div>
                  <h3 className="font-bold mb-1">Email</h3>
                  <p className="text-gray-600">info@hilltop.coffee</p>
                </div>
              </div>

              <div className="flex items-start">
                <div className="bg-black text-white p-3 rounded-full mr-4">
                  <Clock size={20} />
                </div>
                <div>
                  <h3 className="font-bold mb-1">Hours</h3>
                  <p className="text-gray-600">Monday - Friday: 7am - 7pm</p>
                  <p className="text-gray-600">Saturday: 8am - 8pm</p>
                  <p className="text-gray-600">Sunday: 8am - 6pm</p>
                </div>
              </div>
            </div>

            {/* Map Placeholder */}
            <div className="mt-8 relative h-64 w-full rounded-lg overflow-hidden">
              <Image
                src="https://picsum.photos/id/1048/800/400"
                alt="Map location"
                fill
                className="object-cover"
              />
              <div className="absolute inset-0 flex items-center justify-center bg-black/30">
                <p className="text-white font-bold">Map Location</p>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div>
            <h2 className="text-2xl font-bold mb-6">SEND US A MESSAGE</h2>

            {submitted ? (
              <div className="bg-green-100 border border-green-400 text-green-700 px-4 py-3 rounded mb-6">
                <p>Thank you for your message! We'll get back to you soon.</p>
              </div>
            ) : null}

            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label htmlFor="name" className="block mb-2 font-medium">
                  Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 border border-gray-300 focus:outline-none focus:ring-2 focus:ring-black"
                />
              </div>

              <div>
                <label htmlFor="email" className="block mb-2 font-medium">
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 border border-gray-300 focus:outline-none focus:ring-2 focus:ring-black"
                />
              </div>

              <div>
                <label htmlFor="subject" className="block mb-2 font-medium">
                  Subject
                </label>
                <input
                  type="text"
                  id="subject"
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 border border-gray-300 focus:outline-none focus:ring-2 focus:ring-black"
                />
              </div>

              <div>
                <label htmlFor="message" className="block mb-2 font-medium">
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows="5"
                  className="w-full px-4 py-3 border border-gray-300 focus:outline-none focus:ring-2 focus:ring-black"
                ></textarea>
              </div>

              <button
                type="submit"
                className="bg-black text-white px-6 py-3 flex items-center justify-center hover:bg-gray-800 transition-colors"
              >
                <Send size={18} className="mr-2" />
                Send Message
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}
