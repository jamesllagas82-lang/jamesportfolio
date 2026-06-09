export interface ContactForm {
  name: string;
  email: string;
  subject: string;
  message: string;
}

export interface ContactErrors {
  name: string;
  email: string;
  subject: string;
  message: string;
}

export const validateContactForm = (
  form: ContactForm
): ContactErrors => {
  const errors: ContactErrors = {
    name: "",
    email: "",
    subject: "",
    message: "",
  };

  if (!form.name.trim()) {
    errors.name = "Please enter your full name.";
  }

  if (!form.email.trim()) {
    errors.email = "Please enter your email address.";
  } else if (
    !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(form.email)
  ) {
    errors.email = "Please enter a valid email address.";
  }

  if (!form.subject.trim()) {
    errors.subject = "Please enter a subject.";
  }

  if (!form.message.trim()) {
    errors.message = "Please enter your message.";
  } else if (form.message.trim().length < 10) {
    errors.message =
      "Message must be at least 10 characters.";
  }

  return errors;
};