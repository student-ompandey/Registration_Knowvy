"use client";

import { motion } from "framer-motion";
import { Mail, Phone, Globe, MessageSquare } from "lucide-react";

const contacts = [
  { icon: Mail, label: "Email", value: "hello@techworkshop.com", href: "mailto:hello@techworkshop.com" },
  { icon: Phone, label: "Phone", value: "+91 98765 43210", href: "tel:+919876543210" },
  { icon: Globe, label: "Website", value: "techworkshop26.com", href: "#" },
  { icon: MessageSquare, label: "Community", value: "Join Discord", href: "#" },
];

export function ContactSection() {
  return (
    <section id="contact" className="py-24 relative overflow-hidden">
      {/* Background Glow */}
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-primary/10 rounded-full blur-[120px] -z-10" />
      <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-secondary/10 rounded-full blur-[120px] -z-10" />

      <div className="container mx-auto px-6 md:px-12">
        <div className="text-center mb-16">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="text-3xl md:text-5xl font-bold mb-4"
          >
            Get in Touch
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-gray-400 max-w-2xl mx-auto text-lg"
          >
            Have more questions? Reach out to our team directly.
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
              whileHover={{ y: -5 }}
              className="bg-card/40 backdrop-blur-md border border-border/60 rounded-2xl p-6 flex flex-col items-center text-center group hover:border-primary/50 hover:bg-card/60 transition-all"
            >
              <div className="w-14 h-14 rounded-full bg-white/5 flex items-center justify-center mb-4 group-hover:bg-primary/20 transition-colors">
                <contact.icon className="w-6 h-6 text-gray-300 group-hover:text-primary transition-colors" />
              </div>
              <h4 className="text-sm font-medium text-gray-500 mb-1">{contact.label}</h4>
              <p className="text-white font-medium">{contact.value}</p>
            </motion.a>
          ))}
        </div>
      </div>
    </section>
  );
}
