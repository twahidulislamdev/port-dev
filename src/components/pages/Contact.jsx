import React, { useState } from "react";
import { IoIosSend } from "react-icons/io";
import { FiMapPin, FiMail, FiUser, FiMessageSquare } from "react-icons/fi";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [status, setStatus] = useState("");
  const [loading, setLoading] = useState(false);
  const [focusedField, setFocusedField] = useState("");

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async () => {
    if (!formData.name || !formData.email || !formData.message) {
      setStatus("validation");
      setTimeout(() => setStatus(""), 4000);
      return;
    }

    setLoading(true);
    setStatus("");

    const serviceId = "service_aonq8e9";
    const templateId = "template_uguun54";
    const publicKey = "g3kkCWDzUpSwZ-YZV";

    const templateParams = {
      name: formData.name,
      email: formData.email,
      message: formData.message,
    };

    try {
      const response = await fetch(
        "https://api.emailjs.com/api/v1.0/email/send",
        {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({
            service_id: serviceId,
            template_id: templateId,
            user_id: publicKey,
            template_params: templateParams,
          }),
        }
      );

      if (response.ok) {
        setStatus("success");
        setFormData({ name: "", email: "", message: "" });
        setTimeout(() => setStatus(""), 5000);
      } else {
        setStatus("error");
        setTimeout(() => setStatus(""), 5000);
      }
    } catch (error) {
      console.error("EmailJS Error:", error);
      setStatus("error");
      setTimeout(() => setStatus(""), 5000);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-neutral-950 via-neutral-900 to-neutral-950 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto">
        {/* Header Section */}
        <div className="text-center mb-12">
          <div className="inline-flex items-center gap-3 mb-4">
            <div className="w-1 h-8 bg-amber-400 rounded-full"></div>
            <h1 className="text-5xl font-bold tracking-tight bg-gradient-to-r from-white via-neutral-200 to-neutral-400 bg-clip-text text-transparent">
              Get In Touch
            </h1>
            <div className="w-1 h-8 bg-amber-400 rounded-full"></div>
          </div>
          <p className="text-neutral-400 text-lg max-w-2xl mx-auto">
            Have a question or want to work together? Drop us a message and
            we'll get back to you soon.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-8">
          {/* Map Section */}
          <div className="space-y-6">
            <div className="bg-neutral-900/50 backdrop-blur-sm rounded-2xl overflow-hidden border border-neutral-800/50 shadow-2xl hover:shadow-amber-500/10 transition-all duration-500 group">
              <div className="relative h-100">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d211456.91668941753!2d90.25487531119137!3d23.78106723705999!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3755b8b087026b81%3A0x8fa563bbdd5904c2!2sDhaka!5e1!3m2!1sen!2sbd!4v1760815826584!5m2!1sen!2sbd"
                  className="w-full h-full border-0 grayscale hover:grayscale-0 transition-all duration-500"
                  loading="lazy"
                ></iframe>
                <div className="absolute inset-0 bg-gradient-to-t from-neutral-900/80 to-transparent pointer-events-none"></div>
              </div>
              <div className="p-6 bg-gradient-to-br from-neutral-900 to-neutral-900/50">
                <div className="flex items-start gap-4">
                  <div className="p-3 bg-amber-500/10 rounded-xl border border-amber-500/20 group-hover:bg-amber-500/20 transition-all">
                    <FiMapPin className="text-amber-400 text-xl" />
                  </div>
                  <div>
                    <h3 className="text-white font-semibold text-lg mb-1">
                      Our Location
                    </h3>
                    <p className="text-neutral-400 leading-relaxed">
                      Visit us in the heart of Dhaka, Bangladesh. We'd love to
                      meet you in person!
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Contact Form Section */}
          <div className="bg-neutral-900/50 backdrop-blur-sm rounded-2xl p-8 border border-neutral-800/50 shadow-2xl hover:shadow-amber-500/10 transition-all duration-500">
            <h2 className="text-2xl font-bold text-white mb-6 flex items-center gap-3">
              <div className="w-1.5 h-6 bg-amber-400 rounded-full"></div>
              Send us a Message
            </h2>

            {/* Status Alerts */}
            {status === "success" && (
              <div className="mb-6 p-4 bg-gradient-to-r from-green-500/10 to-emerald-500/10 text-green-400 rounded-xl border border-green-500/20 shadow-lg animate-in fade-in slide-in-from-top-2 duration-300">
                <div className="flex items-center gap-2">
                  <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></div>
                  <span className="font-medium">
                    Message sent successfully!
                  </span>
                </div>
              </div>
            )}

            {status === "error" && (
              <div className="mb-6 p-4 bg-gradient-to-r from-red-500/10 to-rose-500/10 text-red-400 rounded-xl border border-red-500/20 shadow-lg animate-in fade-in slide-in-from-top-2 duration-300">
                <div className="flex items-center gap-2">
                  <div className="w-2 h-2 bg-red-400 rounded-full animate-pulse"></div>
                  <span className="font-medium">
                    Failed to send. Please try again.
                  </span>
                </div>
              </div>
            )}

            {status === "validation" && (
              <div className="mb-6 p-4 bg-gradient-to-r from-yellow-500/10 to-amber-500/10 text-yellow-400 rounded-xl border border-yellow-500/20 shadow-lg animate-in fade-in slide-in-from-top-2 duration-300">
                <div className="flex items-center gap-2">
                  <div className="w-2 h-2 bg-yellow-400 rounded-full animate-pulse"></div>
                  <span className="font-medium">
                    Please fill in all fields.
                  </span>
                </div>
              </div>
            )}

            <div className="space-y-6">
              {/* Name Field */}
              <div className="relative group">
                <div className="absolute left-4 top-1/2 -translate-y-1/2 text-neutral-500 group-focus-within:text-amber-400 transition-colors">
                  <FiUser size={20} />
                </div>
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  onFocus={() => setFocusedField("name")}
                  onBlur={() => setFocusedField("")}
                  placeholder="Your Name"
                  className="w-full pl-12 pr-4 py-4 rounded-xl bg-neutral-800/50 border border-neutral-700/50 text-white placeholder:text-neutral-500 focus:border-amber-400/50 focus:bg-neutral-800 focus:ring-2 focus:ring-amber-400/20 transition-all outline-none"
                />
              </div>

              {/* Email Field */}
              <div className="relative group">
                <div className="absolute left-4 top-1/2 -translate-y-1/2 text-neutral-500 group-focus-within:text-amber-400 transition-colors">
                  <FiMail size={20} />
                </div>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  onFocus={() => setFocusedField("email")}
                  onBlur={() => setFocusedField("")}
                  placeholder="Your Email Address"
                  className="w-full pl-12 pr-4 py-4 rounded-xl bg-neutral-800/50 border border-neutral-700/50 text-white placeholder:text-neutral-500 focus:border-amber-400/50 focus:bg-neutral-800 focus:ring-2 focus:ring-amber-400/20 transition-all outline-none"
                />
              </div>

              {/* Message Field */}
              <div className="relative group">
                <div className="absolute left-4 top-4 text-neutral-500 group-focus-within:text-amber-400 transition-colors">
                  <FiMessageSquare size={20} />
                </div>
                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  onFocus={() => setFocusedField("message")}
                  onBlur={() => setFocusedField("")}
                  placeholder="Your Message..."
                  className="w-full pl-12 pr-4 py-4 h-40 rounded-xl bg-neutral-800/50 border border-neutral-700/50 text-white placeholder:text-neutral-500 resize-none focus:border-amber-400/50 focus:bg-neutral-800 focus:ring-2 focus:ring-amber-400/20 transition-all outline-none"
                />
              </div>

              {/* Submit Button */}
              <button
                onClick={handleSubmit}
                disabled={loading}
                className="w-full py-4 px-6 bg-amber-400 hover:bg-amber-500 text-neutral-900 font-semibold rounded-xl flex items-center justify-center gap-3 shadow-lg shadow-amber-400/25 hover:shadow-amber-400/40 active:scale-[0.98] transition-all disabled:opacity-50 disabled:cursor-not-allowed disabled:hover:scale-100 group hover: cursor-pointer"
              >
                {loading ? (
                  <>
                    <div className="w-5 h-5 border-2 border-neutral-900/30 border-t-neutral-900 rounded-full animate-spin"></div>
                    <span>Sending...</span>
                  </>
                ) : (
                  <>
                    <span>Send Message</span>
                    <IoIosSend
                      size={22}
                      className="group-hover:translate-x-1 transition-transform"
                    />
                  </>
                )}
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
