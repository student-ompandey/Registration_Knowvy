"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { CheckCircle2, AlertCircle, Loader2, QrCode, Smartphone, Copy, Check, Gift } from "lucide-react";
import { Button } from "@/components/ui/button";

const GOOGLE_SCRIPT_URL = "https://script.google.com/macros/s/AKfycbyfhH9FZFCXfOgqfewF6aA4mLUmGLWbvHYnWlOxFvmKWvyUeFqa78seOC-SFwp1Bvqp/exec";

export function RegistrationSection() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    college: "",
    branch: "",
    year: "",
    txnid: "",
    referredBy: "",
  });

  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");
  const [errorMessage, setErrorMessage] = useState("");
  const [regId, setRegId] = useState("");
  const [qrError, setQrError] = useState(false);
  const [copied, setCopied] = useState(false);
  const [copyMessage, setCopyMessage] = useState("");
  const [copiedRef, setCopiedRef] = useState(false);
  const [copyRefMessage, setCopyRefMessage] = useState("");

  const upiId = "omdwivedi478-3@okhdfcbank";

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleCopyReferral = async () => {
    try {
      await navigator.clipboard.writeText(formData.phone);
      setCopiedRef(true);
      setCopyRefMessage("Referral code copied successfully");
      setTimeout(() => {
        setCopiedRef(false);
        setCopyRefMessage("");
      }, 2000);
    } catch (error) {
      console.error("Copy failed:", error);
      setCopyRefMessage("Failed to copy referral code.");
      setTimeout(() => setCopyRefMessage(""), 3000);
    }
  };

  const handleCopyUPI = async () => {
    try {
      await navigator.clipboard.writeText(upiId);
      setCopied(true);
      setCopyMessage("UPI ID copied successfully!");
      setTimeout(() => {
        setCopied(false);
        setCopyMessage("");
      }, 2000);
    } catch (error) {
      console.error("Copy failed:", error);
      setCopyMessage("Failed to copy UPI ID. Please copy manually.");
      setTimeout(() => setCopyMessage(""), 3000);
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus("loading");
    setErrorMessage("");

    // Strict UTR validation before proceeding
    const utrRegex = /^[0-9]{12}$/;
    if (!utrRegex.test(formData.txnid)) {
      setStatus("error");
      setErrorMessage("Strict Protocol Error: A valid 12-digit UTR Transaction ID is strictly required to verify payment. Registration cannot proceed without it.");
      return;
    }

    if (formData.referredBy && !/^[0-9]{10}$/.test(formData.referredBy)) {
      setStatus("error");
      setErrorMessage("Invalid Referral Code: If entered, the referral code must be a valid 10-digit mobile number.");
      return;
    }

    // Generate unique readable Registration ID
    const chars = '23456789ABCDEFGHJKLMNPQRSTUVWXYZ';
    let randomPart = '';
    for (let i = 0; i < 6; i++) {
      randomPart += chars.charAt(Math.floor(Math.random() * chars.length));
    }
    const generatedRegId = `MB26-${randomPart}`;

    const payload = {
      regid: generatedRegId,
      ...formData,
    };

    try {
      console.log("Submitting to:", GOOGLE_SCRIPT_URL);
      console.log("Payload:", payload);

      const response = await fetch(GOOGLE_SCRIPT_URL, {
        method: "POST",
        // Do NOT use application/json here, it triggers a CORS preflight request that GAS blocks!
        // Sending a string body automatically defaults to text/plain, which avoids the preflight.
        body: JSON.stringify({
          regid: payload.regid,
          name: payload.name,
          email: payload.email,
          phone: payload.phone,
          college: payload.college,
          branch: payload.branch,
          year: payload.year,
          txnid: payload.txnid,
          referredBy: payload.referredBy
        })
      });

      console.log("Response:", response);

      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }

      setRegId(generatedRegId);
      setStatus("success");
    } catch (error) {
      console.error("Submission error:", error);
      setStatus("error");
      setErrorMessage("Failed to submit registration. Please try again or contact support.");
    }
  };

  if (status === "success") {
    return (
      <section id="register" className="py-24 relative bg-background border-t border-dashed border-primary/20">
        <div className="container mx-auto px-6 md:px-12 max-w-2xl text-center">
          <motion.div
            initial={{ opacity: 0, scale: 0.9, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            transition={{ type: "spring", stiffness: 100, damping: 20 }}
            className="bg-black/80 backdrop-blur-2xl border border-green-500/40 p-6 md:p-12 rounded-2xl shadow-[0_0_60px_rgba(34,197,94,0.15)] relative overflow-hidden group"
          >
            {/* Holographic scanning background line */}
            <div className="absolute inset-0 bg-gradient-to-b from-transparent via-green-500/10 to-transparent h-full w-full opacity-50 translate-y-[-100%] animate-[scan_3s_ease-in-out_infinite]"></div>

            <div className="relative z-10">
              <div className="w-20 h-20 md:w-24 md:h-24 bg-green-500/10 rounded-full flex items-center justify-center mx-auto mb-8 relative">
                <div className="absolute inset-0 border-2 border-green-500/30 rounded-full animate-ping opacity-20"></div>
                <div className="absolute inset-0 border border-green-500/50 rounded-full animate-[spin_4s_linear_infinite] border-t-transparent"></div>
                <CheckCircle2 className="w-10 h-10 md:w-12 md:h-12 text-green-400 drop-shadow-[0_0_15px_rgba(34,197,94,0.5)]" />
              </div>
              <h2 className="text-2xl md:text-3xl font-mono font-bold text-white mb-6 tracking-wide drop-shadow-md">
                AUTHORIZATION_GRANTED<span className="text-green-500 animate-pulse">_</span>
              </h2>

              <div className="inline-block bg-green-950/40 border border-green-500/40 px-6 md:px-8 py-3 md:py-4 rounded-xl mb-8 relative overflow-hidden shadow-[0_0_20px_rgba(34,197,94,0.1)_inset] max-w-full">
                <div className="absolute top-0 left-0 w-2 h-full bg-green-500"></div>
                <p className="text-green-400/80 font-mono text-xs md:text-sm uppercase mb-1">Registration ID</p>
                <p className="text-green-400 font-mono text-xl md:text-3xl font-bold tracking-widest break-words">{regId}</p>
              </div>

              <div className="inline-block bg-green-950/40 border border-green-500/40 px-6 md:px-8 py-3 md:py-4 rounded-xl mb-8 relative overflow-hidden shadow-[0_0_20px_rgba(34,197,94,0.1)_inset] max-w-full w-full">
                <div className="absolute top-0 left-0 w-2 h-full bg-green-500"></div>
                <p className="text-green-400/80 font-mono text-xs md:text-sm uppercase mb-1 text-left">Your Referral Code</p>
                <div className="flex items-center justify-between gap-4 mt-1">
                  <p className="text-green-400 font-mono text-xl md:text-3xl font-bold tracking-widest break-words">{formData.phone}</p>
                  <button
                    onClick={handleCopyReferral}
                    className="p-2 hover:bg-white/10 rounded-lg transition-all duration-300 cursor-pointer shrink-0 border border-white/5 bg-white/5 hover:scale-105 active:scale-95"
                    title="Copy Referral Code"
                    aria-label="Copy Referral Code"
                  >
                    {copiedRef ? (
                      <Check className="w-5 h-5 text-green-500 scale-110 transition-transform" />
                    ) : (
                      <Copy className="w-5 h-5 text-gray-400 hover:text-white transition-colors" />
                    )}
                  </button>
                </div>
                {copyRefMessage && (
                  <p className={`text-left text-xs font-mono mt-2 ${copiedRef ? 'text-green-500' : 'text-red-400'} animate-in fade-in`}>
                    {copyRefMessage}
                  </p>
                )}
                <p className="text-left text-xs text-gray-400 mt-2 font-sans">
                  Share this number with your friends and ask them to enter it during registration.
                </p>
              </div>

              <div className="space-y-4 mb-10 text-left bg-black/40 p-6 rounded-xl border border-white/5 font-mono text-sm">
                <div className="flex justify-between items-center border-b border-white/5 pb-2">
                  <span className="text-gray-500">Status</span>
                  <span className="text-yellow-500 flex items-center gap-2"><span className="w-2 h-2 rounded-full bg-yellow-500 animate-pulse"></span>PENDING_VERIFICATION</span>
                </div>
                <div className="flex justify-between items-center border-b border-white/5 pb-2">
                  <span className="text-gray-500">Transaction UTR</span>
                  <span className="text-white tracking-widest">{formData.txnid}</span>
                </div>
                <p className="text-gray-400 mt-4 leading-relaxed font-sans text-center">
                  Your credentials have been securely logged. Upon payment verification, your access protocol will be emailed to <span className="text-white border-b border-white/20 pb-0.5">{formData.email}</span>.
                </p>
              </div>

              <Button
                onClick={() => window.location.href = '/'}
                variant="outline"
                className="w-full relative group overflow-hidden bg-transparent border-green-500/30 text-green-400 hover:text-green-300 hover:border-green-400 h-14 rounded-xl font-mono uppercase tracking-widest transition-all duration-300"
              >
                <div className="absolute inset-0 bg-green-500/10 translate-y-[100%] group-hover:translate-y-0 transition-transform duration-300"></div>
                <span className="relative z-10">Return to Terminal</span>
              </Button>
            </div>
          </motion.div>
        </div>
      </section>
    );
  }

  return (
    <section id="register" className="py-16 md:py-24 relative bg-background border-t border-dashed border-primary/20 overflow-hidden">
      {/* Background Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[300px] h-[300px] md:w-[800px] md:h-[800px] bg-primary/5 rounded-full blur-[80px] md:blur-[120px] -z-10" />

      <div className="container mx-auto px-4 md:px-12 max-w-4xl relative z-10">
        <div className="text-center mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="flex flex-col items-center justify-center gap-4 mb-6 relative"
          >
            {/* Decorative background grid behind title */}
            <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:24px_24px] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_50%,#000_70%,transparent_100%)] w-full h-full -z-10" />

            <div className="flex items-center gap-2 md:gap-4 w-full justify-center">
              <div className="h-[2px] w-6 md:w-12 bg-gradient-to-r from-transparent to-primary/80"></div>
              <h2 className="text-3xl sm:text-4xl md:text-6xl font-serif font-bold tracking-tighter text-transparent bg-clip-text bg-gradient-to-r from-white via-white to-white/60 uppercase drop-shadow-[0_0_15px_rgba(255,255,255,0.3)] text-center break-words">
                INITIALIZE_REGISTRATION<span className="text-primary drop-shadow-[0_0_15px_rgba(var(--primary),0.8)]">_</span>
              </h2>
              <div className="h-[2px] w-6 md:w-12 bg-gradient-to-l from-transparent to-primary/80"></div>
            </div>
          </motion.div>
          <p className="text-gray-400 text-lg font-sans max-w-2xl mx-auto relative z-10">
            Secure your spot for the ultimate AI engineering protocol. Ensure you have your payment UTR ready before proceeding.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-5 gap-12">
          {/* Payment Section */}
          <div className="lg:col-span-2 space-y-6">
            <div className="bg-black/60 backdrop-blur-xl border border-white/10 hover:border-primary/50 p-6 md:p-8 rounded-2xl shadow-[0_0_40px_rgba(0,0,0,0.5)] relative overflow-hidden group transition-all duration-500">
              <div className="absolute top-0 left-0 w-full h-[2px] bg-gradient-to-r from-transparent via-primary to-transparent opacity-50 group-hover:opacity-100 transition-opacity"></div>
              <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>

              <h3 className="text-xl font-mono font-bold text-white mb-2 uppercase tracking-wider relative z-10">Payment Protocol</h3>
              <p className="text-gray-400 text-sm mb-6 relative z-10">Complete your payment to verify registration.</p>

              <div className="bg-gradient-to-br from-primary/10 to-primary/5 border border-primary/30 p-5 rounded-xl mb-8 space-y-4 relative z-10 shadow-inner">
                <div className="flex flex-col gap-2">
                  <div className="flex items-center justify-between">
                    <span className="text-white font-mono text-sm font-semibold flex items-center gap-2">
                      <span className="w-2.5 h-2.5 bg-primary rounded-full animate-pulse"></span>
                      Early Bird Tickets Live
                    </span>
                    <div className="flex items-baseline gap-2">
                      <span className="text-sm text-gray-500 line-through font-mono">₹99</span>
                      <span className="text-3xl font-bold text-primary font-mono tracking-tighter">₹59</span>
                    </div>
                  </div>
                </div>

                <div className="border-t border-dashed border-white/10 pt-3 flex items-center justify-between text-xs text-gray-500 font-mono">
                  <span>Regular Tickets</span>
                  <span>₹99</span>
                </div>
              </div>

              <div className="space-y-6">
                <div className="flex flex-col items-center justify-center p-8 bg-black/40 border border-white/5 rounded-2xl relative overflow-hidden group">
                  <div className="absolute inset-0 bg-primary/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>

                  {/* Cyberpunk corner accents */}
                  <div className="absolute top-0 left-0 w-4 h-4 border-t-2 border-l-2 border-primary/40 rounded-tl-lg"></div>
                  <div className="absolute top-0 right-0 w-4 h-4 border-t-2 border-r-2 border-primary/40 rounded-tr-lg"></div>
                  <div className="absolute bottom-0 left-0 w-4 h-4 border-b-2 border-l-2 border-primary/40 rounded-bl-lg"></div>
                  <div className="absolute bottom-0 right-0 w-4 h-4 border-b-2 border-r-2 border-primary/40 rounded-br-lg"></div>

                  <div className="w-48 h-48 bg-white/5 rounded-xl flex items-center justify-center mb-6 relative overflow-hidden shadow-[0_0_30px_rgba(var(--primary),0.1)]">
                    {/* QR Code Image */}
                    <div className="absolute inset-2 border-2 border-primary/30 border-dashed rounded-lg opacity-50 z-0"></div>

                    {/* QR Code conditionally rendered */}
                    {!qrError ? (
                      <img
                        src="/qrcode.jpeg"
                        alt="UPI QR Code"
                        className="w-full h-full object-cover relative z-10 opacity-90 hover:opacity-100 scale-125 hover:scale-[1.35] transition-all duration-500 cursor-zoom-in"
                        onError={() => setQrError(true)}
                      />
                    ) : (
                      <QrCode className="w-20 h-20 text-primary/40 group-hover:text-primary transition-colors duration-500 relative z-10" />
                    )}

                    {/* Advanced Scanning Line */}
                    <div className="absolute inset-0 border-2 border-primary/20 rounded-xl pointer-events-none group-hover:border-primary/50 transition-colors z-20"></div>
                    <div className="absolute top-0 left-0 w-full h-[3px] bg-primary shadow-[0_0_15px_var(--primary)] animate-[scan_2.5s_ease-in-out_infinite] z-20"></div>
                    <div className="absolute top-0 left-0 w-full h-12 bg-gradient-to-b from-primary/20 to-transparent animate-[scan_2.5s_ease-in-out_infinite] z-20"></div>
                  </div>
                  <div className="flex items-center gap-2">
                    <span className="w-2 h-2 rounded-full bg-red-500 animate-pulse"></span>
                    <p className="text-xs text-gray-400 font-mono uppercase tracking-[0.2em]">[ SCAN_TO_PAY ]</p>
                  </div>
                </div>

                <div className="bg-black/50 p-4 rounded-lg border border-white/5 relative">
                  <p className="text-xs text-gray-400 font-mono mb-2 uppercase">UPI ID</p>
                  <div className="flex items-start justify-between gap-4">
                    <span className="font-mono text-white tracking-wide text-[13px] break-all select-all pt-1">
                      {upiId}
                    </span>
                    <button
                      onClick={handleCopyUPI}
                      className="p-2 hover:bg-white/10 rounded-lg transition-all duration-300 cursor-pointer shrink-0 border border-white/5 bg-white/5 hover:scale-105 hover:shadow-lg active:scale-95"
                      title="Copy UPI ID"
                      aria-label="Copy UPI ID"
                      type="button"
                    >
                      {copied ? (
                        <Check className="w-4 h-4 text-green-500 scale-110 transition-transform" />
                      ) : (
                        <Copy className="w-4 h-4 text-gray-400 hover:text-white transition-colors" />
                      )}
                    </button>
                  </div>
                  {copyMessage && (
                    <div className={`absolute -bottom-8 left-0 right-0 text-center text-[10px] font-mono ${copied ? 'text-green-500' : 'text-red-400'} animate-in fade-in slide-in-from-top-1`}>
                      {copyMessage}
                    </div>
                  )}
                </div>
              </div>

              <div className="mt-8">
                <h4 className="text-sm font-bold text-white mb-4 uppercase tracking-wider flex items-center gap-2">
                  <Smartphone className="w-4 h-4 text-primary" /> Instructions
                </h4>
                <div className="mb-4 inline-block bg-green-500/20 text-green-500 text-xs px-2 py-1 rounded border border-green-500/30">
                  Payment is mandatory to secure your spot
                </div>
                <ol className="text-sm text-gray-400 space-y-3 font-sans list-decimal list-inside marker:text-primary marker:font-mono" start={0}>
                  <li>Once the early bird tickets are over, the registration fee will be back to ₹99.</li>
                  <li>Pay ₹59 using any UPI app (GPay, PhonePe, Paytm).</li>
                  <li>Copy the unique 12-digit Transaction ID (UTR).</li>
                  <li>Enter the Transaction ID in the registration form to verify.</li>
                  <li>Submit the form to complete the protocol.</li>
                </ol>
              </div>
            </div>
          </div>

          {/* Registration Form */}
          <div className="lg:col-span-3">
            <div className="bg-black/60 backdrop-blur-xl border border-white/10 p-6 md:p-8 rounded-2xl shadow-[0_0_40px_rgba(0,0,0,0.5)] relative">
              <div className="absolute -inset-[1px] bg-gradient-to-b from-primary/20 to-transparent rounded-2xl z-0 pointer-events-none opacity-50"></div>

              <div className="relative z-10">
                <h3 className="text-xl md:text-2xl font-mono font-bold text-white mb-6 md:mb-8 uppercase flex items-center gap-3 md:gap-4 tracking-wider">
                  <span className="w-8 h-8 md:w-10 md:h-10 rounded-lg bg-primary/10 flex items-center justify-center text-primary text-sm border border-primary/40 shadow-[0_0_15px_rgba(var(--primary),0.3)]">02</span>
                  Operative Details
                </h3>

                {status === "error" && (
                  <div className="mb-6 p-4 bg-red-500/10 border border-red-500/50 rounded-lg flex items-start gap-3">
                    <AlertCircle className="w-5 h-5 text-red-500 shrink-0 mt-0.5" />
                    <p className="text-red-200 text-sm">{errorMessage}</p>
                  </div>
                )}

                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <label htmlFor="name" className="text-xs font-mono text-gray-400 uppercase tracking-wider block">Full Name <span className="text-primary">*</span></label>
                      <input
                        type="text"
                        id="name"
                        name="name"
                        required
                        value={formData.name}
                        onChange={handleInputChange}
                        className="w-full bg-black/60 border border-white/10 rounded-xl px-4 py-3.5 text-white focus:outline-none focus:border-primary/70 focus:ring-2 focus:ring-primary/20 focus:bg-primary/5 transition-all duration-300 font-sans shadow-inner backdrop-blur-sm"
                        placeholder="John Doe"
                      />
                    </div>

                    <div className="space-y-2">
                      <label htmlFor="email" className="text-xs font-mono text-gray-400 uppercase tracking-wider block">Email Address <span className="text-primary">*</span></label>
                      <input
                        type="email"
                        id="email"
                        name="email"
                        required
                        value={formData.email}
                        onChange={handleInputChange}
                        className="w-full bg-black/60 border border-white/10 rounded-xl px-4 py-3.5 text-white focus:outline-none focus:border-primary/70 focus:ring-2 focus:ring-primary/20 focus:bg-primary/5 transition-all duration-300 font-sans shadow-inner backdrop-blur-sm"
                        placeholder="john@example.com"
                      />
                    </div>

                    <div className="space-y-2">
                      <label htmlFor="phone" className="text-xs font-mono text-gray-400 uppercase tracking-wider block">Mobile Number <span className="text-primary">*</span></label>
                      <input
                        type="tel"
                        id="phone"
                        name="phone"
                        required
                        pattern="[0-9]{10}"
                        title="Please enter a valid 10-digit mobile number"
                        value={formData.phone}
                        onChange={handleInputChange}
                        className="w-full bg-black/60 border border-white/10 rounded-xl px-4 py-3.5 text-white focus:outline-none focus:border-primary/70 focus:ring-2 focus:ring-primary/20 focus:bg-primary/5 transition-all duration-300 font-sans shadow-inner backdrop-blur-sm"
                        placeholder="9876543210"
                      />
                    </div>

                    <div className="space-y-2">
                      <label htmlFor="college" className="text-xs font-mono text-gray-400 uppercase tracking-wider block">College Name <span className="text-primary">*</span></label>
                      <input
                        type="text"
                        id="college"
                        name="college"
                        required
                        value={formData.college}
                        onChange={handleInputChange}
                        className="w-full bg-black/60 border border-white/10 rounded-xl px-4 py-3.5 text-white focus:outline-none focus:border-primary/70 focus:ring-2 focus:ring-primary/20 focus:bg-primary/5 transition-all duration-300 font-sans shadow-inner backdrop-blur-sm"
                        placeholder="Your Institute Name"
                      />
                    </div>

                    <div className="space-y-2">
                      <label htmlFor="branch" className="text-xs font-mono text-gray-400 uppercase tracking-wider block">Branch <span className="text-primary">*</span></label>
                      <input
                        type="text"
                        id="branch"
                        name="branch"
                        required
                        value={formData.branch}
                        onChange={handleInputChange}
                        className="w-full bg-black/60 border border-white/10 rounded-xl px-4 py-3.5 text-white focus:outline-none focus:border-primary/70 focus:ring-2 focus:ring-primary/20 focus:bg-primary/5 transition-all duration-300 font-sans shadow-inner backdrop-blur-sm"
                        placeholder="Computer Science, etc."
                      />
                    </div>

                    <div className="space-y-2">
                      <label htmlFor="year" className="text-xs font-mono text-gray-400 uppercase tracking-wider block">Year <span className="text-primary">*</span></label>
                      <select
                        id="year"
                        name="year"
                        required
                        value={formData.year}
                        onChange={handleInputChange}
                        className="w-full bg-black/60 border border-white/10 rounded-xl px-4 py-3.5 text-white focus:outline-none focus:border-primary/70 focus:ring-2 focus:ring-primary/20 focus:bg-primary/5 transition-all duration-300 font-sans shadow-inner backdrop-blur-sm appearance-none"
                      >
                        <option value="" disabled className="bg-gray-900 text-white">Select Year</option>
                        <option value="1st Year" className="bg-gray-900 text-white">1st Year</option>
                        <option value="2nd Year" className="bg-gray-900 text-white">2nd Year</option>
                        <option value="3rd Year" className="bg-gray-900 text-white">3rd Year</option>
                        <option value="4th Year" className="bg-gray-900 text-white">4th Year</option>
                        <option value="Graduated/Professional" className="bg-gray-900 text-white">Graduated / Professional</option>
                      </select>
                    </div>
                  </div>

                  <div className="pt-4 border-t border-white/10">
                    <div className="space-y-2 mb-6">
                      <label htmlFor="referredBy" className="text-xs font-mono text-gray-400 uppercase tracking-wider block">Referral Code (Optional)</label>
                      <input
                        type="tel"
                        id="referredBy"
                        name="referredBy"
                        minLength={10}
                        maxLength={10}
                        pattern="[0-9]{10}"
                        title="If entered, please provide a valid 10-digit mobile number"
                        value={formData.referredBy}
                        onChange={handleInputChange}
                        className="w-full bg-black/60 border border-white/10 rounded-xl px-4 py-3.5 text-white focus:outline-none focus:border-primary/70 focus:ring-2 focus:ring-primary/20 focus:bg-primary/5 transition-all duration-300 font-sans shadow-inner backdrop-blur-sm"
                        placeholder="Enter your friend's mobile number"
                      />
                    </div>
                    <div className="space-y-2">
                      <label htmlFor="txnid" className="text-xs font-mono text-primary uppercase tracking-wider block">Transaction ID (UTR) <span className="text-primary">*</span></label>
                      <input
                        type="text"
                        id="txnid"
                        name="txnid"
                        required
                        minLength={12}
                        maxLength={12}
                        pattern="[0-9]{12}"
                        title="Please enter a valid 12-digit UTR number"
                        value={formData.txnid}
                        onChange={handleInputChange}
                        className="w-full bg-primary/5 border border-primary/40 rounded-xl px-4 py-3.5 text-white focus:outline-none focus:border-primary focus:ring-2 focus:ring-primary/30 transition-all duration-300 font-mono placeholder:text-gray-600 shadow-[0_0_15px_rgba(var(--primary),0.1)_inset]"
                        placeholder="Enter 12-digit UTR Number"
                      />
                    </div>
                  </div>

                  <Button
                    type="submit"
                    disabled={status === "loading"}
                    className="w-full relative group overflow-hidden bg-primary/10 border border-primary/50 hover:border-primary text-white rounded-xl h-16 text-lg font-mono uppercase tracking-[0.2em] transition-all duration-500 disabled:opacity-70 disabled:cursor-not-allowed mt-4"
                  >
                    <div className="absolute inset-0 w-0 bg-primary group-hover:w-full transition-all duration-500 ease-out z-0"></div>
                    <div className="absolute inset-0 bg-[linear-gradient(45deg,transparent_25%,rgba(255,255,255,0.2)_50%,transparent_75%,transparent_100%)] bg-[length:250%_250%,100%_100%] bg-[position:200%_0,0_0] bg-no-repeat transition-[background-position_0s_ease] group-hover:bg-[position:-200%_0,0_0] group-hover:duration-[1500ms]"></div>

                    <span className="relative z-10 flex items-center gap-3">
                      {status === "loading" ? (
                        <>
                          <Loader2 className="w-5 h-5 animate-spin" /> Transmitting...
                        </>
                      ) : (
                        "Submit Registration"
                      )}
                    </span>
                  </Button>
                  <p className="text-center text-xs text-gray-500 font-sans mt-6">
                    By submitting, you agree to the event protocol and verify that the payment details are accurate.
                  </p>
                  <div className="mt-4 p-4 bg-primary/5 border border-primary/20 rounded-xl text-center text-xs text-gray-300 font-mono shadow-inner">
                    <span className="text-primary font-bold">NOTE:</span> Once we receive your data and verify it, you will receive an email from our side with further details and information.
                  </div>

                  {/* Referral Highlight Banner */}
                  <div className="mt-8 p-5 bg-gradient-to-br from-primary/20 to-transparent border border-primary/50 rounded-xl relative overflow-hidden group shadow-[0_0_20px_rgba(var(--primary),0.1)]">
                    <div className="absolute top-1/2 -translate-y-1/2 right-4 opacity-10 group-hover:scale-110 transition-transform duration-500">
                      <Gift className="w-20 h-20 text-primary" />
                    </div>
                    <div className="relative z-10">
                      <div className="flex items-center gap-2 mb-2">
                        <span className="w-2 h-2 rounded-full bg-primary animate-pulse"></span>
                        <h4 className="text-primary font-mono font-bold uppercase tracking-widest text-sm">Referral Protocol Active</h4>
                      </div>
                      <p className="text-white text-base md:text-lg font-bold mb-2 pr-4">Invite 7+ Members = 100% Refund + Extra Rewards!</p>
                      <p className="text-gray-400 text-sm font-sans max-w-[85%]">
                        Use your registered mobile number as your referral code. If 7 or more people use it during registration, your entry fee will be fully refunded along with exclusive event perks.
                      </p>
                    </div>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
