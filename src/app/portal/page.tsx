"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { soundManager } from "@/utils/audio";
import {
  Lock,
  Unlock,
  RefreshCw,
  Download,
  Mail,
  Copy,
  Check,
  ArrowUpRight,
  ArrowLeft,
  Calendar,
  LogOut,
  Inbox,
  KeyRound,
} from "lucide-react";

interface MessageItem {
  timestamp: string;
  name: string;
  email: string;
  message: string;
}

export default function PortalPage() {
  const [password, setPassword] = useState("");
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [authError, setAuthError] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [messages, setMessages] = useState<MessageItem[]>([]);
  const [copiedEmail, setCopiedEmail] = useState<string | null>(null);

  // Check sessionStorage on mount
  useEffect(() => {
    const saved = sessionStorage.getItem("vault_auth_token");
    if (saved === "Uttam@7781") {
      setPassword("Uttam@7781");
      fetchMessages("Uttam@7781");
    }
  }, []);

  const fetchMessages = async (pwd: string) => {
    setIsLoading(true);
    setAuthError("");

    try {
      const res = await fetch("/api/portal", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ password: pwd }),
      });

      const data = await res.json();

      if (res.ok && data.success) {
        setIsAuthenticated(true);
        setMessages(data.messages || []);
        sessionStorage.setItem("vault_auth_token", pwd);
        soundManager.playTick();
      } else {
        setAuthError(data.error || "Incorrect password.");
        soundManager.playClick();
      }
    } catch {
      setAuthError("Failed to connect to the server.");
    } finally {
      setIsLoading(false);
    }
  };

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    soundManager.playClick();
    if (!password) {
      setAuthError("Please enter your admin password.");
      return;
    }
    fetchMessages(password);
  };

  const handleLogout = () => {
    soundManager.playTick();
    sessionStorage.removeItem("vault_auth_token");
    setIsAuthenticated(false);
    setPassword("");
    setMessages([]);
  };

  const handleCopyEmail = (email: string) => {
    soundManager.playTick();
    navigator.clipboard.writeText(email);
    setCopiedEmail(email);
    setTimeout(() => setCopiedEmail(null), 2000);
  };

  const formatTimestamp = (isoString: string) => {
    try {
      const date = new Date(isoString);
      if (isNaN(date.getTime())) return isoString;
      return new Intl.DateTimeFormat("en-IN", {
        dateStyle: "medium",
        timeStyle: "short",
      }).format(date);
    } catch {
      return isoString;
    }
  };

  return (
    <div className="min-h-screen bg-[#E3EBD8] text-[#1E231B] selection:bg-[#BFDF64] selection:text-[#1E231B] paper-grain">
      <main className="mx-6 page-init">
        <div className="max-w-158 mx-auto pt-16 pb-28">
          {/* Top Navigation */}
          <div className="flex items-center justify-between pb-8 border-b border-[#20221F]/10">
            <Link
              href="/"
              onClick={() => soundManager.playClick()}
              className="inline-flex items-center gap-1.5 text-xs font-mono text-[#73756E] hover:text-[#20221F] transition-colors"
            >
              <ArrowLeft className="w-3.5 h-3.5" />
              <span>Back to site</span>
            </Link>

            <span className="font-mono text-xs text-[#73756E]">
              /portal
            </span>
          </div>

          {!isAuthenticated ? (
            /* Login View */
            <div className="pt-12 max-w-sm mx-auto space-y-6">
              <div className="text-center space-y-2">
                <div className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-[#20221F]/5 text-[#778A43] mb-1">
                  <KeyRound className="w-6 h-6" />
                </div>
                <h1 className="font-baskerville text-2xl font-bold text-[#20221F]">
                  Message Vault
                </h1>
                <p className="text-xs text-[#73756E] leading-relaxed">
                  Enter your admin credentials to view the messages submitted from the contact form.
                </p>
              </div>

              <form onSubmit={handleLogin} className="space-y-4 pt-2">
                <div className="space-y-1.5">
                  <label
                    htmlFor="pwd"
                    className="block text-[11px] font-mono text-[#73756E] uppercase tracking-wider"
                  >
                    Admin Password
                  </label>
                  <div className="relative">
                    <input
                      id="pwd"
                      type="password"
                      value={password}
                      onChange={(e) => {
                        setPassword(e.target.value);
                        setAuthError("");
                      }}
                      placeholder="Enter admin password"
                      autoFocus
                      className="w-full bg-[#20221F]/[0.025] hover:bg-[#20221F]/[0.04] focus:bg-white/50 border border-[#20221F]/15 focus:border-[#778A43] focus:outline-none rounded-lg px-3.5 py-2.5 text-sm font-mono text-[#20221F] placeholder:text-[#73756E]/50 transition-all"
                    />
                    <Lock className="w-4 h-4 text-[#73756E]/60 absolute right-3 top-3 pointer-events-none" />
                  </div>
                </div>

                {authError && (
                  <p className="text-xs font-mono text-[#B91C1C] bg-[#EF4444]/10 p-2.5 rounded-lg border border-[#EF4444]/20 animate-in fade-in duration-200">
                    {authError}
                  </p>
                )}

                <button
                  type="submit"
                  disabled={isLoading}
                  className="w-full inline-flex items-center justify-center gap-2 px-4 py-2.5 rounded-lg bg-[#20221F] text-[#E3EBD8] hover:bg-[#778A43] text-xs font-mono font-medium transition-all duration-200 cursor-pointer shadow-xs disabled:opacity-50"
                >
                  {isLoading ? (
                    <>
                      <span className="w-3.5 h-3.5 rounded-full border-2 border-[#E3EBD8] border-t-transparent animate-spin" />
                      <span>Unlocking Vault...</span>
                    </>
                  ) : (
                    <>
                      <Unlock className="w-3.5 h-3.5" />
                      <span>Unlock Vault</span>
                    </>
                  )}
                </button>
              </form>
            </div>
          ) : (
            /* Authenticated Inbox View */
            <div className="pt-8 space-y-6">
              {/* Header Info Bar */}
              <div className="flex flex-wrap items-center justify-between gap-3 pb-4 border-b border-[#20221F]/10">
                <div>
                  <h1 className="font-baskerville text-2xl font-bold text-[#20221F]">
                    Inbox Vault
                  </h1>
                  <p className="text-xs font-mono text-[#73756E] pt-0.5">
                    {messages.length} {messages.length === 1 ? "message" : "messages"} logged in data/messages.csv
                  </p>
                </div>

                {/* Top Action Controls */}
                <div className="flex items-center gap-2">
                  <button
                    type="button"
                    onClick={() => fetchMessages(password)}
                    disabled={isLoading}
                    className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-[#20221F]/5 hover:bg-[#20221F]/10 text-[#20221F] text-xs font-mono border border-[#20221F]/10 transition-colors"
                    title="Refresh inbox"
                  >
                    <RefreshCw
                      className={`w-3 h-3 ${isLoading ? "animate-spin" : ""}`}
                    />
                    <span className="hidden sm:inline">Refresh</span>
                  </button>

                  <a
                    href={`/api/portal?password=${encodeURIComponent(password)}`}
                    download="messages.csv"
                    onClick={() => soundManager.playClick()}
                    className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-[#20221F]/5 hover:bg-[#20221F]/10 text-[#20221F] text-xs font-mono border border-[#20221F]/10 transition-colors"
                    title="Download raw CSV"
                  >
                    <Download className="w-3 h-3" />
                    <span>CSV</span>
                  </a>

                  <button
                    type="button"
                    onClick={handleLogout}
                    className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-[#20221F]/5 hover:bg-[#B91C1C]/10 text-[#73756E] hover:text-[#B91C1C] text-xs font-mono border border-[#20221F]/10 transition-colors"
                    title="Exit and lock vault"
                  >
                    <LogOut className="w-3 h-3" />
                    <span className="hidden sm:inline">Lock</span>
                  </button>
                </div>
              </div>

              {/* Message List */}
              {messages.length === 0 ? (
                <div className="py-16 text-center space-y-3 rounded-2xl border border-dashed border-[#20221F]/20 bg-[#20221F]/[0.015]">
                  <div className="inline-flex items-center justify-center w-10 h-10 rounded-full bg-[#20221F]/5 text-[#73756E]">
                    <Inbox className="w-5 h-5" />
                  </div>
                  <h3 className="font-baskerville text-base font-medium text-[#20221F]">
                    The vault is clear
                  </h3>
                  <p className="text-xs text-[#73756E] max-w-xs mx-auto">
                    No messages in the CSV yet. When someone submits through the contact form, their message will show up here instantly.
                  </p>
                </div>
              ) : (
                <div className="space-y-4">
                  {messages.map((item, index) => (
                    <article
                      key={index}
                      className="rounded-xl border border-[#20221F]/15 bg-[#20221F]/[0.025] hover:bg-[#20221F]/[0.04] p-4 sm:p-5 transition-all duration-200 space-y-3"
                    >
                      {/* Sender and Timestamp Header */}
                      <div className="flex flex-wrap items-baseline justify-between gap-2 border-b border-[#20221F]/10 pb-2.5">
                        <div className="flex items-baseline gap-2">
                          <span className="font-serif font-bold text-base text-[#20221F]">
                            {item.name}
                          </span>
                        </div>

                        <div className="flex items-center gap-1 font-mono text-[11px] text-[#73756E]">
                          <Calendar className="w-3 h-3 opacity-60" />
                          <span>{formatTimestamp(item.timestamp)}</span>
                        </div>
                      </div>

                      {/* Message Content */}
                      <div className="text-sm font-sans text-[#20221F]/90 leading-relaxed whitespace-pre-wrap py-1">
                        {item.message}
                      </div>

                      {/* Footer Actions: Email, Copy & Direct Gmail Reply */}
                      <div className="pt-2 flex flex-wrap items-center justify-between gap-2 border-t border-[#20221F]/10 text-xs font-mono">
                        <div className="flex items-center gap-2">
                          <span className="text-[#73756E] truncate max-w-[200px] sm:max-w-none">
                            {item.email}
                          </span>
                          <button
                            type="button"
                            onClick={() => handleCopyEmail(item.email)}
                            className="p-1 rounded text-[#73756E] hover:text-[#20221F] hover:bg-[#20221F]/5 transition-colors"
                            title="Copy email"
                          >
                            {copiedEmail === item.email ? (
                              <Check className="w-3 h-3 text-[#059669]" />
                            ) : (
                              <Copy className="w-3 h-3" />
                            )}
                          </button>
                        </div>

                        {item.email && (
                          <a
                            href={`https://mail.google.com/mail/?view=cm&fs=1&to=${encodeURIComponent(
                              item.email
                            )}&su=${encodeURIComponent(
                              `Re: Message to Uttamraj Singh`
                            )}`}
                            target="_blank"
                            rel="noopener noreferrer"
                            onClick={() => soundManager.playClick()}
                            className="inline-flex items-center gap-1 text-[11px] px-2.5 py-1 rounded bg-[#20221F] text-[#E3EBD8] hover:bg-[#778A43] transition-colors"
                          >
                            <Mail className="w-3 h-3" />
                            <span>Reply in Gmail</span>
                            <ArrowUpRight className="w-3 h-3" />
                          </a>
                        )}
                      </div>
                    </article>
                  ))}
                </div>
              )}
            </div>
          )}
        </div>
      </main>
    </div>
  );
}

