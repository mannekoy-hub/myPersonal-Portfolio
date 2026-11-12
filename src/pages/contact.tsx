import type { FormEvent } from "react";
import { FaEnvelope, FaFacebookF, FaMapMarkerAlt, FaPhone } from "react-icons/fa";
import { Header } from "../header/header";

const EMAIL = "sorrosamanuel9@gmail.com";

const inputClass =
  "box-border w-full rounded-lg border border-[rgba(143,156,240,0.28)] bg-[rgba(5,10,46,0.6)] " +
  "px-4 py-3 text-[1rem] text-[#f4f6ff] placeholder:text-[rgba(201,208,245,0.6)] " +
  "transition-colors duration-200 ease-in " +
  "focus:border-[#3b4fd8] focus:outline-none focus:ring-2 focus:ring-[rgba(59,79,216,0.5)]";

const iconWrapClass =
  "flex h-10 w-10 shrink-0 items-center justify-center rounded-full " +
  "border border-[rgba(143,156,240,0.28)] bg-[rgba(17,32,154,0.35)] text-[#8f9cf0]";

export function Contact() {
  // There is no backend, so the form opens the visitor's email app
  // with their name and message filled in instead of reloading the page.
  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    const name = String(data.get("name") ?? "").trim();
    const from = String(data.get("email") ?? "").trim();
    const message = String(data.get("message") ?? "").trim();

    const subject = encodeURIComponent(`Message from ${name}`);
    const body = encodeURIComponent(`${message}\n\n${name}\n${from}`);
    window.location.href = `mailto:${EMAIL}?subject=${subject}&body=${body}`;
  }

  return (
    <div
      className="relative min-h-screen box-border overflow-clip text-[#f4f6ff]
                 bg-[image:radial-gradient(ellipse_at_85%_10%,rgba(59,79,216,0.45),transparent_55%),linear-gradient(135deg,#050a2e_0%,#0a1245_55%,#11209a_100%)]
                 before:content-[''] before:absolute before:z-0 before:rounded-full before:pointer-events-none
                 before:w-[560px] before:h-[560px] before:-right-[180px] before:-bottom-[220px]
                 before:border before:border-[rgba(143,156,240,0.28)]
                 after:content-[''] after:absolute after:z-0 after:rounded-full after:pointer-events-none
                 after:w-[380px] after:h-[380px] after:-right-[90px] after:-bottom-[130px]
                 after:border after:border-[rgba(143,156,240,0.18)]"
    >
      <Header />

      <main
        className="relative z-[1] mx-auto box-border grid min-h-screen w-full max-w-[1100px] grid-cols-1
                   items-center gap-12 px-6 pt-[108px] pb-16 sm:px-10 lg:grid-cols-2 lg:gap-[60px]"
      >
        {/* ---------- Intro and contact details ---------- */}
        <section className="motion-reveal motion-reveal-left border-l-[3px] border-[#3b4fd8] pl-8 max-[700px]:border-l-0 max-[700px]:border-t-[3px] max-[700px]:pl-0 max-[700px]:pt-6">
          <h1 className="m-0 text-[clamp(2.2rem,5vw,3.6rem)] font-extrabold leading-[1.1] tracking-[0.02em] text-[#f4f6ff]">
            Let's talk
          </h1>
          <span
            className="mt-5 block h-[3px] w-[90px] rounded-[2px] bg-[image:linear-gradient(90deg,#f4f6ff,#3b4fd8)]"
            aria-hidden="true"
          ></span>

          <p className="m-0 mt-6 max-w-[520px] text-[1.1rem] leading-[1.7] text-[#c9d0f5]">
            Open to fullstack roles, website developing, or just talking about distributed
            databases over coffee.
          </p>

          <ul className="motion-stagger m-0 mt-8 flex list-none flex-col gap-4 p-0">
            <li className="motion-reveal motion-card flex items-center gap-4 rounded-xl p-2 text-[1rem] leading-[1.5] text-[#f4f6ff]">
              <span className={iconWrapClass}>
                <FaMapMarkerAlt aria-hidden="true" />
              </span>
              <span>Kidapawan City, Barrangay Perez, North Cotabato</span>
            </li>
            <li className="motion-reveal motion-card flex items-center gap-4 rounded-xl p-2 text-[1rem] leading-[1.5] text-[#f4f6ff]">
              <span className={iconWrapClass}>
                <FaEnvelope aria-hidden="true" />
              </span>
              <a
                href={`mailto:${EMAIL}`}
                className="break-all text-[#f4f6ff] no-underline transition-colors duration-200 ease-in hover:text-[#8f9cf0]"
              >
                {EMAIL}
              </a>
            </li>
            <li className="motion-reveal motion-card flex items-center gap-4 rounded-xl p-2 text-[1rem] leading-[1.5] text-[#f4f6ff]">
              <span className={iconWrapClass}>
                <FaPhone aria-hidden="true" />
              </span>
              <a
                href="tel:09983417328"
                className="text-[#f4f6ff] no-underline transition-colors duration-200 ease-in hover:text-[#8f9cf0]"
              >
                09983417328
              </a>
            </li>
            <li className="motion-reveal motion-card flex items-center gap-4 rounded-xl p-2 text-[1rem] leading-[1.5] text-[#f4f6ff]">
              <span className={iconWrapClass}>
                <FaFacebookF aria-hidden="true" />
              </span>
              <span>Manuel G Sorrosa</span>
            </li>
          </ul>
        </section>

        {/* ---------- Message form ---------- */}
        <form
          onSubmit={handleSubmit}
          className="motion-reveal motion-reveal-right motion-card relative flex flex-col gap-4 overflow-hidden rounded-2xl border border-[rgba(143,156,240,0.28)]
                     bg-[rgba(5,10,46,0.6)] p-6 shadow-[0_20px_40px_rgba(2,5,30,0.35)] backdrop-blur-[6px] sm:p-8"
        >
          <span
            className="pointer-events-none absolute -right-14 -top-14 h-32 w-32 rounded-full border-[8px] border-[rgba(143,156,240,0.28)]"
            aria-hidden="true"
          ></span>

          <input
            type="text"
            name="name"
            className={inputClass}
            placeholder="your name"
            aria-label="Your name"
            autoComplete="name"
            required
          />
          <input
            type="email"
            name="email"
            className={inputClass}
            placeholder="you@company.com"
            aria-label="Your email"
            autoComplete="email"
            required
          />
          <textarea
            name="message"
            className={`${inputClass} min-h-[160px] resize-y`}
            placeholder="your message"
            aria-label="Your message"
            required
          ></textarea>
          <button
            type="submit"
            className="cursor-pointer rounded-lg border border-[#8f9cf0] bg-[#3b4fd8] px-6 py-3 text-[1rem] font-semibold
                       tracking-[0.02em] text-[#f4f6ff] transition-colors duration-200 ease-in
                       hover:bg-[#11209a] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#f4f6ff]"
          >
            send message
          </button>
        </form>
      </main>
    </div>
  );
}