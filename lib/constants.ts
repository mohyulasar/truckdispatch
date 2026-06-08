export const SITE = {
  name: "Global Dispatch Services",
  shortName: "Global Dispatch",
  tagline: "Professional truck dispatch for owner-operators and small fleets",
  description:
    "Global Dispatch Services helps owner-operators and small fleets find better loads, negotiate rates, and stay on the road — without the hassle of load boards and broker calls.",
  url: "https://globaldispatchservices.com",
  phone: "(800) 555-0123",
  phoneHref: "tel:+18005550123",
  email: "info@globaldispatchservices.com",
  dispatchEmail: "dispatch@globaldispatchservices.com",
  hours: "Mon–Fri, 7:00 AM – 7:00 PM ET",
  serviceArea: "Serving carriers nationwide across the United States",
} as const;

export const NAV_LINKS = [
  { href: "/", label: "Home" },
  { href: "/services", label: "Services" },
  { href: "/how-it-works", label: "How It Works" },
  { href: "/pricing", label: "Pricing" },
  { href: "/about", label: "About" },
  { href: "/faq", label: "FAQ" },
  { href: "/contact", label: "Contact" },
] as const;

export const TRUST_STATS = [
  { value: "500+", label: "Loads dispatched monthly" },
  { value: "150+", label: "Active carriers" },
  { value: "5+", label: "Years of experience" },
  { value: "24/7", label: "Load support" },
] as const;

export const SERVICES = [
  {
    title: "Load Sourcing & Booking",
    description:
      "We search load boards and broker networks to find profitable freight that matches your equipment and lanes.",
    icon: "truck" as const,
  },
  {
    title: "Rate Negotiation",
    description:
      "Our dispatchers negotiate on your behalf to maximize your revenue per mile and reduce deadhead.",
    icon: "trending" as const,
  },
  {
    title: "Broker Communication",
    description:
      "We handle check calls, rate confirmations, and broker updates so you can focus on driving.",
    icon: "message" as const,
  },
  {
    title: "Paperwork & Documentation",
    description:
      "Rate cons, BOL support, and invoicing assistance to keep your loads compliant and paid on time.",
    icon: "file" as const,
  },
] as const;

export const HOW_IT_WORKS_STEPS = [
  {
    step: 1,
    title: "Apply & Connect",
    description:
      "Fill out our quick quote form. We'll review your MC authority, equipment, and preferred lanes.",
  },
  {
    step: 2,
    title: "Onboarding Setup",
    description:
      "We configure your dispatch profile, load preferences, and communication channels within 24–48 hours.",
  },
  {
    step: 3,
    title: "First Load Booked",
    description:
      "Your dedicated dispatcher starts sourcing loads. You approve each load before we book it.",
  },
  {
    step: 4,
    title: "Ongoing Support",
    description:
      "Continuous load coverage, rate optimization, and 24/7 support while you're on the road.",
  },
] as const;

export const TESTIMONIALS = [
  {
    quote:
      "Global Dispatch Services changed my business. I'm making more per mile and spending zero time on load boards.",
    author: "Marcus T.",
    role: "Owner-Operator, Dry Van",
  },
  {
    quote:
      "We added 3 trucks last year without hiring dispatch staff. They handle everything for our fleet.",
    author: "Sarah K.",
    role: "Fleet Owner, 8 Trucks",
  },
  {
    quote:
      "Transparent pricing, responsive team, and they actually know the lanes I run. Highly recommend.",
    author: "James R.",
    role: "Owner-Operator, Reefer",
  },
] as const;

export const FAQ_ITEMS = [
  {
    question: "What is a truck dispatch service?",
    answer:
      "A dispatch service finds and books freight loads on your behalf, negotiates rates with brokers, handles communication, and supports paperwork — so you can focus on driving instead of searching load boards.",
  },
  {
    question: "Do I need my own MC authority?",
    answer:
      "Yes. Global Dispatch Services works with carriers who hold their own MC authority. We are a dispatch service, not a broker — you maintain your carrier relationship and authority.",
  },
  {
    question: "How much does dispatch cost?",
    answer:
      "Our standard fee is a percentage of gross load revenue, typically 5–8% depending on fleet size and service level. Contact us for a custom quote based on your number of trucks and equipment type.",
  },
  {
    question: "What equipment types do you support?",
    answer:
      "We dispatch dry van, reefer, flatbed, box truck, and power only. Tell us your equipment type when you request a quote and we'll confirm lane availability.",
  },
  {
    question: "Can I choose which loads to accept?",
    answer:
      "Absolutely. You always have final approval on every load before we book it. We present options with rate, miles, and pickup/delivery details — you decide.",
  },
  {
    question: "Is there a long-term contract?",
    answer:
      "We offer flexible agreements. Most carriers start with a simple dispatch agreement with clear terms. Ask about our options during your free consultation.",
  },
] as const;

export const EQUIPMENT_OPTIONS = [
  "Dry Van",
  "Reefer",
  "Flatbed",
  "Box Truck",
  "Power Only",
  "Other",
] as const;

export const HEARD_ABOUT_OPTIONS = [
  "Google Search",
  "Referral",
  "Social Media",
  "Truck Stop / Industry Event",
  "Other",
] as const;
