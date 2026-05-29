import { useState } from "react";
import { motion } from "framer-motion";

const Contact = () => {
  const [form, setForm] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [status, setStatus] = useState("");

  const handleChange = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await fetch(
      `${import.meta.env.VITE_BACKEND_URL}/send`,
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(form),
      }
    );

      const data = await response.json();

      if (data.success) {
        setStatus("Message Sent Successfully");

        setForm({
          name: "",
          email: "",
          message: "",
        });
      } else {
        setStatus("Failed To Send Message");
      }
    } catch (error) {
      setStatus("Server Error ❌");
    }
  };

  return (
    <section
      id="contact"
      className="py-20 px-6 bg-[#0f172a] text-white"
    >
      <motion.div
        initial={{ opacity: 0, y: 80 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7 }}
        className="max-w-3xl mx-auto"
      >
        <h2 className="text-4xl font-bold text-center mb-12 text-cyan-400">
          Hire Me
        </h2>

        <form
          onSubmit={handleSubmit}
          className="space-y-6"
        >
          <input
            type="text"
            name="name"
            placeholder="Your Name"
            value={form.name}
            onChange={handleChange}
            required
            className="w-full p-4 rounded-lg bg-slate-800 border border-cyan-500 outline-none"
          />

          <input
            type="email"
            name="email"
            placeholder="Your Email"
            value={form.email}
            onChange={handleChange}
            required
            className="w-full p-4 rounded-lg bg-slate-800 border border-cyan-500 outline-none"
          />

          <textarea
            rows="6"
            name="message"
            placeholder="Your Message"
            value={form.message}
            onChange={handleChange}
            required
            className="w-full p-4 rounded-lg bg-slate-800 border border-cyan-500 outline-none"
          />

          <button
            type="submit"
            className="bg-cyan-500 hover:bg-cyan-600 px-8 py-3 rounded-full font-semibold transition"
          >
            Send Message
          </button>

          {status && (
            <p className="text-lg mt-4">
              {status}
            </p>
          )}
        </form>
      </motion.div>
    </section>
  );
};

export default Contact;
