import {
  Clock,
  CalendarCheck,
  Radio,
  CheckCircle2,
  MessagesSquare,
  Sparkles,
  Repeat,
  Users,
  Coffee,
  Briefcase,
  Palette,
  TrendingUp,
  Cpu,
  type LucideIcon,
} from "lucide-react";

/* ═══════════════════════════════════════════
   CITY STATUS
═══════════════════════════════════════════ */

export type CityStatus = "announced" | "dates-soon" | "open" | "done";

export const STATUS_META: Record<
  CityStatus,
  { label: string; tone: string; pulse: boolean; icon: LucideIcon }
> = {
  announced: {
    label: "Announced",
    tone: "var(--ink-2)",
    pulse: false,
    icon: Clock,
  },
  "dates-soon": {
    label: "Dates announcing soon",
    tone: "var(--brand)",
    pulse: false,
    icon: CalendarCheck,
  },
  open: {
    label: "Registrations open",
    tone: "var(--pop)",
    pulse: true,
    icon: Radio,
  },
  done: {
    label: "Completed",
    tone: "var(--ok)",
    pulse: false,
    icon: CheckCircle2,
  },
};

/* ═══════════════════════════════════════════
   CITIES (With Representative Landmarks/Images)
═══════════════════════════════════════════ */

export type City = {
  order: 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9;
  slug: string;
  name: string;
  state: string;
  status: CityStatus;
  date: string | null;
  venue: string | null;
  registerUrl: string | null;
  landmark: string;
  image: string;
};

export const CITIES: readonly City[] = [
  {
    order: 1,
    slug: "jabalpur",
    name: "Jabalpur",
    state: "Madhya Pradesh",
    status: "dates-soon",
    date: null,
    venue: null,
    registerUrl: null,
    landmark: "Marble Rocks & Dhuandhar Falls",
    image: "https://images.unsplash.com/photo-1596895111956-bf1cf0599ce5?auto=format&fit=crop&w=800&q=80",
  },
  {
    order: 2,
    slug: "delhi",
    name: "Delhi",
    state: "Delhi NCR",
    status: "dates-soon",
    date: null,
    venue: null,
    registerUrl: null,
    landmark: "India Gate & Connaught Place",
    image: "https://images.unsplash.com/photo-1587474260584-136574528ed5?auto=format&fit=crop&w=800&q=80",
  },
  {
    order: 3,
    slug: "hyderabad",
    name: "Hyderabad",
    state: "Telangana",
    status: "dates-soon",
    date: null,
    venue: null,
    registerUrl: null,
    landmark: "Charminar & HITEC City",
    image: "/heygen/cities/hyderabad.jpg",
  },
  {
    order: 4,
    slug: "chennai",
    name: "Chennai",
    state: "Tamil Nadu",
    status: "dates-soon",
    date: null,
    venue: null,
    registerUrl: null,
    landmark: "Marina Beach & Central Station",
    image: "https://images.unsplash.com/photo-1582510003544-4d00b7f74220?auto=format&fit=crop&w=800&q=80",
  },
  {
    order: 5,
    slug: "mumbai",
    name: "Mumbai",
    state: "Maharashtra",
    status: "dates-soon",
    date: null,
    venue: null,
    registerUrl: null,
    landmark: "Gateway of India & Marine Drive",
    image: "https://images.unsplash.com/photo-1570168007204-dfb528c6958f?auto=format&fit=crop&w=800&q=80",
  },
  {
    order: 6,
    slug: "pune",
    name: "Pune",
    state: "Maharashtra",
    status: "dates-soon",
    date: null,
    venue: null,
    registerUrl: null,
    landmark: "Shaniwar Wada & Tech Parks",
    image: "https://images.unsplash.com/photo-1598890777032-bde835ba27c2?auto=format&fit=crop&w=800&q=80",
  },
  {
    order: 7,
    slug: "bengaluru",
    name: "Bengaluru",
    state: "Karnataka",
    status: "dates-soon",
    date: null,
    venue: null,
    registerUrl: null,
    landmark: "Vidhana Soudha & Silicon Valley Hub",
    image: "https://images.unsplash.com/photo-1596176530529-78163a4f7af2?auto=format&fit=crop&w=800&q=80",
  },
  {
    order: 8,
    slug: "bhopal",
    name: "Bhopal",
    state: "Madhya Pradesh",
    status: "dates-soon",
    date: null,
    venue: null,
    registerUrl: null,
    landmark: "VIP Upper Lake & Taj-ul-Masajid",
    image: "https://images.unsplash.com/photo-1604999333679-b86d54738315?auto=format&fit=crop&w=800&q=80",
  },
  {
    order: 9,
    slug: "indore",
    name: "Indore",
    state: "Madhya Pradesh",
    status: "dates-soon",
    date: null,
    venue: null,
    registerUrl: null,
    landmark: "Rajwada Palace & Sarafa",
    image: "https://images.unsplash.com/photo-1567157577867-05ccb1388e66?auto=format&fit=crop&w=800&q=80",
  },
];

/* ═══════════════════════════════════════════
   SERIES CONSTANTS
═══════════════════════════════════════════ */

export const SERIES = {
  name: "HeyGen India RoadShow Series",
  tagline: "One Mission. 9 Cities. Infinite Possibilities.",
  hashtag: "#HeyGenIndiaRoadShow",
  twitterHandle: "@mohneesh_gupta1",
  twitterUrl: "https://x.com/mohneesh_gupta1",
  email: "knowvy.tech@gmail.com",
  mailUrl: "mailto:knowvy.tech@gmail.com?subject=HeyGen%20India%20RoadShow%20Inquiry",
  hostMailUrl: "mailto:knowvy.tech@gmail.com?subject=Host%20HeyGen%20RoadShow%20Stop",
};

/* ═══════════════════════════════════════════
   STOP AGENDA TRACKS
═══════════════════════════════════════════ */

export const TRACKS = [
  {
    idx: "01",
    title: "Real talk on how you market today",
    desc: "Open floor for founders and creators to share what's working — and what's not — in their marketing and growth.",
    icon: MessagesSquare,
    accent: 1,
    flagship: true,
  },
  {
    idx: "02",
    title: "AI avatars & video, hands-on",
    desc: "Live walkthroughs of HeyGen's AI video tools — create your first avatar, script, and publish-ready video.",
    icon: Sparkles,
    accent: 3,
  },
  {
    idx: "03",
    title: "Staying consistent at scale",
    desc: "Strategies for maintaining brand consistency across platforms when you're producing at volume.",
    icon: Repeat,
    accent: 5,
  },
  {
    idx: "04",
    title: "Founder-to-founder connections",
    desc: "Structured networking that leads to real collaborations — not just LinkedIn connections.",
    icon: Users,
    accent: 7,
  },
  {
    idx: "05",
    title: "Open floor",
    desc: "Unstructured time for Q&A, demos, and the conversations that happen after the agenda ends.",
    icon: Coffee,
    accent: 9,
  },
];

/* ═══════════════════════════════════════════
   AUDIENCE CARDS
═══════════════════════════════════════════ */

export const AUDIENCE = [
  {
    title: "Founders & Business Owners",
    desc: "Walk away with a clearer content strategy and tools to execute it without a production team.",
    icon: Briefcase,
    accent: 1,
  },
  {
    title: "Creators & Content Teams",
    desc: "Discover how AI video can multiply your output while keeping your creative voice intact.",
    icon: Palette,
    accent: 3,
  },
  {
    title: "Marketing & Growth Folks",
    desc: "See real case studies of AI-generated video driving engagement and conversion.",
    icon: TrendingUp,
    accent: 5,
  },
  {
    title: "Builders Curious About AI Video",
    desc: "No jargon, no gatekeeping — just honest conversation about where AI video fits today.",
    icon: Cpu,
    accent: 7,
  },
];

/* ═══════════════════════════════════════════
   CAPABILITIES (WhyAIVideo section)
═══════════════════════════════════════════ */

export const CAPABILITIES = [
  {
    title: "AI Avatars",
    desc: "Create professional spokesperson videos without a camera, studio, or script revision cycle.",
  },
  {
    title: "Consistent Social Content",
    desc: "Maintain brand voice across 50+ videos a month without burning out your team.",
  },
  {
    title: "Video That Grows a Business",
    desc: "From product explainers to personalised outreach — video that converts, not just entertains.",
  },
];

/* ═══════════════════════════════════════════
   FAQ
═══════════════════════════════════════════ */

export const FAQS = [
  {
    question: "Is it free?",
    answer:
      "Yes. Every HeyGen India RoadShow stop is free to attend. No hidden costs, no upsells at the door.",
  },
  {
    question: "Do I need a HeyGen account?",
    answer:
      "Nope. You don't need an account, a subscription, or any prior experience with HeyGen. We'll walk through everything live.",
  },
  {
    question: "Is this a sales pitch?",
    answer:
      "No. This is a space for real conversations about marketing, content, and growth. HeyGen is part of the conversation because it's a powerful tool — but nobody's selling you anything.",
  },
  {
    question: "Can students or job-seekers attend?",
    answer:
      "Absolutely. If you're curious about AI video, content creation, or just want to meet people building things — you belong here.",
  },
  {
    question: "Will sessions be recorded?",
    answer:
      "Highlights and key takeaways will be shared after each stop. Full recordings depend on the format of each city's session.",
  },
  {
    question: "Can I bring a co-founder or teammate?",
    answer:
      "Yes — in fact, we encourage it. Come together to accelerate your workflow as a team.",
  },
  {
    question: "My city isn't listed — what now?",
    answer:
      "We're starting with 9 cities, but the series can grow. Reach out via email (knowvy.tech@gmail.com) or DM on X (@mohneesh_gupta1) and let us know!",
  },
  {
    question: "Who's organising this?",
    answer:
      "The series is led by Knowvy Technologies and hosted by Mohneesh Gupta, HeyGen India Ambassador.",
  },
];

/* ═══════════════════════════════════════════
   NAV LINKS (No Gallery, clean anchors)
═══════════════════════════════════════════ */

export const NAV_LINKS = [
  { name: "The Series", href: "#series" },
  { name: "Route", href: "#route" },
  { name: "At a Stop", href: "#at-a-stop" },
  { name: "Who It's For", href: "#who" },
  { name: "Host / Partner", href: "#partner" },
  { name: "FAQ", href: "#faq" },
];
