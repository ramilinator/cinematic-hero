"use client";

import { useState } from "react";
import { Mail } from "lucide-react";

export default function ContactForm() {
  const [isSending, setIsSending] = useState(false);

  return (
    <form
      action="https://formsubmit.co/9a0abf4171cf834a42cfd7f7be3a40ec"
      method="POST"
      onSubmit={() => setIsSending(true)}
      className="space-y-6"
    >
      <input
        type="hidden"
        name="_subject"
        value="New Portfolio Message — Ramil Aoanan"
      />

      <input type="hidden" name="_captcha" value="false" />

      <div className="grid gap-5 sm:grid-cols-2">
        <div className="space-y-2">
          <label
            htmlFor="contact-name"
            className="block text-[10px] font-bold uppercase tracking-[0.15em] text-white/60"
          >
            Your name <span className="text-[#F15A36]">*</span>
          </label>

          <input
            id="contact-name"
            name="name"
            type="text"
            placeholder="Your full name"
            autoComplete="name"
            required
            disabled={isSending}
            className="w-full rounded-sm border border-white/10 bg-[#191C1D] px-4 py-4 text-sm text-[#F5F0E7] outline-none transition-colors placeholder:text-white/25 focus:border-[#F15A36] disabled:opacity-60"
          />
        </div>

        <div className="space-y-2">
          <label
            htmlFor="contact-email"
            className="block text-[10px] font-bold uppercase tracking-[0.15em] text-white/60"
          >
            Email address <span className="text-[#F15A36]">*</span>
          </label>

          <input
            id="contact-email"
            name="email"
            type="email"
            placeholder="you@example.com"
            autoComplete="email"
            required
            disabled={isSending}
            className="w-full rounded-sm border border-white/10 bg-[#191C1D] px-4 py-4 text-sm text-[#F5F0E7] outline-none transition-colors placeholder:text-white/25 focus:border-[#F15A36] disabled:opacity-60"
          />
        </div>
      </div>

      <div className="space-y-2">
        <label
          htmlFor="contact-message"
          className="block text-[10px] font-bold uppercase tracking-[0.15em] text-white/60"
        >
          Tell me about it <span className="text-[#F15A36]">*</span>
        </label>

        <textarea
          id="contact-message"
          name="message"
          rows={5}
          placeholder="What are you looking to build?"
          required
          disabled={isSending}
          className="w-full resize-y rounded-sm border border-white/10 bg-[#191C1D] px-4 py-4 text-sm leading-7 text-[#F5F0E7] outline-none transition-colors placeholder:text-white/25 focus:border-[#F15A36] disabled:opacity-60"
        />
      </div>

      <div className="flex flex-col items-start gap-4 sm:flex-row sm:items-start sm:justify-start">
        <button
          type="submit"
          disabled={isSending}
          className="inline-flex items-center gap-3 whitespace-nowrap rounded-sm bg-[#F15A36] px-5 py-4 text-[10px] font-bold uppercase tracking-[0.13em] text-[#121516] transition-colors hover:bg-[#F5F0E7]"
        >
          <Mail size={15} className="shrink-0" />
          {isSending ? "Sending message..." : "Send a message"}
        </button>

        <p className="text-[10px] uppercase tracking-[0.12em] text-white/35">
          Typically happy to discuss new projects
        </p>
      </div>
    </form>
  );
}
