import { useState } from "react";

export default function Contact() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const [loading, setLoading] = useState(false);
  const [showConfirm, setShowConfirm] = useState(false);

  const [status, setStatus] = useState<{
    type: "success" | "error" | "";
    message: string;
  }>({
    type: "",
    message: "",
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });

    if (status.message) {
      setStatus({ type: "", message: "" });
    }
  };

  const submitForm = async () => {
    setLoading(true);
    setStatus({ type: "", message: "" });

    try {
      const response = await fetch("https://portfolio-backend-steel-six.vercel.app/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(form),
      });

      const data = await response.json();

      if (response.ok) {
        setStatus({
          type: "success",
          message: "Message sent successfully!",
        });

        setForm({
          name: "",
          email: "",
          subject: "",
          message: "",
        });
      } else {
        setStatus({
          type: "error",
          message: data.message || "Failed to send message.",
        });
      }
    } catch (error) {
      setStatus({
        type: "error",
        message: "Unable to connect to server.",
      });
    } finally {
      setLoading(false);
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setShowConfirm(true);
  };

  return (
    <section id="contact" className="max-w-3xl mx-auto py-20 px-6">
      <h2 className="text-3xl font-bold mb-2">Contact Me</h2>

      <p className="text-gray-600 mb-8">
        Have a project or opportunity? Send me a message.
      </p>

      <form onSubmit={handleSubmit} className="flex flex-col gap-4">

        {/* INPUTS */}
        <input
          type="text"
          name="name"
          placeholder="Your Full Name"
          value={form.name}
          onChange={handleChange}
          className="border p-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-pink-500"
          required
        />

        <input
          type="email"
          name="email"
          placeholder="Your Email Address"
          value={form.email}
          onChange={handleChange}
          className="border p-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-pink-500"
          required
        />

        <input
          type="text"
          name="subject"
          placeholder="Subject"
          value={form.subject}
          onChange={handleChange}
          className="border p-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-pink-500"
          required
        />

        <textarea
          name="message"
          placeholder="Write your message..."
          rows={6}
          value={form.message}
          onChange={handleChange}
          className="border p-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-pink-500"
          required
        />

        {/* STATUS */}
        {status.message && (
          <div
            className={`p-4 rounded-lg text-sm ${
              status.type === "success"
                ? "bg-pink-50 text-pink-700 border border-pink-200"
                : "bg-red-100 text-red-700 border border-red-300"
            }`}
          >
            {status.message}
          </div>
        )}

        {/* SUBMIT BUTTON */}
        <button
          type="submit"
          disabled={loading}
          className={`py-3 rounded-lg text-white font-medium transition flex items-center justify-center gap-2 ${
            loading
              ? "bg-gray-400 cursor-not-allowed"
              : "bg-pink-600 hover:bg-pink-700"
          }`}
        >
          {loading ? (
            <>
              <span className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin"></span>
              Sending...
            </>
          ) : (
            "Send Message"
          )}
        </button>
      </form>

      {/* CONFIRM MODAL */}
      {showConfirm && (
        <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50">
          <div className="bg-white rounded-xl p-6 shadow-xl w-[90%] max-w-md">

            <h3 className="text-xl font-bold mb-2">
              Confirm Message
            </h3>

            <p className="text-gray-600 mb-6">
              Are you sure you want to send this message?
            </p>

            <div className="bg-gray-100 p-3 rounded-lg text-sm mb-6">
              <p><strong>Name:</strong> {form.name}</p>
              <p><strong>Email:</strong> {form.email}</p>
              <p><strong>Subject:</strong> {form.subject}</p>
            </div>

            <div className="flex justify-end gap-3">

              <button
                type="button"
                onClick={() => setShowConfirm(false)}
                className="px-4 py-2 border rounded-lg hover:bg-gray-100"
              >
                Cancel
              </button>

              <button
                type="button"
                onClick={async () => {
                  setShowConfirm(false);
                  await submitForm();
                }}
                className="px-4 py-2 bg-pink-600 text-white rounded-lg hover:bg-pink-700"
              >
                Yes, Send
              </button>

            </div>
          </div>
        </div>
      )}
    </section>
  );
}