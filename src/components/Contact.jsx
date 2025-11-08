import React, { useState, useRef, useEffect } from "react";

// Fade-in scroll effect
function useInView(threshold = 0.1) {
  const [isVisible, setIsVisible] = useState(false);
  const ref = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) setIsVisible(true);
      },
      { threshold }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, [threshold]);

  return [ref, isVisible];
}

export default function Contact() {
  const [ref, visible] = useInView(0.2);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });
  const [status, setStatus] = useState("");

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus("loading");

    if (
      !formData.name ||
      !formData.email ||
      !formData.phone ||
      !formData.message
    ) {
      setStatus("Please fill all fields");
      return;
    }

    // Email validation
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailPattern.test(formData.email)) {
      setStatus("Invalid email address");
      return;
    }

    try {
      const res = await fetch("https://vernanbackend.ezlab.in/api/contact-us/", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      if (res.ok) {
        setStatus("Form Submitted ✅");
        setFormData({ name: "", email: "", phone: "", message: "" });
      } else {
        setStatus("Submission failed. Try again later.");
      }
    } catch (error) {
      setStatus("Error: " + error.message);
    }
  };

  return (
    <section
      id="contact"
      ref={ref}
      className={`px-8 py-20 transition-all duration-700 ${
        visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
      } bg-gradient-to-br from-[#fff4e0] via-[#ffe6d0] to-[#fff9f5]`}
    >
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-start justify-between gap-12">
        {/* Left Text Section */}
        <div className="flex-1">
          <h2 className="text-3xl font-semibold text-gray-800 mb-4">
            Join the Story
          </h2>
          <p className="text-gray-600 mb-6 leading-relaxed">
            Reach out to discuss a project. We reply to every message and aim to
            respond within 48 hours.
          </p>
          <p className="text-gray-500 text-sm">
            Email:{" "}
            <a
              href="mailto:hello@framecraft.studio"
              className="text-orange-600 hover:underline"
            >
              hello@framecraft.studio
            </a>{" "}
            · Phone:{" "}
            <span className="text-orange-600 font-medium">
              +91 98765 43210
            </span>
          </p>
        </div>

        {/* Contact Form */}
        <div className="flex-1 bg-white p-8 rounded-xl shadow-lg hover:shadow-2xl transition-all duration-500">
          <form onSubmit={handleSubmit} className="space-y-5">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <label className="block text-sm text-gray-600 mb-1">Name</label>
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  className="w-full border border-gray-300 rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-orange-400"
                />
              </div>
              <div>
                <label className="block text-sm text-gray-600 mb-1">Email</label>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  className="w-full border border-gray-300 rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-orange-400"
                />
              </div>
            </div>
            <div>
              <label className="block text-sm text-gray-600 mb-1">Phone</label>
              <input
                type="text"
                name="phone"
                value={formData.phone}
                onChange={handleChange}
                className="w-full border border-gray-300 rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-orange-400"
              />
            </div>
            <div>
              <label className="block text-sm text-gray-600 mb-1">Message</label>
              <textarea
                name="message"
                rows="4"
                value={formData.message}
                onChange={handleChange}
                className="w-full border border-gray-300 rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-orange-400"
              ></textarea>
            </div>
            <div className="flex gap-4">
              <button
                type="submit"
                className="bg-orange-500 hover:bg-orange-600 text-white px-6 py-2 rounded-md shadow-md hover:shadow-lg transition-all duration-300"
              >
                Submit
              </button>
              <button
                type="reset"
                onClick={() =>
                  setFormData({ name: "", email: "", phone: "", message: "" })
                }
                className="border border-gray-300 hover:border-orange-400 text-gray-700 hover:text-orange-600 px-6 py-2 rounded-md transition-all duration-300"
              >
                Reset
              </button>
            </div>
            {status && (
              <p
                className={`text-sm pt-2 ${
                  status === "Form Submitted ✅"
                    ? "text-green-600"
                    : "text-red-500"
                }`}
              >
                {status}
              </p>
            )}
          </form>
        </div>
      </div>

      <footer className="text-center text-gray-500 text-sm mt-16">
        © 2025 FrameCraft Studios
      </footer>
    </section>
  );
}
