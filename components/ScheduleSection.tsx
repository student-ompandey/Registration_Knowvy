"use client";

import { motion } from "framer-motion";

const schedule = [
  { time: "09:00 AM", title: "Registration & Check-In", desc: "Check-in, grab your badge, and morning networking." },
  { time: "10:00 AM", title: "Opening Keynote", desc: "Welcome address and event kickoff." },
  { time: "10:30 AM", title: "Moving Beyond the Prompt: Engineering Real-World AI Agents", desc: "Core technical session on building and deploying AI agents." },
  { time: "11:30 AM", title: "Building AI Applications with Azure", desc: "Cloud native development and Azure AI services." },
  { time: "12:30 PM", title: "Lunch & Networking", desc: "Refuel and connect with fellow developers." },
  { time: "02:00 PM", title: "Hands-On AI Development Session", desc: "Practical session building real-world AI applications." },
  { time: "03:30 PM", title: "Community Talks", desc: "Insights from the developer community and tech leaders." },
  { time: "04:30 PM", title: "Panel Discussion", desc: "Expert discussion on the future of AI and software engineering." },
  { time: "05:30 PM", title: "Closing Session & Networking", desc: "Concluding remarks, feedback, and final networking." },
];

export function ScheduleSection() {
  return (
    <section id="schedule" className="py-24 bg-background relative border-t border-dashed border-primary/20">
      <div className="container mx-auto px-6 md:px-12 max-w-4xl relative z-10">
        <div className="text-center mb-20">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="flex items-center justify-center gap-4 mb-4"
          >
            <div className="h-[1px] w-8 border-t border-dashed border-primary/50"></div>
            <h2 className="text-3xl md:text-5xl font-mono font-bold tracking-tight text-white uppercase drop-shadow-md">
              EVENT_SCHEDULE<span className="text-primary animate-pulse">_</span>
            </h2>
            <div className="h-[1px] w-8 border-t border-dashed border-primary/50"></div>
          </motion.div>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-gray-400 text-lg font-sans max-w-2xl mx-auto"
          >
            A comprehensive timeline of sessions, keynotes, and practical development activities for the day.
          </motion.p>
        </div>

        <div className="relative">
          {/* Central Timeline Line */}
          <div className="absolute left-[15px] md:left-1/2 top-0 bottom-0 w-[2px] bg-primary/20 md:-translate-x-1/2">
            <div className="absolute top-0 bottom-0 left-0 w-full bg-gradient-to-b from-primary/50 via-primary/10 to-transparent"></div>
          </div>

          {schedule.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className={`relative flex flex-col md:flex-row items-center mb-16 ${
                index % 2 === 0 ? "md:justify-start" : "md:justify-end"
              }`}
            >
              {/* Timeline dot with glowing effect */}
              <div className="absolute left-[15px] md:left-1/2 w-3 h-3 bg-background border-2 border-primary rounded-full z-10 shadow-[0_0_10px_rgba(var(--primary),0.8)] -translate-x-1/2" />
              
              {/* Connecting line to the card */}
              <div className={`hidden md:block absolute top-1/2 -translate-y-1/2 w-12 border-t border-dashed border-primary/30 z-0 ${index % 2 === 0 ? "right-1/2" : "left-1/2"}`}></div>

              <div className={`w-full md:w-[calc(50%-3rem)] pl-12 md:pl-0 ${index % 2 === 0 ? "md:text-right" : "text-left"}`}>
                <div className="bg-black/40 backdrop-blur-md border border-white/5 p-6 hover:border-primary/50 transition-all duration-300 group relative hover:shadow-[0_4px_30px_rgba(var(--primary),0.1)] rounded-sm">
                  {/* Decorative corner */}
                  <div className={`absolute top-0 w-3 h-3 border-t-2 border-primary opacity-0 group-hover:opacity-100 transition-opacity duration-300 ${index % 2 === 0 ? "right-0 border-r-2" : "left-0 border-l-2"}`}></div>
                  
                  <div className={`flex flex-col ${index % 2 === 0 ? "md:items-end" : "md:items-start"}`}>
                    <span className="inline-block px-3 py-1 bg-primary/10 border border-primary/20 text-primary font-mono text-xs tracking-widest mb-4 rounded-full">{item.time}</span>
                    <h3 className="text-xl font-mono font-bold text-white mb-2 uppercase tracking-wide group-hover:text-primary transition-colors duration-300">{item.title}</h3>
                    <p className="text-gray-400 text-sm font-sans leading-relaxed">{item.desc}</p>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
