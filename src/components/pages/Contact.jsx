import React, { useState } from "react";
import { IoIosSend } from "react-icons/io";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [status, setStatus] = useState("");
  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async () => {
    if (!formData.name || !formData.email || !formData.message) {
      setStatus("validation");
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
      } else {
        setStatus("error");
      }
    } catch (error) {
      console.error("EmailJS Error:", error);
      setStatus("error");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="pb-20">
      {/* Header */}
      <div className="flex justify-start items-center gap-x-3 mb-6">
        <div className="w-4.5 h-7.5 bg-amber-400 rounded"></div>
        <h3 className="text-3xl font-semibold tracking-wide">Contact</h3>
      </div>

      {/* Map */}
      <div className="container mx-auto mt-8">
        <div className="map-container mx-auto max-w-full h-96 mb-8 rounded-xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d211456.91668941753!2d90.25487531119137!3d23.78106723705999!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3755b8b087026b81%3A0x8fa563bbdd5904c2!2sDhaka!5e1!3m2!1sen!2sbd!4v1760815826584!5m2!1sen!2sbd"
            className="w-full h-full border-0"
            loading="lazy"
          ></iframe>
        </div>
        <p className="text-center text-lg text-neutral-300 tracking-wide">
          Feel free to visit us at our location in Dhaka!
        </p>
      </div>

      {/* Contact Form */}
      <div className="container mx-auto max-w-full mt-12">
        <h2 className="text-2xl font-semibold mb-6 tracking-wide">
          Contact Form
        </h2>

        {/* Alerts */}
        {status === "success" && (
          <div className="mb-5 p-4 bg-green-100 text-green-800 rounded-lg shadow-sm border border-green-300">
            Message sent successfully!
          </div>
        )}

        {status === "error" && (
          <div className="mb-5 p-4 bg-red-100 text-red-800 rounded-lg shadow-sm border border-red-300">
            Failed to send message. Try again.
          </div>
        )}

        {status === "validation" && (
          <div className="mb-5 p-4 bg-yellow-100 text-yellow-800 rounded-lg shadow-sm border border-yellow-300">
            Please fill all fields.
          </div>
        )}

        <div className="space-y-5">
          {/* Name */}
          <input
            type="text"
            name="name"
            value={formData.name}
            onChange={handleChange}
            placeholder="Enter your Name"
            className="w-full p-3 rounded-lg bg-neutral-900 border border-neutral-700 text-white focus:border-amber-400 transition-all shadow-inner"
          />

          {/* Email */}
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            placeholder="Email Address"
            className="w-full p-3 rounded-lg bg-neutral-900 border border-neutral-700 text-white focus:border-amber-400 transition-all shadow-inner"
          />

          {/* Message */}
          <textarea
            name="message"
            value={formData.message}
            onChange={handleChange}
            placeholder="Type your message..."
            className="w-full p-3 h-32 rounded-lg bg-neutral-900 border border-neutral-700 text-white resize-none focus:border-amber-400 transition-all shadow-inner"
          />

          {/* Submit Button */}
          <div className="flex justify-end">
            <button
              onClick={handleSubmit}
              disabled={loading}
              className="w-[180px] px-3 py-3 border-2 border-neutral-700 shadow-md text-white font-medium rounded-lg flex items-center justify-center gap-2 hover:bg-neutral-800 hover:border-neutral-500 active:scale-95 transition-all disabled:opacity-50"
            >
              <IoIosSend size={20} />
              {loading ? "Sending..." : "Send Message"}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
