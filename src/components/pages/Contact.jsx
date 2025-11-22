import React, { useState } from "react";
import { IoIosSend } from "react-icons/io";

const Contact = () => {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    subject: "",
    message: ""
  });
  const [status, setStatus] = useState("");
  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async () => {
    // Validate fields
    if (!formData.firstName || !formData.lastName || !formData.email || !formData.subject || !formData.message) {
      setStatus("validation");
      return;
    }

    setLoading(true);
    setStatus("");

    // EmailJS configuration
    const serviceId = "service_uzgvi1a";
    const templateId = "template_4952x0o";
    const publicKey = "g3kkCWDzUpSwZ-YZV";

    const templateParams = {
      from_name: `${formData.firstName} ${formData.lastName}`,
      from_email: formData.email,
      subject: formData.subject,
      message: formData.message
    };

    try {
      const response = await fetch("https://api.emailjs.com/api/v1.0/email/send", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          service_id: serviceId,
          template_id: templateId,
          user_id: publicKey,
          template_params: templateParams
        })
      });

      if (response.ok) {
        setStatus("success");
        setFormData({
          firstName: "",
          lastName: "",
          email: "",
          subject: "",
          message: ""
        });
      } else {
        setStatus("error");
      }
    } catch (error) {
      console.error("Error:", error);
      setStatus("error");
    } finally {
      setLoading(false);
    }
  };

  const handleKeyPress = (e) => {
    if (e.key === 'Enter' && !e.shiftKey && e.target.tagName !== 'TEXTAREA') {
      e.preventDefault();
      handleSubmit();
    }
  };

  return (
    <div className="">
      <div className="flex justify-start items-center gap-x-2">
        <div className="w-4.5 h-7.5 bg-amber-400 rounded"></div>
        <h3 className="text-3xl font-semibold">Contact</h3>
      </div>
      
      <div className="container mx-auto mt-5">
        <div className="map-container mx-auto max-w-full h-96 mb-6">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d211456.91668941753!2d90.25487531119137!3d23.78106723705999!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3755b8b087026b81%3A0x8fa563bbdd5904c2!2sDhaka!5e1!3m2!1sen!2sbd!4v1760815826584!5m2!1sen!2sbd"
            className="w-full h-full border-0 rounded-xl"
            allowFullScreen=""
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          ></iframe>
        </div>
        <p className="text-center text-lg">
          Feel free to visit us at our location in Dhaka!
        </p>
      </div>

      <div className="container mx-auto max-w-full mt-5 mb-15 lg:mb-0">
        <h2 className="text-2xl font-semibold mb-6">Contact Form</h2>
        
        {status === "success" && (
          <div className="mb-4 p-4 bg-green-100 text-green-800 rounded-lg">
            Message sent successfully! We'll get back to you soon.
          </div>
        )}
        
        {status === "error" && (
          <div className="mb-4 p-4 bg-red-100 text-red-800 rounded-lg">
            Failed to send message. Please try again.
          </div>
        )}

        {status === "validation" && (
          <div className="mb-4 p-4 bg-yellow-100 text-yellow-800 rounded-lg">
            Please fill in all fields before sending.
          </div>
        )}

        <div className="space-y-4" onKeyPress={handleKeyPress}>
          <div className="flex space-x-4">
            <input
              type="text"
              name="firstName"
              value={formData.firstName}
              onChange={handleChange}
              placeholder="First Name"
              className="w-1/2 p-3 rounded-lg border-1 border-neutral-600 focus:ring-0 focus:outline-none"
            />
            <input
              type="text"
              name="lastName"
              value={formData.lastName}
              onChange={handleChange}
              placeholder="Last Name"
              className="w-1/2 p-3 rounded-lg border-1 border-neutral-600 focus:ring-0 focus:outline-none"
            />
          </div>
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            placeholder="Email address"
            className="w-full p-3 rounded-lg border-1 border-neutral-600 focus:ring-0 focus:outline-none"
          />
          <input
            type="text"
            name="subject"
            value={formData.subject}
            onChange={handleChange}
            placeholder="Subject"
            className="w-full p-3 rounded-lg border-1 border-neutral-600 focus:ring-0 focus:outline-none"
          />
          <textarea
            name="message"
            value={formData.message}
            onChange={handleChange}
            placeholder="Your Message"
            className="w-full p-3 h-32 rounded-lg border-1 border-neutral-600 focus:ring-0 focus:outline-none resize-none"
          />
          <div className="flex justify-end items-center">
            <button
              type="button"
              onClick={handleSubmit}
              disabled={loading}
              className="w-[170px] lg:w-[170px] px-2 py-3 border-2 border-neutral-600 shadow-xs shadow-neutral-600 text-white font-medium rounded-lg flex items-center justify-center space-x-2 transition-colors hover:bg-neutral-700 disabled:opacity-50 disabled:cursor-not-allowed"
            >
              <IoIosSend />
              <span>{loading ? "Sending..." : "Send Message"}</span>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;