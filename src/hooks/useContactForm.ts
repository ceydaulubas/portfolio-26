import { useState } from "react";
import emailjs from "@emailjs/browser";

const useContactForm = () => {
  const [status, setStatus] = useState<
    "idle" | "loading" | "success" | "error"
  >("idle");

  const sendEmail = async (form: HTMLFormElement) => {
    setStatus("loading");

    const serviceId = import.meta.env.VITE_YOUR_SERVICE_ID;
    const templateId = import.meta.env.VITE_YOUR_TEMPLATE_ID;
    const publicKey = import.meta.env.VITE_YOUR_PUBLIC_KEY;

    try {
      await emailjs.sendForm(serviceId, templateId, form, publicKey);
      setStatus("success");
      form.reset();
    } catch (error) {
      setStatus("error");
      console.error("Email sending error:", error);
      setStatus("error");
    } finally {
      setTimeout(() => setStatus("idle"), 3000);
    }
  };

  return { sendEmail, status };
};
export default useContactForm;
