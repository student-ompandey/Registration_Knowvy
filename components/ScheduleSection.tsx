"use client";

import { motion } from "framer-motion";

const schedule = [
  { time: "10:00 AM", title: "Registration & Networking", desc: "Check-in, grab a coffee, and meet your fellow attendees." },
  { time: "10:30 AM", title: "Opening Session", desc: "Welcome address and introduction to the workshop goals." },
  { time: "11:00 AM", title: "Workshop Begins", desc: "Deep dive into modern web development and framework fundamentals." },
  { time: "01:00 PM", title: "Practical Activity", desc: "Hands-on coding session building a real-world component." },
  { time: "02:00 PM", title: "Live Q&A Session", desc: "Ask questions, troubleshoot issues, and discuss best practices." },
  { time: "03:00 PM", title: "Closing Ceremony", desc: "Certificate distribution and concluding remarks." },
];

export function ScheduleSection() {
  return (
    <section id="schedule" className="py-24 bg-[#0B1020]">
      <div className="container mx-auto px-6 md:px-12 max-w-4xl">
        <div className="text-center mb-16">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="text-3xl md:text-5xl font-bold mb-4"
          >
            Event Schedule
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-gray-400 text-lg"
          >
            A packed day of learning, building, and networking.
          </motion.p>
        </div>

        <div className="relative border-l-2 border-primary/30 ml-4 md:ml-0 md:left-1/2 md:-translate-x-[1px]">
          {schedule.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className={`relative pl-8 md:pl-0 mb-12 flex flex-col md:flex-row items-center ${
                index % 2 === 0 ? "md:justify-start" : "md:justify-end"
              }`}
            >
              {/* Timeline dot */}
              <div className="absolute left-[-9px] md:left-1/2 md:-translate-x-[9px] w-4 h-4 rounded-full bg-primary ring-4 ring-primary/20 z-10" />
              
              <div className={`md:w-1/2 ${index % 2 === 0 ? "md:pr-12 md:text-right" : "md:pl-12 text-left"}`}>
                <div className="bg-card border border-border p-6 rounded-2xl hover:border-primary/50 transition-colors">
                  <span className="text-primary font-mono text-sm font-semibold mb-2 block">{item.time}</span>
                  <h3 className="text-xl font-bold text-white mb-2">{item.title}</h3>
                  <p className="text-gray-400 text-sm">{item.desc}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
