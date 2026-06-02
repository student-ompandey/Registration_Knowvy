"use client";

import { motion } from "framer-motion";
import { Mail, Phone, Globe, MessageSquare, Terminal } from "lucide-react";

const contacts = [
  { icon: Globe, label: "ORGANIZER", value: "Knowvy Technologies", href: "https://instagram.com/knowvy_technologies/" },
  { icon: Terminal, label: "REGISTRATION", value: "Official Link", href: "https://registration-knowvy.vercel.app/" },
  { icon: MessageSquare, label: "COMMUNITY", value: "Join Network", href: "https://linktr.ee/knowvy_technologies" },
  { icon: Mail, label: "CONTACT", value: "knowvy.tech@gmail.com", href: "mailto:knowvy.tech@gmail.com" },
];

export function ContactSection() {
  return (
    <section id="contact" className="py-24 relative overflow-hidden bg-background border-t border-dashed border-primary/20">
      {/* Tech grid overlay */}
      <div className="absolute inset-0 z-0 bg-[linear-gradient(to_right,#333_1px,transparent_1px),linear-gradient(to_bottom,#333_1px,transparent_1px)] bg-[size:2rem_2rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_50%,#000_30%,transparent_100%)] opacity-10" />

      <div className="container mx-auto px-6 md:px-12 relative z-10">
        <div className="text-center mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="flex items-center justify-center gap-4 mb-4"
          >
            <div className="h-[1px] w-8 border-t border-dashed border-primary/50"></div>
            <h2 className="text-3xl md:text-5xl font-mono font-bold tracking-tight text-white uppercase">
              ORGANIZER_CONTACT<span className="text-primary">_</span>
            </h2>
            <div className="h-[1px] w-8 border-t border-dashed border-primary/50"></div>
          </motion.div>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-gray-400 max-w-2xl mx-auto text-lg font-sans"
          >
            Establish a direct connection with central command.
          </motion.p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-5xl mx-auto">
          {contacts.map((contact, index) => (
            <motion.a
              href={contact.href}
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: index * 0.1 }}
              className="bg-black/50 border border-border p-6 flex flex-col items-center text-center group hover:border-primary/50 transition-all relative overflow-hidden"
            >
              <div className="absolute top-0 right-0 p-2 opacity-0 group-hover:opacity-100 transition-opacity">
                <Terminal className="w-4 h-4 text-primary/50" />
              </div>
              <div className="w-14 h-14 border border-primary/30 flex items-center justify-center mb-4 group-hover:bg-primary/20 transition-colors rotate-45">
                <contact.icon className="w-6 h-6 text-primary -rotate-45" />
              </div>
              <h4 className="text-xs font-mono font-bold text-gray-500 mb-2 uppercase tracking-widest">{contact.label}</h4>
              <p className="text-white font-mono text-sm tracking-wide">{contact.value}</p>
            </motion.a>
          ))}
        </div>
      </div>
    </section>
  );
}
