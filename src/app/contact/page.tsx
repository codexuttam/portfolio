"use client";

import React, { useState, useEffect } from "react";
import { BottomDock } from "@/components/bottom-dock";
import { CommandPalette } from "@/components/command-palette";
import { soundManager } from "@/utils/audio";
import { HeartHover } from "@/components/heart-hover";
import { RopeUnderline } from "@/components/rope-underline";
import {
  Mail,
  Phone,
  Copy,
  Check,
  Send,
  ArrowUpRight,
} from "lucide-react";
import { LinkedinIcon, GithubIcon, XIcon } from "@/components/icons";

export default function ContactPage() {
  const [commandPaletteOpen, setCommandPaletteOpen] = useState(false);
  const [copiedField, setCopiedField] = useState<string | null>(null);

  // Form states
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [formStatus, setFormStatus] = useState<"idle" | "success" | "error">(
    "idle"
  );
  const [errorMessage, setErrorMessage] = useState("");

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if ((e.metaKey || e.ctrlKey) && e.key.toLowerCase() === "k") {
        e.preventDefault();
        setCommandPaletteOpen((prev) => !prev);
      }
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, []);

  const handleCopy = (text: string, fieldName: string) => {
    soundManager.playTick();
    navigator.clipboard.writeText(text);
    setCopiedField(fieldName);
    setTimeout(() => setCopiedField(null), 2000);
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    soundManager.playClick();
    setFormStatus("idle");
    setErrorMessage("");

    // Client validation
    if (!formData.name.trim()) {
      setErrorMessage("Please drop your name.");
      setFormStatus("error");
      return;
    }

    if (!formData.email.trim() || !formData.email.includes("@")) {
      setErrorMessage("Please enter a valid email address.");
      setFormStatus("error");
      return;
    }

    if (!formData.message.trim()) {
      setErrorMessage("Please leave a short message.");
      setFormStatus("error");
      return;
    }

    setIsSubmitting(true);

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      const data = await res.json();

      if (res.ok && data.success) {
        soundManager.playTick();
        setFormStatus("success");
        setFormData({ name: "", email: "", message: "" });
      } else {
        setFormStatus("error");
        setErrorMessage(data.error || "Something went wrong. Please try again.");
      }
    } catch {
      setFormStatus("error");
      setErrorMessage("Network error. Please try again or reach out directly.");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="min-h-screen bg-[#E3EBD8] text-[#1E231B] selection:bg-[#BFDF64] selection:text-[#1E231B]">
      <main className="mx-6 page-init">
        <div className="max-w-158 mx-auto">
          <div className="pt-20 pb-32">
            <div className="space-y-8 profile-page">
              {/* Header Title */}
              <div className="text-base font-semibold hover-blur">
                <p>Contact</p>
              </div>

              {/* Gen Z Hero Vibe Message */}
              <div className="space-y-4 font-medium leading-6.5 text-sm text-[#20221F]/80 hover-blur">
                <p className="font-serif text-2xl sm:text-3xl text-[#20221F] font-normal tracking-tight">
                  Say less,{" "}
                  <span className="font-baskerville italic text-[#4338CA] bg-[#4F46E5]/10 px-2 py-0.5 rounded shadow-[0_0_12px_rgba(99,102,241,0.18)]">
                    let&apos;s cook
                  </span>{" "}
                  something wild.
                </p>

                <p>
                  No cold corporate fluff, no stiff LinkedIn networking scripts.
                  Whether you&apos;re looking to architect an autonomous AI agent,
                  scale{" "}
                  <RopeUnderline color="#778A43">
                    distributed systems
                  </RopeUnderline>
                  , build zero-to-one products, or simply banter about latency,
                  token budgets, and system design, my inbox has zero spam filters
                  for great energy.
                </p>

                <p className="text-xs text-[#73756E]">
                  Drop a message below or hit my socials directly. I reply faster
                  than local LLM inference.
                </p>
              </div>

              {/* Direct Reachout Channels */}
              <div className="space-y-3 pt-2 hover-blur">
                <p className="text-xs font-mono uppercase tracking-wider text-[#73756E]">
                  Direct Channels
                </p>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  {/* Email Card */}
                  <div className="group rounded-xl border border-[#20221F]/15 bg-[#20221F]/[0.025] hover:bg-[#20221F]/[0.04] p-3.5 transition-all duration-200 flex flex-col justify-between gap-3">
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-2">
                        <span className="p-1.5 rounded-lg bg-[#20221F]/5 text-[#778A43]">
                          <Mail className="w-3.5 h-3.5" />
                        </span>
                        <span className="text-[11px] font-mono uppercase text-[#73756E]">
                          Email &bull; Gmail
                        </span>
                      </div>
                      <button
                        type="button"
                        onClick={() =>
                          handleCopy(
                            "uttamrajsingh423@gmail.com",
                            "email"
                          )
                        }
                        className="text-[11px] font-mono text-[#73756E] hover:text-[#20221F] flex items-center gap-1 transition-colors px-1.5 py-0.5 rounded hover:bg-[#20221F]/5 cursor-pointer"
                        title="Copy email to clipboard"
                      >
                        {copiedField === "email" ? (
                          <>
                            <Check className="w-3 h-3 text-[#059669]" />
                            <span className="text-[#059669]">Copied</span>
                          </>
                        ) : (
                          <>
                            <Copy className="w-3 h-3" />
                            <span>Copy</span>
                          </>
                        )}
                      </button>
                    </div>

                    <a
                      href="https://mail.google.com/mail/?view=cm&fs=1&to=uttamrajsingh423@gmail.com"
                      target="_blank"
                      rel="noopener noreferrer"
                      onClick={() => soundManager.playClick()}
                      className="text-xs sm:text-sm font-mono text-[#20221F] hover:text-[#778A43] truncate transition-colors flex items-center gap-1"
                      title="Compose in Gmail"
                    >
                      <span>uttamrajsingh423@gmail.com</span>
                      <ArrowUpRight className="w-3.5 h-3.5 opacity-60 group-hover:opacity-100 shrink-0" />
                    </a>
                  </div>

                  {/* Phone / WhatsApp Card */}
                  <div className="group rounded-xl border border-[#20221F]/15 bg-[#20221F]/[0.025] hover:bg-[#20221F]/[0.04] p-3.5 transition-all duration-200 flex flex-col justify-between gap-3">
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-2">
                        <span className="p-1.5 rounded-lg bg-[#20221F]/5 text-[#778A43]">
                          <Phone className="w-3.5 h-3.5" />
                        </span>
                        <span className="text-[11px] font-mono uppercase text-[#73756E]">
                          Phone &bull; WhatsApp
                        </span>
                      </div>
                      <button
                        type="button"
                        onClick={() => handleCopy("8318768905", "phone")}
                        className="text-[11px] font-mono text-[#73756E] hover:text-[#20221F] flex items-center gap-1 transition-colors px-1.5 py-0.5 rounded hover:bg-[#20221F]/5"
                        title="Copy phone number to clipboard"
                      >
                        {copiedField === "phone" ? (
                          <>
                            <Check className="w-3 h-3 text-[#059669]" />
                            <span className="text-[#059669]">Copied</span>
                          </>
                        ) : (
                          <>
                            <Copy className="w-3 h-3" />
                            <span>Copy</span>
                          </>
                        )}
                      </button>
                    </div>

                    <div className="flex items-center justify-between gap-2">
                      <a
                        href="tel:+918318768905"
                        onClick={() => soundManager.playClick()}
                        className="text-xs sm:text-sm font-mono text-[#20221F] hover:text-[#778A43] transition-colors"
                      >
                        +91 8318768905
                      </a>
                      <a
                        href="https://wa.me/918318768905"
                        target="_blank"
                        rel="noopener noreferrer"
                        onClick={() => soundManager.playClick()}
                        className="text-[11px] font-mono text-[#059669] hover:underline flex items-center gap-0.5"
                      >
                        <span>WhatsApp</span>
                        <ArrowUpRight className="w-3 h-3" />
                      </a>
                    </div>
                  </div>
                </div>

                {/* LinkedIn & Socials Row */}
                <div className="pt-2 flex flex-wrap items-center justify-between gap-3 p-3.5 rounded-xl border border-[#20221F]/15 bg-[#20221F]/[0.025]">
                  <div className="flex items-center gap-2">
                    <span className="p-1 rounded bg-[#20221F]/5 text-[#0A66C2]">
                      <LinkedinIcon className="w-4 h-4 fill-current" />
                    </span>
                    <div>
                      <span className="block text-[10px] font-mono uppercase text-[#73756E]">
                        Professional Network
                      </span>
                      <HeartHover>
                        <a
                          href="https://www.linkedin.com/in/uttamraj-singh-054593259/"
                          target="_blank"
                          rel="noopener noreferrer"
                          onClick={() => soundManager.playClick()}
                          className="text-xs font-mono font-medium text-[#20221F] hover:text-[#0A66C2] transition-colors inline-flex items-center gap-1"
                        >
                          <span>linkedin.com/in/uttamraj-singh</span>
                          <ArrowUpRight className="w-3 h-3" />
                        </a>
                      </HeartHover>
                    </div>
                  </div>

                  <div className="flex items-center gap-4 text-xs font-mono text-[#73756E]">
                    <HeartHover>
                      <a
                        href="https://github.com/codexuttam"
                        target="_blank"
                        rel="noopener noreferrer"
                        onClick={() => soundManager.playClick()}
                        className="hover:text-[#20221F] transition-colors inline-flex items-center gap-1"
                      >
                        <GithubIcon className="w-3.5 h-3.5 fill-current" />
                        <span>GitHub</span>
                      </a>
                    </HeartHover>
                    <span>&bull;</span>
                    <HeartHover>
                      <a
                        href="https://x.com/codexuttam"
                        target="_blank"
                        rel="noopener noreferrer"
                        onClick={() => soundManager.playClick()}
                        className="hover:text-[#20221F] transition-colors inline-flex items-center gap-1"
                      >
                        <XIcon className="w-3 h-3" />
                        <span>X (Twitter)</span>
                      </a>
                    </HeartHover>
                  </div>
                </div>
              </div>

              {/* Minimalist Message Form */}
              <div className="pt-4 space-y-4 hover-blur">
                <div className="border-b border-[#20221F]/10 pb-2">
                  <p className="text-xs font-mono uppercase tracking-wider text-[#73756E]">
                    Drop a Message
                  </p>
                </div>

                <form onSubmit={handleSubmit} className="space-y-4 pt-1">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    {/* Name Input */}
                    <div className="space-y-1">
                      <label
                        htmlFor="name"
                        className="block text-[11px] font-mono text-[#73756E]"
                      >
                        Your Name
                      </label>
                      <input
                        id="name"
                        type="text"
                        value={formData.name}
                        onChange={(e) =>
                          setFormData({ ...formData, name: e.target.value })
                        }
                        placeholder="e.g. Alex Chen"
                        className="w-full bg-[#20221F]/[0.025] hover:bg-[#20221F]/[0.04] focus:bg-white/40 border border-[#20221F]/15 focus:border-[#778A43] focus:outline-none rounded-lg px-3 py-2 text-xs sm:text-sm text-[#20221F] placeholder:text-[#73756E]/50 transition-all font-sans"
                        disabled={isSubmitting}
                      />
                    </div>

                    {/* Email Input */}
                    <div className="space-y-1">
                      <label
                        htmlFor="email"
                        className="block text-[11px] font-mono text-[#73756E]"
                      >
                        Your Email
                      </label>
                      <input
                        id="email"
                        type="email"
                        value={formData.email}
                        onChange={(e) =>
                          setFormData({ ...formData, email: e.target.value })
                        }
                        placeholder="alex@domain.xyz"
                        className="w-full bg-[#20221F]/[0.025] hover:bg-[#20221F]/[0.04] focus:bg-white/40 border border-[#20221F]/15 focus:border-[#778A43] focus:outline-none rounded-lg px-3 py-2 text-xs sm:text-sm text-[#20221F] placeholder:text-[#73756E]/50 transition-all font-sans"
                        disabled={isSubmitting}
                      />
                    </div>
                  </div>

                  {/* Message Input */}
                  <div className="space-y-1">
                    <label
                      htmlFor="message"
                      className="block text-[11px] font-mono text-[#73756E]"
                    >
                      Short Message
                    </label>
                    <textarea
                      id="message"
                      rows={3}
                      value={formData.message}
                      onChange={(e) =>
                        setFormData({ ...formData, message: e.target.value })
                      }
                      placeholder="What are we building or discussing?"
                      className="w-full bg-[#20221F]/[0.025] hover:bg-[#20221F]/[0.04] focus:bg-white/40 border border-[#20221F]/15 focus:border-[#778A43] focus:outline-none rounded-lg px-3 py-2 text-xs sm:text-sm text-[#20221F] placeholder:text-[#73756E]/50 transition-all font-sans resize-none"
                      disabled={isSubmitting}
                    />
                  </div>

                  {/* Feedback Alerts */}
                  {formStatus === "error" && errorMessage && (
                    <div className="p-2.5 rounded-lg border border-[#EF4444]/25 bg-[#EF4444]/10 text-xs font-mono text-[#B91C1C] animate-in fade-in duration-200">
                      {errorMessage}
                    </div>
                  )}

                  {formStatus === "success" && (
                    <div className="p-3 rounded-lg border border-[#059669]/25 bg-[#059669]/10 text-xs font-mono text-[#047857] animate-in fade-in duration-200 flex items-center gap-2">
                      <Check className="w-4 h-4 shrink-0 text-[#059669]" />
                      <span>
                        Message sent. Appreciate you reaching out!
                      </span>
                    </div>
                  )}

                  {/* Submit Button */}
                  <div className="flex items-center justify-end pt-1">
                    <button
                      type="submit"
                      disabled={isSubmitting}
                      className="inline-flex items-center gap-2 px-4 py-2 rounded-lg bg-[#20221F] text-[#E3EBD8] hover:bg-[#778A43] text-xs font-mono font-medium transition-all duration-200 active:scale-[0.98] disabled:opacity-50 cursor-pointer shadow-xs"
                    >
                      {isSubmitting ? (
                        <>
                          <span className="w-3 h-3 rounded-full border-2 border-[#E3EBD8] border-t-transparent animate-spin" />
                          <span>Sending...</span>
                        </>
                      ) : (
                        <>
                          <span>Transmit Message</span>
                          <Send className="w-3 h-3" />
                        </>
                      )}
                    </button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </main>

      <BottomDock onOpenCommandPalette={() => setCommandPaletteOpen(true)} />
      <CommandPalette
        isOpen={commandPaletteOpen}
        onClose={() => setCommandPaletteOpen(false)}
      />
    </div>
  );
}
