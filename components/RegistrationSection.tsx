"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { CheckCircle2, AlertCircle, Loader2, QrCode, Smartphone, Copy } from "lucide-react";
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
  });

  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");
  const [errorMessage, setErrorMessage] = useState("");
  const [regId, setRegId] = useState("");

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const copyToClipboard = (text: string) => {
    navigator.clipboard.writeText(text);
    alert("Copied to clipboard!");
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus("loading");
    setErrorMessage("");

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
          txnid: payload.txnid
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
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            className="bg-black/40 backdrop-blur-md border border-green-500/30 p-12 rounded-xl shadow-[0_0_50px_rgba(34,197,94,0.1)]"
          >
            <div className="w-20 h-20 bg-green-500/20 rounded-full flex items-center justify-center mx-auto mb-6">
              <CheckCircle2 className="w-10 h-10 text-green-500" />
            </div>
            <h2 className="text-3xl font-mono font-bold text-white mb-4">🎉 Registration Submitted Successfully</h2>
            <div className="inline-block bg-primary/10 border border-primary/30 px-4 py-2 rounded-lg mb-6">
              <p className="text-primary font-mono text-lg">Registration ID: <span className="font-bold">{regId}</span></p>
            </div>
            <p className="text-xl text-yellow-500 font-mono mb-6">Status: Pending Verification</p>
            <p className="text-gray-400 font-sans mb-8">
              We have received your details. Please save your Transaction ID (<span className="text-white font-mono">{formData.txnid}</span>) for future reference. Our team will verify your payment and send a confirmation email shortly.
            </p>
            <Button
              onClick={() => window.location.href = '/'}
              variant="outline"
              className="border-primary/50 text-primary hover:bg-primary/10"
            >
              Return to Home
            </Button>
          </motion.div>
        </div>
      </section>
    );
  }

  return (
    <section id="register" className="py-24 relative bg-background border-t border-dashed border-primary/20">
      {/* Background Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-primary/5 rounded-full blur-[120px] -z-10" />

      <div className="container mx-auto px-6 md:px-12 max-w-4xl relative z-10">
        <div className="text-center mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="flex items-center justify-center gap-4 mb-4"
          >
            <div className="h-[1px] w-8 border-t border-dashed border-primary/50"></div>
            <h2 className="text-3xl md:text-5xl font-mono font-bold tracking-tight text-white uppercase drop-shadow-md">
              INITIALIZE_REGISTRATION<span className="text-primary animate-pulse">_</span>
            </h2>
            <div className="h-[1px] w-8 border-t border-dashed border-primary/50"></div>
          </motion.div>
          <p className="text-gray-400 text-lg font-sans max-w-2xl mx-auto">
            Secure your spot for the ultimate AI engineering protocol. Follow the steps below to complete your registration.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-5 gap-12">
          {/* Payment Section */}
          <div className="lg:col-span-2 space-y-6">
            <div className="bg-black/40 backdrop-blur-md border border-white/10 p-8 rounded-xl shadow-xl relative overflow-hidden group hover:border-primary/50 transition-colors">
              <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-primary to-transparent"></div>

              <h3 className="text-xl font-mono font-bold text-white mb-2 uppercase">Payment Protocol</h3>
              <p className="text-gray-400 text-sm mb-6">Complete your payment to verify registration.</p>

              <div className="bg-primary/10 border border-primary/20 p-5 rounded-lg mb-8 space-y-4">
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
                <div className="flex flex-col items-center justify-center p-6 bg-white/5 border border-white/10 rounded-lg border-dashed">
                  <div className="w-40 h-40 bg-white/10 rounded flex items-center justify-center mb-4 relative overflow-hidden">
                    {/* Placeholder for actual QR code image */}
                    <QrCode className="w-16 h-16 text-gray-500" />
                    <div className="absolute inset-0 border-2 border-primary/50 rounded pointer-events-none"></div>
                    <div className="absolute top-0 left-0 w-full h-[2px] bg-primary animate-[scan_2s_ease-in-out_infinite]"></div>
                  </div>
                  <p className="text-xs text-gray-500 font-mono uppercase tracking-widest">[ QR_CODE_PLACEHOLDER ]</p>
                </div>

                <div className="bg-black/50 p-4 rounded-lg border border-white/5">
                  <p className="text-xs text-gray-400 font-mono mb-2 uppercase">UPI ID</p>
                  <div className="flex items-center justify-between">
                    <span className="font-mono text-white tracking-wide">your_upi_id@bank</span>
                    <button
                      onClick={() => copyToClipboard("your_upi_id@bank")}
                      className="p-2 hover:bg-white/10 rounded transition-colors text-gray-400 hover:text-white"
                      title="Copy UPI ID"
                    >
                      <Copy className="w-4 h-4" />
                    </button>
                  </div>
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
            <div className="bg-black/40 backdrop-blur-md border border-white/10 p-8 rounded-xl shadow-xl">
              <h3 className="text-xl font-mono font-bold text-white mb-6 uppercase flex items-center gap-3">
                <span className="w-8 h-8 rounded bg-primary/20 flex items-center justify-center text-primary text-sm border border-primary/50">02</span>
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
                      className="w-full bg-black/50 border border-white/10 rounded-md px-4 py-3 text-white focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary transition-colors font-sans"
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
                      className="w-full bg-black/50 border border-white/10 rounded-md px-4 py-3 text-white focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary transition-colors font-sans"
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
                      className="w-full bg-black/50 border border-white/10 rounded-md px-4 py-3 text-white focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary transition-colors font-sans"
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
                      className="w-full bg-black/50 border border-white/10 rounded-md px-4 py-3 text-white focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary transition-colors font-sans"
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
                      className="w-full bg-black/50 border border-white/10 rounded-md px-4 py-3 text-white focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary transition-colors font-sans"
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
                      className="w-full bg-black/50 border border-white/10 rounded-md px-4 py-3 text-white focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary transition-colors font-sans appearance-none"
                    >
                      <option value="" disabled className="bg-gray-900">Select Year</option>
                      <option value="1st Year" className="bg-gray-900">1st Year</option>
                      <option value="2nd Year" className="bg-gray-900">2nd Year</option>
                      <option value="3rd Year" className="bg-gray-900">3rd Year</option>
                      <option value="4th Year" className="bg-gray-900">4th Year</option>
                      <option value="Graduated/Professional" className="bg-gray-900">Graduated / Professional</option>
                    </select>
                  </div>
                </div>

                <div className="pt-4 border-t border-white/10">
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
                      className="w-full bg-primary/5 border border-primary/30 rounded-md px-4 py-3 text-white focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary transition-colors font-mono placeholder:text-gray-600"
                      placeholder="Enter 12-digit UTR Number"
                    />
                  </div>
                </div>

                <Button
                  type="submit"
                  disabled={status === "loading"}
                  className="w-full bg-primary hover:bg-primary/90 text-white rounded-md h-14 text-lg font-mono uppercase tracking-widest transition-all duration-300 hover:shadow-[0_0_20px_rgba(var(--primary),0.4)] disabled:opacity-70 disabled:cursor-not-allowed"
                >
                  {status === "loading" ? (
                    <span className="flex items-center gap-2">
                      <Loader2 className="w-5 h-5 animate-spin" /> Transmitting...
                    </span>
                  ) : (
                    "Submit Registration"
                  )}
                </Button>
                <p className="text-center text-xs text-gray-500 font-sans mt-4">
                  By submitting, you agree to the event protocol and verify that the payment details are accurate.
                </p>
                <div className="mt-4 p-3 bg-primary/5 border border-primary/20 rounded text-center text-xs text-gray-300 font-mono">
                  <span className="text-primary font-bold">NOTE:</span> Once we receive your data and verify it, you will receive an email from our side with further details and information.
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
