"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { ArrowRight, X } from "lucide-react";
import { useState } from "react";


const InstagramIcon = ({ className = "w-4 h-4" }: { className?: string }) => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}>
    <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
    <circle cx="12" cy="12" r="4" />
    <circle cx="17.5" cy="6.5" r="0.5" fill="currentColor" stroke="none" />
  </svg>
);

const LinkedinIcon = ({ className = "w-4 h-4" }: { className?: string }) => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}>
    <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
    <rect x="2" y="9" width="4" height="12" />
    <circle cx="4" cy="4" r="2" />
  </svg>
);

const TwitterIcon = ({ className = "w-4 h-4" }: { className?: string }) => (
  <svg viewBox="0 0 24 24" fill="currentColor" className={className}>
    <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
  </svg>
);
import Link from "next/link";

interface Partner {
  id: string;
  name: string;
  logo: string;
  description?: string;
  instagram?: string;
  linkedin?: string;
  twitter?: string;
  featured: boolean;
  role?: string;
}

const partnersData: Partner[] = [
  {
    id: "knowvy",
    name: "Knowvy Technologies",
    logo: "/Knowvy.png",
    description: "Empowering developers and driving innovation across the tech ecosystem.",
    instagram: "https://www.instagram.com/knowvy_technologies/",
    linkedin: "https://www.linkedin.com/company/knowvy/?",
    featured: true,
    role: "Organizer",
  },
  {
    id: "vexite",
    name: "Vexite Studio",
    logo: "/Vexite logo.png",
    description: "Building next-generation design systems and creative solutions.",
    instagram: "https://www.instagram.com/vexitestudio/",
    linkedin: "https://www.linkedin.com/company/vexite-studio/",
    featured: true,
    role: "Innovation Partner",
  },
  {
    id: "scalive",
    name: "Scalive",
    logo: "/scalive.png",
    description: "Premium venue spaces for modern technology events.",
    instagram: "https://www.instagram.com/scalive.in/",
    featured: false,
    role: "Venue Partner",
  },
  {
    id: "web3_bhopal",
    name: "Web3 Bhopal",
    logo: "/web3 bhopal.jpeg",
    description: "Building a strong Web3 community and bringing decentralized technologies to the ecosystem.",
    twitter: "https://x.com/Web3_Bhopal",
    featured: false,
  },
  {
    id: "builder_base",
    name: "Builder Base",
    logo: "/builder_base.png",
    description: "Building a strong ecosystem for builders, developers, and creators.",
    twitter: "https://x.com/theBuilder_base",
    featured: false,
  },
  {
    id: "code_crate",
    name: "Code Crate",
    logo: "/code_crate.jpg",
    description: "A community-driven platform focused on coding, sharing knowledge, and building together.",
    instagram: "https://www.instagram.com/code._crate/",
    featured: false,
  }
];



export function CommunityPartnersPage() {
  const [isPopupOpen, setIsPopupOpen] = useState(false);
  const featuredPartners = partnersData.filter(p => p.featured);
  const regularPartners = partnersData;

  return (
    <div className="min-h-screen bg-black text-white selection:bg-primary/30 pt-24 pb-12">
      {/* Background Elements */}
      <div className="fixed inset-0 z-0 bg-[linear-gradient(to_right,#333_1px,transparent_1px),linear-gradient(to_bottom,#333_1px,transparent_1px)] bg-[size:3rem_3rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_50%,#000_70%,transparent_100%)] opacity-20 pointer-events-none" />
      <div className="fixed top-1/4 left-1/4 w-[600px] h-[300px] bg-primary/10 blur-[150px] rounded-full pointer-events-none z-0" />

      {/* Hero Section */}
      <section className="relative z-10 w-full pt-32 pb-24 md:pt-40 md:pb-32 flex flex-col items-center text-center border-b border-white/5 bg-gradient-to-b from-black via-black/80 to-transparent backdrop-blur-sm">
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="container mx-auto px-6 max-w-4xl relative"
        >
          {/* Decorative Elements */}
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[120%] h-full bg-primary/20 blur-[150px] rounded-full pointer-events-none" />

          <div className="inline-flex items-center gap-3 mb-8 px-5 py-2.5 rounded-full border border-primary/30 bg-primary/10 backdrop-blur-md shadow-[0_0_20px_rgba(250,204,21,0.15)]">
            <span className="h-2 w-2 rounded-full bg-primary animate-pulse shadow-[0_0_10px_rgba(250,204,21,0.8)]"></span>
            <span className="text-primary font-mono text-xs tracking-[0.3em] uppercase font-bold">
              The Ecosystem
            </span>
          </div>

          <h1 className="text-5xl md:text-7xl lg:text-8xl font-serif font-bold tracking-tight mb-8 leading-[1.1]">
            <span className="text-transparent bg-clip-text bg-gradient-to-b from-white via-white to-gray-600 drop-shadow-sm">
              Community Partners
            </span>
          </h1>

          <p className="text-lg md:text-xl text-gray-400 font-sans max-w-2xl mx-auto leading-relaxed mb-12">
            Proudly supported by leading student communities, developer groups, startups, and innovation ecosystems helping us build a stronger tech community in Bhopal.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
            <a href="#featured" className="px-8 py-4 bg-primary text-black font-bold font-mono uppercase tracking-wider rounded-full hover:scale-105 active:scale-95 transition-all shadow-[0_0_20px_rgba(250,204,21,0.3)] hover:shadow-[0_0_30px_rgba(250,204,21,0.5)]">
              View Partners
            </a>
            <button
              onClick={() => setIsPopupOpen(true)}
              className="px-8 py-4 bg-white/5 border border-white/10 text-white font-bold font-mono uppercase tracking-wider rounded-full hover:bg-white/10 hover:border-primary/50 hover:scale-105 active:scale-95 transition-all text-center"
            >
              Join Ecosystem
            </button>
          </div>

          {/* Minimal Stats Row */}
          <div className="mt-20 pt-10 border-t border-white/10 grid grid-cols-2 md:grid-cols-4 gap-8 max-w-4xl mx-auto relative z-10">
            {[
              { label: "Communities", value: "10+" },
              { label: "Members", value: "5K+" },
              { label: "Startups", value: "20+" },
              { label: "Vision", value: "01" },
            ].map((stat, i) => (
              <div key={i} className="flex flex-col items-center group">
                <span className="text-3xl md:text-4xl font-serif font-bold text-transparent bg-clip-text bg-gradient-to-br from-white to-gray-500 mb-2 group-hover:scale-110 transition-transform">
                  {stat.value}
                </span>
                <span className="text-xs font-mono text-primary/80 uppercase tracking-widest">{stat.label}</span>
              </div>
            ))}
          </div>
        </motion.div>
      </section>



      {/* Featured Partner Section */}
      <section id="featured" className="relative z-10 container mx-auto px-6 py-20 border-t border-white/5 mt-12">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-5xl font-serif font-bold text-transparent bg-clip-text bg-gradient-to-r from-white to-gray-500 mb-4 uppercase tracking-widest drop-shadow-sm">Featured Partners</h2>
          <div className="h-[2px] w-24 bg-gradient-to-r from-transparent via-primary to-transparent mx-auto rounded-full" />
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 max-w-6xl mx-auto">
          {featuredPartners.map((partner, idx) => (
            <motion.div
              key={partner.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.2, duration: 0.6 }}
              className="group relative flex flex-col items-center text-center p-10 bg-black/80 backdrop-blur-2xl border border-white/10 hover:border-primary/50 rounded-[2.5rem] transition-all duration-500 shadow-xl hover:shadow-[0_0_50px_rgba(250,204,21,0.2)] overflow-hidden"
            >
              <div className="absolute inset-0 bg-gradient-to-br from-primary/10 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none" />

              <div className="relative w-48 h-32 mb-8 drop-shadow-[0_0_15px_rgba(255,255,255,0.1)] group-hover:scale-110 transition-transform duration-500">
                <Image src={partner.logo} alt={partner.name} fill className="object-contain" />
              </div>

              <h3 className="text-2xl font-serif font-bold text-white mb-4">{partner.name}</h3>
              <p className="text-gray-400 mb-8 font-sans leading-relaxed">{partner.description}</p>

              <div className="mt-auto flex flex-col items-center gap-6 relative z-10">
                <div className="flex gap-4">
                  {partner.instagram && (
                    <Link href={partner.instagram} target="_blank" rel="noopener noreferrer" className="p-2 rounded-full bg-white/5 hover:bg-primary hover:text-black transition-colors">
                      <InstagramIcon className="w-5 h-5" />
                    </Link>
                  )}
                  {partner.linkedin && (
                    <Link href={partner.linkedin} target="_blank" rel="noopener noreferrer" className="p-2 rounded-full bg-white/5 hover:bg-primary hover:text-black transition-colors">
                      <LinkedinIcon className="w-5 h-5" />
                    </Link>
                  )}
                  {partner.twitter && (
                    <Link href={partner.twitter} target="_blank" rel="noopener noreferrer" className="p-2 rounded-full bg-white/5 hover:bg-primary hover:text-black transition-colors">
                      <TwitterIcon className="w-5 h-5" />
                    </Link>
                  )}
                </div>

                <Link href={partner.linkedin || partner.twitter || partner.instagram || "#"} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 text-sm font-mono text-black bg-primary px-8 py-3 rounded-full hover:bg-primary/90 transition-all uppercase tracking-wider font-bold shadow-[0_0_15px_rgba(250,204,21,0.3)] hover:shadow-[0_0_30px_rgba(250,204,21,0.5)] hover:scale-105 active:scale-95 group/link">
                  Visit Community
                  <ArrowRight size={18} className="group-hover/link:translate-x-1.5 transition-transform" />
                </Link>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Partners Grid */}
      <section className="relative z-10 container mx-auto px-6 py-20 border-t border-white/5">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-5xl font-serif font-bold text-transparent bg-clip-text bg-gradient-to-r from-white to-gray-500 mb-4 uppercase tracking-widest drop-shadow-sm">All Partners</h2>
          <div className="h-[2px] w-24 bg-gradient-to-r from-transparent via-primary to-transparent mx-auto rounded-full" />
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 max-w-7xl mx-auto">
          {regularPartners.map((partner, idx) => (
            <motion.div
              key={partner.id}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1, duration: 0.5 }}
              className="group relative flex flex-col items-center p-8 bg-black/60 backdrop-blur-xl border border-white/10 hover:border-primary/40 rounded-3xl transition-all duration-500 hover:-translate-y-3 hover:shadow-[0_15px_40px_rgba(250,204,21,0.15)] overflow-hidden"
            >
              <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />
              <div className="relative w-32 h-20 mb-6 group-hover:scale-110 transition-transform duration-500">
                <Image src={partner.logo} alt={partner.name} fill className="object-contain" />
              </div>

              <h3 className="text-lg font-serif font-bold text-white text-center mb-2">{partner.name}</h3>
              <span className="text-xs font-mono text-primary/70 uppercase tracking-widest mb-6">
                {partner.role || "Community Partner"}
              </span>

              <div className="mt-auto flex gap-3 pt-4 border-t border-white/10 w-full justify-center relative z-10">
                {partner.instagram && (
                  <Link href={partner.instagram} target="_blank" rel="noopener noreferrer" className="text-gray-500 hover:text-primary transition-colors">
                    <InstagramIcon className="w-[18px] h-[18px]" />
                  </Link>
                )}
                {partner.linkedin && (
                  <Link href={partner.linkedin} target="_blank" rel="noopener noreferrer" className="text-gray-500 hover:text-primary transition-colors">
                    <LinkedinIcon className="w-[18px] h-[18px]" />
                  </Link>
                )}
                {partner.twitter && (
                  <Link href={partner.twitter} target="_blank" rel="noopener noreferrer" className="text-gray-500 hover:text-primary transition-colors">
                    <TwitterIcon className="w-[18px] h-[18px]" />
                  </Link>
                )}
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Become a Partner Section */}
      <section className="relative z-10 container mx-auto px-6 py-32 border-t border-white/5">
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="relative max-w-4xl mx-auto p-12 md:p-16 text-center rounded-3xl overflow-hidden border border-primary/20 bg-black/50 backdrop-blur-xl mb-20"
        >
          {/* Animated Glow Behind */}
          <div className="absolute inset-0 bg-gradient-to-br from-primary/10 via-transparent to-primary/5 z-0" />

          <div className="relative z-10">
            <h2 className="text-4xl md:text-6xl font-serif font-bold text-white mb-6 tracking-tight">
              Become a Community Partner
            </h2>
            <p className="text-lg text-gray-400 font-sans max-w-2xl mx-auto mb-10 leading-relaxed">
              Want to support the event and connect with developers, students, founders, and tech enthusiasts? Email us directly at <span className="text-white font-bold">knowvy.tech@gmail.com</span> to join us in making this event an unforgettable experience.
            </p>

            <button
              onClick={() => setIsPopupOpen(true)}
              className="inline-flex items-center gap-2 px-8 py-4 bg-primary text-black font-semibold rounded-full hover:bg-primary/90 transition-all hover:scale-105 active:scale-95 shadow-[0_0_20px_rgba(250,204,21,0.4)]"
            >
              Email Us
              <ArrowRight size={20} />
            </button>
          </div>
        </motion.div>
      </section>

      {/* Partnership Popup */}
      {isPopupOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm">
          <motion.div
            initial={{ opacity: 0, scale: 0.95, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            className="relative w-full max-w-lg bg-gray-900 border border-white/10 rounded-3xl p-8 shadow-2xl overflow-hidden"
          >
            <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-primary/20 via-primary to-primary/20" />

            <button
              onClick={() => setIsPopupOpen(false)}
              className="absolute top-4 right-4 p-2 text-gray-400 hover:text-white bg-white/5 hover:bg-white/10 rounded-full transition-colors"
            >
              <X size={20} />
            </button>

            <div className="mb-8">
              <h3 className="text-3xl font-serif font-bold text-white mb-3">Partner With Us</h3>
              <p className="text-gray-400 font-sans leading-relaxed">
                We're excited to collaborate! To become a community partner, please send an email to the address below with your community details.
              </p>
            </div>

            <div className="bg-black/50 border border-primary/30 p-5 rounded-2xl flex flex-col sm:flex-row items-center justify-between gap-4 mb-8 relative overflow-hidden">
              <div className="absolute inset-0 bg-primary/5 pointer-events-none" />
              <span className="text-primary font-mono text-lg font-bold tracking-wide relative z-10 break-all">
                knowvy.tech@gmail.com
              </span>
              <a
                href="mailto:knowvy.tech@gmail.com?subject=Partnership%20Inquiry:%20Community%20Partner&body=Hi%20Team,%0A%0AI%20would%20love%20to%20collaborate%20and%20become%20a%20Community%20Partner%20for%20the%20event!%0A%0ACommunity%20Name:%20%0ASocial%20Media%20Links:%20%0A%0ALooking%20forward%20to%20joining%20the%20ecosystem!"
                className="px-5 py-2.5 bg-primary/10 text-primary hover:bg-primary hover:text-black rounded-xl text-sm font-bold transition-all relative z-10 active:scale-95 whitespace-nowrap"
              >
                Open Mail App
              </a>
            </div>

            <button
              onClick={() => setIsPopupOpen(false)}
              className="w-full py-4 bg-white/5 hover:bg-white/10 text-white rounded-2xl font-bold transition-all active:scale-95"
            >
              Close
            </button>
          </motion.div>
        </div>
      )}
    </div>
  );
}
