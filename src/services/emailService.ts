// const API_URL =
//   "https://portfolio-backend-steel-six.vercel.app/contact";
const API_URL = "http://localhost:5000/contact";

export async function sendEmail(data: {
  name: string;
  email: string;
  subject: string;
  message: string;
}) {
  const response = await fetch(API_URL, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(data),
  });

  return response; // IMPORTANT: return response, not JSON
}