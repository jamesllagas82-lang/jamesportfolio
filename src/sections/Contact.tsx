import { useState } from "react";
import Loader from "../components/ui/Loader";
import FadeInSection from "../components/ui/FadeInSection";
import { sendEmail } from "../services/emailService";
import { validateContactForm } from "../utils/contactValidation";

export default function Contact() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const [errors, setErrors] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const [loading, setLoading] = useState(false);
  const [showConfirm, setShowConfirm] = useState(false);
  const [successModal, setSuccessModal] = useState(false);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;

    setForm((prev) => ({
      ...prev,
      [name]: value,
    }));

    setErrors((prev) => ({
      ...prev,
      [name]: "",
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    const validationErrors = validateContactForm(form);
    setErrors(validationErrors);

    const hasError = Object.values(validationErrors).some(
      (v) => v !== ""
    );

    if (hasError) return;

    setShowConfirm(true);
  };

  const submitForm = async () => {
    setLoading(true);

    try {
      const response = await sendEmail(form);
      const data = await response.json();

      if (response.ok) {
        setSuccessModal(true); // ✅ SHOW SUCCESS MODAL

        setForm({
          name: "",
          email: "",
          subject: "",
          message: "",
        });

        setTimeout(() => {
          setSuccessModal(false);
        }, 2500);
      } else {
        alert(data.message || "Failed to send message.");
      }
    } catch (error) {
      console.error(error);
      alert("Unable to connect to server.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <FadeInSection direction="down">
      <section id="contact" className="max-w-3xl mx-auto py-20 px-6">

        <h2 className="text-3xl font-bold mb-6">
          Contact Me
        </h2>

        <form onSubmit={handleSubmit} className="flex flex-col gap-4">

          {/* NAME */}
          <div>
            <input
              name="name"
              placeholder="Your Name"
              value={form.name}
              onChange={handleChange}
              className="border p-3 rounded-lg w-full"
            />
            {errors.name && (
              <p className="text-red-500 text-sm">
                {errors.name}
              </p>
            )}
          </div>

          {/* EMAIL */}
          <div>
            <input
              name="email"
              placeholder="Your Email"
              value={form.email}
              onChange={handleChange}
              className="border p-3 rounded-lg w-full"
            />
            {errors.email && (
              <p className="text-red-500 text-sm">
                {errors.email}
              </p>
            )}
          </div>

          {/* SUBJECT */}
          <div>
            <input
              name="subject"
              placeholder="Subject"
              value={form.subject}
              onChange={handleChange}
              className="border p-3 rounded-lg w-full"
            />
            {errors.subject && (
              <p className="text-red-500 text-sm">
                {errors.subject}
              </p>
            )}
          </div>

          {/* MESSAGE */}
          <div>
            <textarea
              name="message"
              rows={5}
              placeholder="Message"
              value={form.message}
              onChange={handleChange}
              className="border p-3 rounded-lg w-full"
            />
            {errors.message && (
              <p className="text-red-500 text-sm">
                {errors.message}
              </p>
            )}
          </div>

          {/* BUTTON */}
          <button
            type="submit"
            disabled={loading}
            className="bg-pink-600 text-white py-3 rounded-lg flex justify-center items-center gap-2"
          >
            {loading ? <Loader /> : "Send Message"}
          </button>
        </form>

        {/* CONFIRM MODAL */}
        {showConfirm && (
          <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50">
            <div className="bg-white p-6 rounded-lg w-96">

              <h3 className="text-lg font-bold">
                Confirm Send?
              </h3>

              <div className="mt-4 text-sm text-gray-600 space-y-1">
                <p>{form.name}</p>
                <p>{form.email}</p>
                <p>{form.subject}</p>
              </div>

              <div className="flex justify-end gap-2 mt-6">

                <button
                  onClick={() => setShowConfirm(false)}
                  className="px-4 py-2 border rounded-lg"
                >
                  Cancel
                </button>

                <button
                  onClick={async () => {
                    setShowConfirm(false);
                    await submitForm();
                  }}
                  className="bg-pink-600 text-white px-4 py-2 rounded"
                >
                  Send
                </button>

              </div>
            </div>
          </div>
        )}

        {/* 🎉 SUCCESS MODAL (ANIMATED) */}
        {successModal && (
          <div className="fixed inset-0 bg-black/40 flex items-center justify-center z-50">

            <div className="bg-white rounded-2xl shadow-2xl p-8 w-[90%] max-w-sm text-center animate-pop">

              {/* ICON */}
              <div className="flex justify-center mb-4">
                <div className="w-16 h-16 rounded-full bg-pink-100 flex items-center justify-center animate-bounce">
                  <svg
                    className="w-8 h-8 text-pink-600"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth={3}
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M5 13l4 4L19 7"
                    />
                  </svg>
                </div>
              </div>

              {/* TEXT */}
              <h2 className="text-xl font-bold text-gray-800">
                Message Sent!
              </h2>

              <p className="text-gray-500 mt-2">
                I’ll get back to you soon 🚀
              </p>

            </div>
          </div>
        )}

      </section>
    </FadeInSection>
  );
}