"use client";
import React, { useState } from "react";

import Outbrain from "@/components/ads/outbrain";


interface FormData {
  name: string;
  email: string;
  message: string;
}

interface Errors {
  name: string;
  email: string;
  message: string;
}

const Contact: React.FC = () => {
  const [formData, setFormData] = useState<FormData>({
    name: "",
    email: "",
    message: "",
  });

  const [errors, setErrors] = useState<Errors>({
    name: "",
    email: "",
    message: "",
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;

    setFormData((prev) => ({ ...prev, [name]: value }));

    let errorMsg = "";
    if (name === "name" || name === "message") {
      if (/\d/.test(value)) {
        errorMsg = "Must not contain numbers";
      }
    }
    if (name === "email") {
      if (!/^\S+@\S+\.\S+$/.test(value)) {
        errorMsg = "Enter a valid email";
      }
    }

    setErrors((prev) => ({ ...prev, [name]: errorMsg }));
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (!formData.name || !formData.email || !formData.message) {
      alert("All fields are required!");
      return;
    }

    if (errors.name || errors.email || errors.message) {
      alert("Please fix the errors before submitting.");
      return;
    }

    alert("Submitted Successfully!");
    setFormData({ name: "", email: "", message: "" });
  };

  return (
    <>
      <div className="bg-gray-50 text-gray-800 min-h-screen">
        {/* Header */}
        <header className="bg-gray-900 text-white py-10 text-center">
          <h1 className="text-4xl mt-14 font-bold">Contact Nexus News</h1>
          <p className="text-md mt-2 text-gray-300">
            Reach out with questions, feedback, or just to say hello — we’d love to hear from you.
          </p>
        </header>

         <aside className="max-w-7xl mt-30 mx-auto">
        <div className="OUTBRAIN outbrain-desktop" data-widget-id="AR_2"></div>
        <div className="OUTBRAIN outbrain-mobile" data-widget-id="CRMB_2"></div>
      </aside>

      

        {/* Main Content */}
        <main className="max-w-5xl mx-auto px-4 py-12 grid md:grid-cols-2 gap-10">
          {/* Contact Form */}
          <section className="bg-white p-6 rounded-lg shadow-md">
            <h2 className="text-2xl font-semibold mb-4">Send Us a Message</h2>
            <form onSubmit={handleSubmit}>
              <div className="mb-4">
                <label htmlFor="name" className="block text-gray-700 mb-1">Name</label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  className="w-full p-2 border rounded-lg"
                  placeholder="Your Name"
                  value={formData.name}
                  onChange={handleChange}
                />
                {errors.name && <p className="text-red-500 text-sm mt-1">{errors.name}</p>}
              </div>

              <div className="mb-4">
                <label htmlFor="email" className="block text-gray-700 mb-1">Email</label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  className="w-full p-2 border rounded-lg"
                  placeholder="Your Email"
                  value={formData.email}
                  onChange={handleChange}
                />
                {errors.email && <p className="text-red-500 text-sm mt-1">{errors.email}</p>}
              </div>

              <div className="mb-4">
                <label htmlFor="message" className="block text-gray-700 mb-1">Message</label>
                <textarea
                  id="message"
                  name="message"
                  className="w-full p-2 border rounded-lg"
                  placeholder="Your Message"
                  value={formData.message}
                  onChange={handleChange}
                />
                {errors.message && <p className="text-red-500 text-sm mt-1">{errors.message}</p>}
              </div>

              <button
                type="submit"
                className="bg-blue-600 hover:cursor-pointer hover:bg-blue-700 text-white px-4 py-2 rounded-lg"
              >
                Submit
              </button>
            </form>
          </section>

          {/* Contact Info */}
          <section className="bg-white p-6 rounded-lg shadow-md">
            <h2 className="text-2xl font-semibold mb-4">Contact Information</h2>
            <p className="text-gray-700 mb-2">
              <strong>Address:</strong> New York, Carmel, 10512
            </p>
            <p className="text-gray-700 mb-2">
              <strong>Email:</strong> support@nexusnews.com
            </p>
          </section>
        </main>
      </div>

 <aside className="max-w-7xl mt-30 mx-auto">
        <div className="OUTBRAIN outbrain-desktop" data-widget-id="AR_1"></div>
        <div className="OUTBRAIN outbrain-mobile" data-widget-id="CRMB_1"></div>
      </aside>

      <Outbrain />
     
    </>
  );
};

export default Contact;
