import React, { useState } from "react";

const Contact = () => {
  const [form, setForm] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleChange = (e) =>
    setForm({ ...form, [e.target.name]: e.target.value });

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Submitted form data:", form);
    // You can replace this with actual API logic
    alert("Thank you for reaching out!");
    setForm({ name: "", email: "", message: "" });
  };

  return (
    <div className="min-h-screen bg-white dark:bg-gray-900 py-16 px-4 sm:px-8 lg:px-16">
      <div className="max-w-3xl mx-auto">
        <h1 className="text-4xl font-bold text-center text-gray-900 dark:text-white mb-8">
          Contact Us
        </h1>
        <p className="text-center text-gray-600 dark:text-gray-300 mb-12">
          Got questions, feedback, or ideas? We'd love to hear from you.
        </p>

        <form
          onSubmit={handleSubmit}
          className="bg-gray-100 dark:bg-gray-800 p-8 rounded-2xl shadow-md space-y-6"
        >
          <div>
            <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
              Your Name
            </label>
            <input
              type="text"
              name="name"
              value={form.name}
              onChange={handleChange}
              required
              className="w-full px-4 py-2 border rounded-lg bg-white dark:bg-gray-900 border-gray-300 dark:border-gray-700 text-gray-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-indigo-500"
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
              Email Address
            </label>
            <input
              type="email"
              name="email"
              value={form.email}
              onChange={handleChange}
              required
              className="w-full px-4 py-2 border rounded-lg bg-white dark:bg-gray-900 border-gray-300 dark:border-gray-700 text-gray-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-indigo-500"
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
              Your Message
            </label>
            <textarea
              name="message"
              rows={5}
              value={form.message}
              onChange={handleChange}
              required
              className="w-full px-4 py-2 border rounded-lg bg-white dark:bg-gray-900 border-gray-300 dark:border-gray-700 text-gray-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-indigo-500"
            ></textarea>
          </div>

          <div className="text-center">
            <button
              type="submit"
              className="bg-indigo-600 hover:bg-indigo-700 text-white font-semibold px-6 py-2 rounded-lg transition duration-300"
            >
              Send Message
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Contact;
