import { Send, Loader2 } from "lucide-react";
import useContactForm from "../hooks/useContactForm";
import { contactDetails } from "../constants/contactData";
import type { ContactInfo } from "../types";
import type { SubmitEventHandler } from "react";

const InfoItem = ({ icon: Icon, label, value }: ContactInfo) => (
  <div className="flex items-center gap-5 mb-8 group cursor-default">
    <div
      className="rounded-2xl bg-white/5 p-4 border border-white/5
      group-hover:border-pink-500/30 group-hover:bg-pink-500/10 transition-all duration-300"
    >
      <Icon
        size={24}
        className="text-pink-400 group-hover:scale-110 transition-transform"
      />
    </div>
    <div className="flex flex-col">
      <span
        className="text-[10px] uppercase tracking-widest text-slate-500 font-mono
      mb-1"
      >
        {label}
      </span>
      <span
        className="text-white font-medium group-hover:text-pink-300
      transition-colors"
      >
        {value}
      </span>
    </div>
  </div>
);

const Contact = () => {
  const { sendEmail, status } = useContactForm();

  const handleSubmit: SubmitEventHandler<HTMLFormElement> = (e) => {
    e.preventDefault();
    const form = e.currentTarget;
    sendEmail(form);
  };
  return (
    <section id="contact" className="w-full bg-[#050505] py-32 px-6">
      <div className="section-container ">
        <div className="mb-20 text-center md:text-left">
          <h2 className="text-pink-500 font-medium tracking-widest uppercase mb-2">
            04. Get In Touch
          </h2>
          <h3 className="text-4xl md:text-6xl font-bold text-white mb-6">
            Let's Connect
          </h3>
          <div className="h-0.5 w-32 bg-brand-gradient mx-auto md:mx-0"></div>
        </div>

        <div className="flex flex-col md:flex-row gap-16 mt-10">
          <div className="space-y-8">
            <p className="mb-8 text-gray-400">
              Feel free to reach out to discuss your projects or explore
              collaboration opportunities.
            </p>
            <div className="mt-10">
              {contactDetails.map((info) => (
                <InfoItem key={info.label} {...info} />
              ))}
            </div>
          </div>

          <div className="w-full md:w-1/2">
            <form onSubmit={handleSubmit} className="flex flex-col gap-4">
              <label
                htmlFor="name"
                className="block text-sm/6 font-medium text-white"
              >
                Name
              </label>
              <input
                id="name"
                name="name"
                type="text"
                placeholder="Name"
                className="w-full px-4 py-3  dark:bg-black/50 border-2 border-gray-400 dark:border-pink-500/30 rounded-lg text-gray-200 dark:text-white focus:outline-none focus:border-pink-500 transition-colors"
              />
              <label
                htmlFor="email"
                className="block text-white dark:text-gray-300 mb-2 font-medium"
              >
                Email
              </label>
              <input
                id="email"
                name="email"
                type="email"
                placeholder="Email"
                className="w-full px-4 py-3  dark:bg-black/50 border-2 border-gray-400 dark:border-pink-500/30 rounded-lg text-gray-200 dark:text-white focus:outline-none focus:border-pink-500 transition-colors"
              />

              <label
                htmlFor="message"
                className="block text-sm/6 font-medium text-white"
              >
                Message
              </label>
              <textarea
                placeholder="Message"
                id="message"
                name="message"
                className="w-full px-4 py-3  dark:bg-black/50 border-2 border-gray-400 dark:border-pink-500/30 rounded-lg text-gray-200 dark:text-white focus:outline-none focus:border-pink-500 transition-colors"
              ></textarea>
              <button
                type="submit"
                className="flex justify-center items-center gap-2 px-6 py-3 bg-pink-500 text-white rounded-lg hover:bg-pink-600 transition-colors"
              >
                {status === "loading" ? (
                  <>
                    <Loader2 className="animate-spin" />
                    <span>Sending...</span>
                  </>
                ) : (
                  <>
                    <span>Send Message</span>
                    <Send size={18} style={{ marginLeft: "8px" }} />
                  </>
                )}
              </button>
              {status === "success" && (
                <p className="text-green-400">Message sent successfully! 🚀</p>
              )}

              {status === "error" && (
                <p className="text-red-400">
                  Something went wrong. Please try again. ❌
                </p>
              )}
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
